"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function HoverContainer({
  imagePath,
  imageAlt,
  width,
  height,
}: {
  imagePath: string;
  imageAlt: string;
  width: number | `${number}`;
  height: number | `${number}`;
}) {
  const [tiltStyle, setTiltStyle] = useState({});
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const tiltX = (y - 0.5) * 20;
    const tiltY = (x - 0.5) * -20;

    setTiltStyle({
      transform: `perspective(250px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "all 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform:
        "perspective(250px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  useEffect(() => {
    const currentRef = imageRef.current;
    if (currentRef) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      currentRef.addEventListener("mousemove", handleMouseMove as any);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (currentRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        currentRef.removeEventListener("mousemove", handleMouseMove as any);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className="relative overflow-hidden rounded-lg shadow-xl"
      style={{
        ...tiltStyle,
      }}
    >
      <Image
        className="size-full"
        src={imagePath}
        alt={imageAlt}
        width={width}
        height={height}
      />
    </div>
  );
}
