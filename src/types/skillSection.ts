export type LevelScale =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Professional"
  | "Master";

export type SkillType = {
  skill: string;
  level: number;
  levelDesc: LevelScale;
  skillImage: string;
};
