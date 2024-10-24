import { ProjectsType } from "@/types/projectSection";

const BASE_IMAGE_PATH = "/images/projects/";
const LEDGAR_PATH = "ledgar";
const KIM_STORE_PATH = "kim-store";
const PORTFOLIO2025_PATH = "portfolio2025";
const INSIDER_PATH = "insider";

export const PROJECTS_LISTS: ProjectsType[] = [
  {
    name: "Ledgar - Personal Finance Tracker",
    description: `This is my go-to app for tracking income and expenses. It's
              got a simple dashboard, login, and lets me keep an eye on all my
              spending and earnings.`,
    tags: [
      "Typescript",
      "Next.JS",
      "Next-Auth",
      "TailwindCSS",
      "Shadcn/ui",
      "PostgresQL",
      "Docker",
      "Prisma",
      "Zustand",
      "Cloudinary",
    ],
    screenshots: [
      { path: `${BASE_IMAGE_PATH}${LEDGAR_PATH}/login.png`, alt: "login page" },
      {
        path: `${BASE_IMAGE_PATH}${LEDGAR_PATH}/dashboard.png`,
        alt: "dashboard page",
      },
      {
        path: `${BASE_IMAGE_PATH}${LEDGAR_PATH}/transactions.png`,
        alt: "transactions page",
      },
      {
        path: `${BASE_IMAGE_PATH}${LEDGAR_PATH}/partypay.png`,
        alt: "partypay page",
      },
    ],
    github: "https://github.com/lethal1147/income-invoice",
    demo: "",
    status: "",
  },
  {
    name: "Kim's Store",
    description: `Built a simple e-commerce site using Angular to learn the framework, with Stripe for payments. Followed a YouTube guide to put it all together.`,
    tags: [
      "Angular",
      "Typescript",
      "Stripe",
      "TailwindCSS",
      "Node.JS",
      "Express",
    ],
    screenshots: [
      {
        path: `${BASE_IMAGE_PATH}${KIM_STORE_PATH}/home.png`,
        alt: "Home page",
      },
      {
        path: `${BASE_IMAGE_PATH}${KIM_STORE_PATH}/cart.png`,
        alt: "Cart page",
      },
      {
        path: `${BASE_IMAGE_PATH}${KIM_STORE_PATH}/description.png`,
        alt: "Description view",
      },
    ],
    github: "https://github.com/lethal1147/kim-store",
    demo: "",
    status: "",
  },
  {
    name: "Kim's Portfolio 2025",
    description: `Working on a new version of my portfolio, styled like a Windows desktop. You can open up project showcases in folders, just like you would on a real desktop!`,
    tags: [
      "Next.JS",
      "Typescript",
      "Jest",
      "TailwindCSS",
      "shadcn/ui",
      "Redux",
      "react-draggable",
    ],
    screenshots: [
      {
        path: `${BASE_IMAGE_PATH}${PORTFOLIO2025_PATH}/lock-screen.png`,
        alt: "lock-screen page",
      },
      {
        path: `${BASE_IMAGE_PATH}${PORTFOLIO2025_PATH}/sign-in.png`,
        alt: "sign-in page",
      },
      {
        path: `${BASE_IMAGE_PATH}${PORTFOLIO2025_PATH}/desktop.png`,
        alt: "desktop page",
      },
    ],
    github: "https://github.com/lethal1147/portfolio2024",
    demo: "",
    status: "(In Progress)",
  },
  {
    name: "Insider boardgame",
    description: `A web-based game inspired by the board game "Insider". It'll have real-time chat, a score system, and game settings.`,
    tags: ["React", "Typescript", "Redux", "TailwindCSS", "shadcn/ui"],
    screenshots: [
      { path: `${BASE_IMAGE_PATH}${INSIDER_PATH}/home.png`, alt: "home page" },
    ],
    github: "https://github.com/lethal1147/insider",
    demo: "",
    status: "(In Progress)",
  },
  {
    name: "Invoice Management",
    description:
      "A freelance project featuring invoice issuance, product management, and stock tracking. It includes a login and sign-up system built with Auth0.",
    tags: ["Next.JS", "Typescript", "Auth0", "scss"],
    screenshots: [],
    isCredential: true,
    status: "(Confidential)",
    github: "",
    demo: "",
  },
  {
    name: "CRM - Customer Relationship Management",
    description:
      "This is a CRM system I built on my own at my current job. I handled everything from gathering requirements, working with the UX/UI designer, and setting up the project. The system includes key features like issuing quotations, scheduling meeting appointments, and tracking sales orders, making it easier for our customer to manage thier customer interactions and sales pipelines efficiently.",
    tags: [
      "React",
      "Javascript",
      "TailwindCSS",
      "Node.JS",
      "Express",
      "MongoDB",
      "mongoose",
      "cron-job",
      "JWT",
      "Docker",
    ],
    screenshots: [],
    github: "",
    demo: "",
    isCredential: true,
    status: "(Confidential)",
  },
  {
    name: "ERP - Enterprise Resource Planning",
    description:
      "This is an ERP system I built that helps our customers manage their company’s workflow. It includes key features like role-based management, appointment scheduling, file storage, a working calendar, and single sign-on (SSO). The system streamlines daily operations and ensures smoother collaboration across teams.",
    tags: [
      "React",
      "Typescript",
      "shadcn/ui",
      "TailwindCSS",
      "Node.JS",
      "Express",
      "MongoDB",
      "mongoose",
      "cron-job",
      "JWT",
      "Docker",
    ],
    screenshots: [],
    github: "",
    demo: "",
    isCredential: true,
    status: "(Confidential)",
  },
  {
    name: "Hospital Management",
    description:
      "I worked with a colleague on this hospital management system, which covers all the basics a hospital needs, like X-ray management, checking for drug allergies, admissions, and lab tests.",
    tags: [
      "React",
      "Javascript",
      "ChartJS",
      "Node.JS",
      "Express",
      "MicrosoftSQL",
      "JWT",
      "Zustand",
      "Ant-Design",
    ],
    screenshots: [],
    isCredential: true,
    status: "(Confidential)",
    github: "",
    demo: "",
  },
];
