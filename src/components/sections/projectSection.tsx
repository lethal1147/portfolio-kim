"use client";

import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { PROJECTS_LISTS } from "@/data/projects";
import { ProjectsType } from "@/types/projectSection";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { FaLock } from "react-icons/fa";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectsType>(
    PROJECTS_LISTS[0]
  );

  return (
    <section
      id="projects"
      className="mx-5 px-8 sm:px-0 lg:mx-40 mb-10 my-0 lg:my-20 pt-0 lg:pt-20"
    >
      <div className="my-10 text-center">
        <h2 className="text-3xl lg:text-6xl font-bold text-red-main">
          My Projects
        </h2>
        <p className="text-xl lg:text-3xl">
          Check out my personal projects that I built for self-use and learning!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {/* Project list */}
        <ScrollArea className="max-h-[250px] lg:min-h-[600px] col-span-3 lg:col-span-1 project-container-wrapper">
          <h3 className="text-center font-bold text-3xl py-5 underline text-red-main">
            List of my project!
          </h3>
          <ul className="flex flex-col gap-2">
            {PROJECTS_LISTS.map((project) => (
              <li
                onClick={() => setSelectedProject(project)}
                key={project.name}
                className={cn(
                  "p-3 font-bold text-gray-500 hover:bg-gray-200/50 cursor-pointer rounded-md transition border-b",
                  {
                    "!bg-gray-300/80 text-red-main":
                      selectedProject.name === project.name,
                  }
                )}
              >
                <span className="flex gap-5 items-center">
                  {project.name}{" "}
                  {project.isCredential ? <FaLock /> : project.status}
                </span>
              </li>
            ))}
          </ul>
        </ScrollArea>

        {/* Project detail */}
        <div className="col-span-3 lg:col-span-2 gap-5 project-container-wrapper grid grid-cols-5">
          <div className="col-span-5 lg:col-span-2 flex flex-col gap-5 text-gray-500 font-semibold border-none lg:border-r">
            <h4 className="font-bold text-2xl text-red-main ">
              {selectedProject.name}
            </h4>
            {selectedProject.status && (
              <p className="">{selectedProject.status}</p>
            )}
            <div>
              <p className="underline text-gray-700">Description</p>
              <p className="">{selectedProject.description}</p>
            </div>
            <div>
              <p className="underline text-gray-700">Tags</p>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
            {!selectedProject.isCredential && (
              <div className="flex w-full gap-5 justify-center">
                {selectedProject.github?.frontend &&
                selectedProject.github.backend ? (
                  <>
                    <Button
                      disabled={!selectedProject.github.frontend}
                      variant="outline"
                      className="font-bold border-red-main !text-red-main hover:bg-red-main/20"
                    >
                      <a
                        target="_blank"
                        href={selectedProject.github?.frontend}
                      >
                        Frontend
                      </a>
                    </Button>
                    <Button
                      disabled={!selectedProject.github.backend}
                      variant="outline"
                      className="font-bold border-red-main !text-red-main hover:bg-red-main/20"
                    >
                      <a target="_blank" href={selectedProject.github?.backend}>
                        Backend
                      </a>
                    </Button>
                  </>
                ) : (
                  <Button
                    disabled={!selectedProject.github}
                    variant="outline"
                    className="font-bold border-red-main !text-red-main hover:bg-red-main/20"
                  >
                    <a
                      target="_blank"
                      href={
                        selectedProject.github?.frontend ||
                        selectedProject.github?.backend
                      }
                    >
                      {selectedProject.github?.frontend
                        ? "Frontend"
                        : "Backend"}
                    </a>
                  </Button>
                )}
                <Button
                  disabled={!selectedProject.demo}
                  variant="outline"
                  className="font-bold border-red-main !text-red-main hover:bg-red-main/20"
                >
                  Demo
                </Button>
              </div>
            )}
          </div>

          {selectedProject.isCredential ? (
            <div className="col-span-5 lg:col-span-3 flex justify-center items-center size-full">
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <p className="text-xl text-center lg:text-start font-bold">
                  No screenshots available for this project due to
                  confidentiality.
                </p>
                <FaLock />
              </div>
            </div>
          ) : (
            <div
              className={cn("col-span-5 lg:col-span-3 grid grid-cols-2 gap-5", {
                "grid-cols-1": selectedProject.screenshots.length <= 1,
              })}
            >
              {selectedProject.screenshots.map((screenshot) => (
                <Dialog key={screenshot.alt}>
                  <DialogTrigger asChild>
                    <div className="relative border shadow-lg w-full min-h-56 overflow-hidden rounded-lg cursor-pointer">
                      <Image
                        src={screenshot.path}
                        alt={screenshot.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] min-h-[90vh] p-0 overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={screenshot.path}
                        alt={screenshot.alt}
                        layout="fill"
                        objectFit="contain"
                        className="w-full h-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
