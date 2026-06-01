'use client'

import { useEffect, useRef, useState } from 'react'
import createGlobe from 'cobe'

export type PolaroidMarker = {
  id: string
  location: [number, number]
  image: string
  caption: string
  rotate: number
}

type GlobePolaroidsProps = {
  markers: PolaroidMarker[]
  speed?: number
  activeId?: string | null
  onActiveIdChange?: (id: string | null) => void
}

type Snap = { startPhi: number; endPhi: number; startTime: number }

// Replicates COBE's internal U + O projection to find normalized screen coords
function projectMarker(lat: number, lng: number, phi: number, theta: number) {
  const latR = lat * Math.PI / 180
  const lngR = lng * Math.PI / 180 - Math.PI
  const cosLat = Math.cos(latR)
  const elev = 0.85
  const tx = -cosLat * Math.cos(lngR) * elev
  const ty = Math.sin(latR) * elev
  const tz = cosLat * Math.sin(lngR) * elev
  const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi)
  const cosTheta = Math.cos(theta), sinTheta = Math.sin(theta)
  const cx = cosPhi * tx + sinPhi * tz
  const sy = sinPhi * sinTheta * tx + cosTheta * ty - cosPhi * sinTheta * tz
  const sz = -sinPhi * cosTheta * tx + sinTheta * ty + cosPhi * cosTheta * tz
  return {
    nx: (cx + 1) / 2,
    ny: (-sy + 1) / 2,
    visible: sz >= 0 || (cx * cx + sy * sy) >= 0.64,
  }
}

// The phi at which longitude L appears centered on screen.
// Derived from COBE's projection: cx = cos(lat)*cos(phi + lng_rad),
// centered (cx=0) + front-facing (sz>0) → phi = -PI/2 - lng_rad
function phiForLng(lng: number) {
  return -(Math.PI / 2) - (lng * Math.PI / 180)
}

export function GlobePolaroids({ markers, speed = 0.003, activeId: activeIdProp, onActiveIdChange }: GlobePolaroidsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0.2)
  const dragRef = useRef({ phi: 0, theta: 0 })
  const interactingRef = useRef<{ x: number; y: number } | null>(null)
  const isPausedRef = useRef(false)
  const currentPhiRef = useRef(0)
  const currentThetaRef = useRef(0.2)
  const autoPhiRef = useRef(0)
  const snapRef = useRef<Snap | null>(null)
  const markersRef = useRef(markers)
  const [internalActiveId, setInternalActiveId] = useState<string | null>(null)

  const activeId = activeIdProp !== undefined ? activeIdProp : internalActiveId
  const activeIdRef = useRef(activeId)
  activeIdRef.current = activeId

  const setActiveId = (id: string | null) => {
    setInternalActiveId(id)
    onActiveIdChange?.(id)
  }

  useEffect(() => { markersRef.current = markers }, [markers])

  // When activeId changes, compute shortest-path snap from current phi to the marker's longitude
  useEffect(() => {
    if (!activeId) return
    const marker = markers.find(m => m.id === activeId)
    if (!marker) return
    const targetPhi = phiForLng(marker.location[1])
    const currentPhi = autoPhiRef.current + phiOffsetRef.current
    // Shortest-path angle difference, normalized to [-PI, PI]
    const diff = ((targetPhi - currentPhi) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI
    snapRef.current = {
      startPhi: currentPhi,
      endPhi: currentPhi + diff,
      startTime: performance.now(),
    }
  }, [activeId, markers])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!interactingRef.current) return
      dragRef.current = {
        phi: (e.clientX - interactingRef.current.x) / 300,
        theta: (e.clientY - interactingRef.current.y) / 1000,
      }
    }

    const onUp = (e: PointerEvent) => {
      if (interactingRef.current) {
        const dx = e.clientX - interactingRef.current.x
        const dy = e.clientY - interactingRef.current.y
        const moved = Math.sqrt(dx * dx + dy * dy)

        phiOffsetRef.current += dragRef.current.phi
        thetaOffsetRef.current = Math.max(-0.5, Math.min(0.5, thetaOffsetRef.current + dragRef.current.theta))
        dragRef.current = { phi: 0, theta: 0 }

        if (moved < 6) {
          const canvas = canvasRef.current
          if (canvas) {
            const rect = canvas.getBoundingClientRect()
            const nx = (e.clientX - rect.left) / rect.width
            const ny = (e.clientY - rect.top) / rect.height
            let nearest: string | null = null
            let minDist = Infinity
            for (const m of markersRef.current) {
              const p = projectMarker(m.location[0], m.location[1], currentPhiRef.current, currentThetaRef.current)
              if (!p.visible) continue
              const d = Math.sqrt((p.nx - nx) ** 2 + (p.ny - ny) ** 2)
              if (d < 0.08 && d < minDist) { minDist = d; nearest = m.id }
            }
            setActiveId(activeIdRef.current === nearest ? null : nearest)
          }
        }
      }

      interactingRef.current = null
      if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
      isPausedRef.current = false
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let globe: ReturnType<typeof createGlobe> | null = null

    function init() {
      if (!canvas || globe) return
      const w = canvas.offsetWidth
      if (w === 0) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: w, height: w,
        phi: 0, theta: 0.2,
        dark: 0, diffuse: 1.5,
        mapSamples: 16000, mapBrightness: 9,
        baseColor: [1, 1, 1],
        glowColor: [0.941, 0.914, 0.875],
        markerColor: [0.0, 0.357, 0.733],
        markers: markers.map((m) => ({ location: m.location, size: 0.05, id: m.id })),
      })

      const loop = () => {
        const snap = snapRef.current
        if (snap) {
          // Time-based cubic ease-out snap — directly drives autoPhiRef
          const t = Math.min((performance.now() - snap.startTime) / 900, 1)
          const eased = 1 - (1 - t) ** 3
          autoPhiRef.current = snap.startPhi + (snap.endPhi - snap.startPhi) * eased
          phiOffsetRef.current = 0  // absorbed into autoPhiRef above

          if (t >= 1) {
            // Snap done — autoPhiRef is exactly at endPhi, normal += speed takes over next frame
            snapRef.current = null
          }
        } else if (!isPausedRef.current) {
          autoPhiRef.current += speed
        }

        const phi = autoPhiRef.current + phiOffsetRef.current + dragRef.current.phi
        const theta = Math.max(-0.5, Math.min(0.5, thetaOffsetRef.current + dragRef.current.theta))
        currentPhiRef.current = phi
        currentThetaRef.current = theta
        const activeMarkers = activeIdRef.current
          ? markersRef.current.filter(m => m.id === activeIdRef.current)
          : markersRef.current
        globe!.update({ phi, theta, markers: activeMarkers.map(m => ({ location: m.location, size: 0.05, id: m.id })) })
        requestAnimationFrame(loop)
      }
      requestAnimationFrame(loop)
      setTimeout(() => { if (canvas) canvas.style.opacity = '1' })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) { ro.disconnect(); init() }
      })
      ro.observe(canvas)
      return () => {
        ro.disconnect()
        if (globe) globe.destroy()
      }
    }

    return () => {
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className="relative aspect-square select-none">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          interactingRef.current = { x: e.clientX, y: e.clientY }
          e.currentTarget.style.cursor = 'grabbing'
          isPausedRef.current = true
          snapRef.current = null  // cancel snap on manual drag
        }}
        style={{
          width: '100%', height: '100%',
          cursor: 'grab', opacity: 0,
          transition: 'opacity 1.2s ease',
          borderRadius: '50%', touchAction: 'none',
        }}
      />

      {(activeId ? markers.filter(m => m.id === activeId) : markers).map((m) => {
        const isActive = activeId === m.id
        return (
          <div
            key={m.id}
            style={{
              position: "absolute",
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 8,
              background: "#fff",
              padding: "6px 6px 24px",
              boxShadow: isActive
                ? "0 8px 24px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.14)"
                : "0 2px 8px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.1)",
              transform: `rotate(${m.rotate}deg) scale(${isActive ? 1.3 : 1})`,
              transformOrigin: "bottom center",
              zIndex: isActive ? 100 : 1,
              pointerEvents: "none" as const,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.3s, filter 0.3s, transform 0.25s ease, box-shadow 0.25s ease",
            } as unknown as React.CSSProperties}
          >
            <img
              src={m.image}
              alt={m.caption}
              style={{ display: 'block', width: 60, height: 60, objectFit: 'cover' }}
            />
            <span style={{
              position: 'absolute', bottom: 5, left: 0, right: 0,
              textAlign: 'center', fontFamily: 'system-ui, sans-serif',
              fontSize: '0.5rem', color: '#333', letterSpacing: '0.02em',
            }}>
              {m.caption}
            </span>
          </div>
        )
      })}
    </div>
  )
}
