"use client";

import React, { useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll("h2, p"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="mx-5 px-8 lg:mx-40 my-0 lg:my-20 pt-0 lg:pt-20"
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
          {CAROUSEL_SKILLS.map((skill, index) => (
            <CarouselItem
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="max-w-64 lg:max-w-full basis-1/2 md:basis-1/3 xl:basis-1/4 justify-center flex"
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
                  <div className="size-full p-5 flex justify-center items-center">
                    <Image
                      className="size-full"
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={skill.skillImage}
                      alt={skill.skill}
                    />
                  </div>
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
