export type ProjectScreenshot = {
  path: string;
  alt: string;
};

export type ProjectsType = {
  name: string;
  description: string;
  tags: string[];
  screenshots: ProjectScreenshot[];
  github: string;
  demo: string;
  isCredential?: boolean;
  status: string;
};
