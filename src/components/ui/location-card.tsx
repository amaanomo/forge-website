import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LocationCardProps {
  imageUrl: string;
  location: string;
  country: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const LocationCard = React.forwardRef<HTMLDivElement, LocationCardProps>(
  ({ imageUrl, location, country, className, isActive, onClick }, ref) => {
    const cardVariants: Variants = {
      initial: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -5, transition: { type: "spring" as const, stiffness: 400, damping: 10 } },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-2xl border bg-white text-[#111] shadow-sm cursor-pointer",
          isActive ? "border-[#005bc4] ring-2 ring-[#005bc4]/20" : "border-[#e8e2d9]",
          className
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        role="button"
        onClick={onClick}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={`${location}`}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-[#111]">{location}</h3>
          <p className="text-sm text-[#888]">{country}</p>
        </div>
      </motion.div>
    );
  }
);

LocationCard.displayName = "LocationCard";

export { LocationCard };
