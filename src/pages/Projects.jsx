import React from "react";
import ProjectCard from "../components/ProjectCard";
import InstagramEmbed from "../components/InstagramEmbed";
import routineImg from "../assets/routine.png";
import sampleVideo from "../assets/0.20050-0170.mp4";
import { video } from "framer-motion/client";
import LMSP from "../assets/LMSP.png";

const projects = [
  {
    title: "Routine Dashboard (MERN)",
    description:
      "🗓️ Routine Tracker Dashboard A responsive and theme-aware task management dashboard built using React and Tailwind CSS. It helps users create, view, and manage daily routines with real-time validation, time-based task completion logic, and a simple point system.",
    link: "https://routine-tracker-dashboard-v7ip.vercel.app/",
    image: routineImg,
  },
  {
    title: "Blender 3D Animation",
    description:
      "Check my profile to know my work",
    link: "https://www.instagram.com/rishu.blend", // Replace with real link
    video: sampleVideo,
  },
  {
    title: "Library Management System",
    description:
      "A library app to manage books, students, and borrowing history. Made with Java",
    link: "https://github.com/Spyware0412/LibraryManagementSystem",
    image: LMSP,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
      </div>
    </div>
  );
}
