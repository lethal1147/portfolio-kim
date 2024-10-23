"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "../ui/button";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import HoverContainer from "../common/hoverContainer";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      duration: 1.5,
      opacity: 1,
      y: -100,
      ease: "power2.out",
    });
  }, []);
  return (
    <section
      ref={heroRef}
      className="hero-section grid grid-cols-3 gap-5 mx-auto my-56 w-[1150px]"
    >
      <div className="col-span-2 flex flex-col gap-7 font-semibold">
        <h1 className="text-5xl">
          Hello, I am{" "}
          <span className="text-red-main font-bold">Joakim Dahlstrom</span>
        </h1>
        <p className="text-3xl">
          I&apos;m a <span className="text-red-main">Full Stack Developer</span>{" "}
          skilled in
          <span className="text-red-main"> React</span>,{" "}
          <span className="text-red-main">NextJS</span>,{" "}
          <span className="text-red-main">JavaScript</span>,{" "}
          <span className="text-red-main">TypeScript</span> and basic on{" "}
          <span className="text-red-main">Golang</span>. I work with agile
          methodology.
        </p>
        <p className="text-3xl">Let&apos;s create something great together!</p>

        <div className="flex gap-5 text-3xl">
          <a
            className="hover:text-red-main transition"
            href="https://www.linkedin.com/in/joakim-dahlstrom-250303264/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-red-main transition"
            href="https://github.com/lethal1147"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-red-main transition"
            href="https://www.facebook.com/uykim.kim/"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
        <Button className="font-bold max-w-40">My resume</Button>
      </div>
      <HoverContainer
        width={350}
        height={350}
        imageAlt="joakim dahlstrom"
        imagePath="/images/profile-image.jpg"
      />
    </section>
  );
}
