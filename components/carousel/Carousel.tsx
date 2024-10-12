"use client";

import { createContext, PropsWithChildren, useState } from "react";

export const CarouselContext = createContext({
  items: [] as CarouselItem[],
  index: 0,
  handleDecrement: () => {},
  handleIncrement: () => {},
  handleIndex: (_index: number) => {},
});

export type CarouselItem = {
  imageSrc: string;
  title: string;
  description: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

export function Carousel({
  items = [],
  children,
}: PropsWithChildren<CarouselProps>) {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex((index + 1) % items.length);
  };

  const handleDecrement = () => {
    setIndex((index - 1 + items.length) % items.length);
  };

  const handleIndex = (index: number) => {
    setIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ items, index, handleDecrement, handleIncrement, handleIndex }}
    >
      <div className="flex flex-col gap-4 items-center">{children}</div>
    </CarouselContext.Provider>
  );
}
