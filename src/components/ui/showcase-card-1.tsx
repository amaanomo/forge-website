"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Store } from "lucide-react";

interface ShowcaseCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
}

export const ShowcaseCard = ({
  image,
  title,
  description,
  href,
}: ShowcaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 35px 80px -15px rgba(0,0,0,0.7)",
        borderColor: "rgba(255,255,255,0.2)",
      }}
      className="flex flex-col min-h-[55vh] w-[40vh] min-w-[260px] rounded-[2rem] overflow-hidden bg-black/80 backdrop-blur-sm border border-gray-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer p-5 gap-4"
    >
      {/* Header row: Store icon left, arrow button right */}
      <div className="flex items-center justify-between">
        <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
          <Store size={34} className="text-white" />
        </motion.div>

        {href ? (
          <Link href={href} aria-label={`Go to ${title}`}>
            <motion.div
              whileHover={{
                scale: 1.1,
                backgroundColor: "#60a5fa",
                boxShadow: "0 0 15px rgba(96,165,250,0.7)",
              }}
              className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </motion.div>
          </Link>
        ) : (
          <motion.div
            whileHover={{
              scale: 1.1,
              backgroundColor: "#60a5fa",
              boxShadow: "0 0 15px rgba(96,165,250,0.7)",
            }}
            className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Title with gradient */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent leading-tight">
        {title}
      </h2>

      {/* Image section */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-2xl">
        {/* Blurred backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-15 blur-sm scale-110"
            sizes="40vh"
            aria-hidden
          />
        </div>

        {/* Main image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 p-2"
        >
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded-2xl object-cover w-full h-full"
            sizes="40vh"
          />
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-xs text-center text-neutral-400 font-light leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

// Demo usage
export const ShowcaseCardDemo = () => (
  <ShowcaseCard
    image="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500"
    title="BALI"
    description="Discover the serene beauty of Bali — lush terraced rice paddies, ancient temples, and crystal-clear waters await."
    href="#"
  />
);
