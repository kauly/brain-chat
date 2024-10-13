"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useContext } from "react";

import { ArrowLeft, ArrowRight, Divider } from "@/components/icons";
import { CarouselContext } from "./Carousel";

export function CarouselButtonControl() {
  const { handleDecrement, handleIncrement } = useContext(CarouselContext);

  return (
    <Card className="mt-4">
      <CardBody>
        <div className="flex gap-4 items-center justify-start">
          <Button
            isIconOnly
            variant="light"
            aria-label="Gallery Previous"
            onClick={handleDecrement}
          >
            <ArrowLeft />
          </Button>
          <Divider />
          <Button
            isIconOnly
            variant="light"
            aria-label="Gallery Next"
            onClick={handleIncrement}
          >
            <ArrowRight />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
