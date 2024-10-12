"use client";

import { useContext } from "react";

import { subtitle, title } from "@/components/primitives";
import { CarouselContext } from "./Carousel";

export function CarouselGalleryText() {
  const { index, items } = useContext(CarouselContext);

  return (
    <div className="flex flex-col gap-2 ">
      <h2 className={title({ align: "center", fullWidth: true })}>
        {items[index].title}
      </h2>
      <p className={subtitle({ color: "foreground", align: "center" })}>
        {items[index].description}
      </p>
    </div>
  );
}
