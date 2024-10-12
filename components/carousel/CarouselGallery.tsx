"use client";

import { motion } from "framer-motion";
import { useContext } from "react";

import { CarouselContext } from "./Carousel";

export function CarouselGallery() {
  const { index, items } = useContext(CarouselContext);

  return (
    <div className="rounded-lg overflow-hidden w-full h-[440px] md:w-[600px]">
      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      >
        {items.map((item, i) => (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="aspect-[3/2] object-cover w-full h-full shadow-lg rounded-lg"
            key={`carousel-image-${i}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
