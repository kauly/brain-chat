"use client";

import { useContext } from "react";

import { CarouselContext } from "./Carousel";

import { subtitle, title } from "@/components/primitives";

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
