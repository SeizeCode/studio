"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "https://picsum.photos/1920/1080",
    hint: "cricket stadium",
    title: "Unleash Your Potential",
    description: "Join our world-class cricket academy and train with the best.",
    buttonLabel: "Our Programs",
    buttonLink: "#courses",
  },
  {
    image: "https://picsum.photos/1920/1080",
    hint: "cricket action",
    title: "Upcoming Summer Camp",
    description: "Enroll now for our intensive summer training camp. Limited spots available!",
    buttonLabel: "Register Now",
    buttonLink: "#contact",
  },
  {
    image: "https://picsum.photos/1920/1080",
    hint: "team celebration",
    title: "Success Stories",
    description: "Discover how our alumni have achieved their dreams on the world stage.",
    buttonLabel: "Meet Our Stars",
    buttonLink: "#coaches",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <div className="container max-w-4xl animate-fade-in-up space-y-4">
                    <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
                      {slide.description}
                    </p>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                      <a href={slide.buttonLink}>{slide.buttonLabel}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
      </Carousel>
    </section>
  );
}
