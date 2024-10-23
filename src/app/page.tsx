"use client";

import NavBar from "@/components/common/navBar";
import StarterAnimation from "@/components/common/starterAnimation";
import HeroSection from "@/components/sections/heroSection";
import ProjectSection from "@/components/sections/projectSection";
import SkillsSection from "@/components/sections/skillsSection";
import { useState } from "react";

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <main className="base-background-color max-w-screen text-gray-300 overflow-hidden snap-y">
      {!isAnimationComplete && (
        <StarterAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
}
