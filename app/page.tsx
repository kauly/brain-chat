import {
  Carousel,
  CarouselGallery,
  CarouselDotControl,
  CarouselButtonControl,
  CarouselGalleryText,
} from "@/components/carousel";
import { CAROUSEL_ITEMS } from "@/config/constants";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <Carousel items={CAROUSEL_ITEMS}>
        <CarouselGallery />
        <CarouselDotControl />
        <CarouselGalleryText />
        <CarouselButtonControl />
      </Carousel>
    </section>
  );
}
