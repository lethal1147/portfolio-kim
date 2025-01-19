export type ProjectScreenshot = {
  path: string;
  alt: string;
};

export type ProjectsType = {
  name: string;
  description: string;
  tags: string[];
  screenshots: ProjectScreenshot[];
  github: {
    frontend?: string;
    backend?: string;
  } | null;
  demo: string;
  isCredential?: boolean;
  status: string;
};
