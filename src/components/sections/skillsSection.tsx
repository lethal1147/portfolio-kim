"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import Image from "next/image";
import { CAROUSEL_SKILLS } from "@/data/skills";
import Autoplay from "embla-carousel-autoplay";

export default function SkillsSection() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <section
      id="skills"
      className="mx-5 px-8 sm:px-0 lg:mx-40 my-0 lg:my-20 pt-0 lg:pt-20"
    >
      <div className="my-10 text-center">
        <h2 className="text-3xl lg:text-6xl font-bold text-red-main">
          My Skills
        </h2>
        <p className="text-xl lg:text-3xl">
          Here are my expertises I have learned.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {CAROUSEL_SKILLS.map((skill) => (
            <CarouselItem
              className="max-w-64 lg:max-w-full lg:basis-1/4 justify-center flex"
              key={skill.skill}
            >
              <Card className="w-4/5 overflow-hidden">
                <CardHeader className="text-center text-red-main">
                  <CardTitle className="font-bold text-3xl ">
                    {skill.skill}
                  </CardTitle>
                  <CardDescription>
                    <Progress className="h-3" value={skill.level} />
                    <p className="text-xl text-red-main text-center">
                      {skill.levelDesc}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center bg-red-main max-h-60 h-60 p-3">
                  <Image
                    width={250}
                    height={250}
                    src={skill.skillImage}
                    alt={skill.skill}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
