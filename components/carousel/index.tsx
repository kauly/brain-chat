"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Divider } from "../icons";
import { subtitle, title } from "../primitives";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { motion } from "framer-motion";

const ITEMS = [
  {
    imageSrc: "/images/astro1.jpeg",
    title: "Unlock the power of future AI",
    description:
      "Chat with the smartest AI Future Experience power of AI with us",
  },
  {
    imageSrc: "/images/astro2.jpeg",
    title: "Or agents will help you to get started",
    description: "Get started with our agents to unlock the power of AI",
  },
  {
    imageSrc: "/images/astro3.jpeg",
    title: "Fastest way to get started with AI",
    description: "Get started with AI in minutes with our agents",
  },
];

export function Carousel() {
  const [index, setIndex] = useState(0);

  const handleIncrement = () => {
    setIndex((index + 1) % ITEMS.length);
  };

  const handleDecrement = () => {
    setIndex((index - 1 + ITEMS.length) % ITEMS.length);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="relative overflow-hidden w-[320px] h-[480px] md:w-[420px]">
        <motion.div
          className="flex w-full h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          {ITEMS.map((item, i) => (
            <img
              src={item.imageSrc}
              alt={item.title}
              className="aspect-[3/2] object-cover w-full h-full shadow-lg rounded-lg"
              key={`carousel-image-${i}`}
            />
          ))}
        </motion.div>
      </div>

      <div className="flex gap-2 items-center justify-center cursor-pointer">
        {Array.from({ length: ITEMS.length }).map((_, i) => (
          <span
            onClick={() => setIndex(i)}
            key={`dot-${i}`}
            className={clsx(
              "rounded-full border-2 border-transparent w-[12px] h-[12px] bg-white",
              i === index && "border-zinc-600",
              i === index && "w-[18px] h-[18px]"
            )}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 ">
        <h2 className={title({ align: "center", fullWidth: true })}>
          {ITEMS[index].title}
        </h2>
        <p className={subtitle({ color: "foreground", align: "center" })}>
          {ITEMS[index].description}
        </p>
      </div>
      <Card className="mt-4">
        <CardBody>
          <div className="flex gap-4 items-center justify-start">
            <Button isIconOnly variant="light" onClick={handleDecrement}>
              <ArrowLeft fill="#fff" />
            </Button>
            <Divider fill="#fff" />
            <Button isIconOnly variant="light" onClick={handleIncrement}>
              <ArrowRight fill="#fff" />
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
