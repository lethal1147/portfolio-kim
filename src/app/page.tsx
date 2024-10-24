"use client";

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
    <main>
      {!isAnimationComplete && (
        <StarterAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
    </main>
  );
}
