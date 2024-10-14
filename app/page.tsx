import {
  Carousel,
  CarouselGallery,
  CarouselDotControl,
  CarouselButtonControl,
  CarouselGalleryText,
} from "@/components/carousel";
import { Navbar } from "@/components/navbar";
import { CAROUSEL_ITEMS } from "@/config/constants";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4">
      <Navbar />
      <Carousel items={CAROUSEL_ITEMS}>
        <CarouselGallery />
        <CarouselDotControl />
        <CarouselGalleryText />
        <CarouselButtonControl />
      </Carousel>
    </section>
  );
}
