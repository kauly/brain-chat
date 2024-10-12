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
  );
}
