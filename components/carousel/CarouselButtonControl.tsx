"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useContext } from "react";

import { CarouselContext } from "./Carousel";

import { ArrowLeft, ArrowRight, Divider } from "@/components/icons";

export function CarouselButtonControl() {
  const { handleDecrement, handleIncrement } = useContext(CarouselContext);

  return (
    <Card className="mt-4">
      <CardBody>
        <div className="flex gap-4 items-center justify-start">
          <Button
            isIconOnly
            aria-label="Gallery Previous"
            variant="light"
            onClick={handleDecrement}
          >
            <ArrowLeft />
          </Button>
          <Divider />
          <Button
            isIconOnly
            aria-label="Gallery Next"
            variant="light"
            onClick={handleIncrement}
          >
            <ArrowRight />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
