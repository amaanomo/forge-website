import { useEffect, useRef } from 'react'

export function useMousePositionRef(containerRef: React.RefObject<HTMLElement | null>) {
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mousePosition.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [containerRef])

  return mousePosition
}
