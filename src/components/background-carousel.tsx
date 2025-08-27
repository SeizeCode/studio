"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const backgroundImages = [
  {
    src: "/events-bg-1.jpg",
    alt: "Cricket match action shot",
    hint: "cricket match",
  },
  {
    src: "/events-bg-2.jpg",
    alt: "Cricket players training",
    hint: "cricket training",
  },
  {
    src: "/events-bg-3.jpg",
    alt: "Cricket stadium view",
    hint: "cricket stadium",
  },
];

export default function BackgroundCarousel() {
  return (
    <Carousel
      className="absolute inset-0 w-full h-full"
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        {backgroundImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                data-ai-hint={image.hint}
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
