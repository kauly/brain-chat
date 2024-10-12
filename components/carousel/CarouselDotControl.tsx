"use client";

import clsx from "clsx";
import { useContext } from "react";

import { CarouselContext } from "./Carousel";

export function CarouselDotControl() {
  const { index, items, handleIndex } = useContext(CarouselContext);

  return (
    <div className="flex gap-2 items-center justify-center">
      {Array.from({ length: items.length }).map((_, i) => (
        <button
          onClick={() => handleIndex(i)}
          key={`dot-${i}`}
          className={clsx(
            "rounded-full border-2 border-transparent w-[12px] h-[12px] bg-foreground",
            i === index && "border-zinc-600",
            i === index && "w-[18px] h-[18px]"
          )}
        />
      ))}
    </div>
  );
}
