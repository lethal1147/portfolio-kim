"use client";

import { STARTER_ANIMATION_SKILLS } from "@/data/skills";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function StarterAnimation({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const lineRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onAnimationComplete,
    });

    STARTER_ANIMATION_SKILLS.forEach((_, index) => {
      const direction = index % 2 === 0 ? "-200%" : "200%";
      tl.to(
        lineRefs.current[index],
        {
          x: direction,
          duration: 1.5,
          ease: "power2.inOut",
          delay: 1.5 - index,
        },
        "-=1"
      );
    });

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
      {STARTER_ANIMATION_SKILLS.map((line, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) lineRefs.current[index] = el;
          }}
          className="flex justify-around h-1/4 w-full p-5 space-y-10 gap-5 bg-red-20% bg-blend-color-burn"
        >
          {line.map((skill, skillIndex) => (
            <Image
              className=" grayscale"
              key={skillIndex}
              src={skill}
              width={150}
              height={125}
              alt={`Skill ${skill}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
