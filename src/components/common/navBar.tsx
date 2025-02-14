"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NAV_BAR_MENUS } from "@/data/common";

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsActive(true);
          console.log("true");
        }
      },
      { threshold: 0 }
    );

    if (header) {
      observer.observe(header);
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (header) {
        observer.unobserve(header);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      gsap.to(headerRef.current, {
        duration: 0.15,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        y: 0,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(headerRef.current, {
        duration: 0.1,
        backgroundColor: "transparent",
        ease: "power2.in",
      });
    }
  }, [isActive]);

  return (
    <header
      ref={headerRef}
      id="header"
      className={cn("flex px-5 py-1 md:py-3 bg-transparent", {
        "sticky top-0 z-20": isActive,
      })}
    >
      <nav className="flex justify-center sm:justify-between items-center w-full">
        <div className="hidden sm:flex gap-3 items-center ">
          <Image
            height={64}
            width={64}
            src="/images/code-icon-light.png"
            alt="code-icon"
            className=""
          />
          <div className="glitch-wrapper !hidden md:!flex">
            <p className="glitch" data-glitch="Joakim Dahlstrom">
              Joakim Dahlstrom
            </p>
          </div>
        </div>
        <ul className="flex gap-5 text-3xl">
          {NAV_BAR_MENUS.map((menu) => (
            <li
              key={menu.title}
              className={cn("transition-all", {
                "hover:!text-red-main": isActive,
                "hover:text-gray-400": !isActive,
              })}
            >
              <a href={menu.href}>{menu.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
