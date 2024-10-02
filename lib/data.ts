import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teaching Assistant ",
    location: "Pennsylvania State University",
    description:
      "Oversaw all aspects of Programming Language Concepts course, including assignment creation, exam supervision, project ideation, and student support in Python, Scheme, OOP, alongside coordinating course logistics and communications",
    icon: React.createElement(LuGraduationCap),
    date: "August 2024 - Present",
  },
  {
    title: "NLP lab — Research Assistant ",
    location: "Pennsylvania State University",
    description:
      "Developed and implemented Python scripts to simulate physical interactions using the PHYRE environment extracting object parameters such as position, velocity. Analyzed and extracted object parameters, ensuring data aligned with the ESPRIT dataset structure for machine learning tasks",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 - Present",
  },
  {
    title: "AI Research Assistant",
    location: "Jefferson lab — Summer Research Internship",
    description:"As part of my internship, I successfully applied machine learning techniques to analyze experimental data and create 3D models of proton distributions in nuclei. I also developed a Python-based data analysis pipeline and utilized advanced visualization techniques to contribute to advancements in modern physics and astrophysics research.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - present",
  },
  {
    title: "Machine Learning Engineer",
    location: "Graphene AI Health Tech Pvt.Ltd",
    description : "As a Machine Learning Engineer at Graphene AI Health Tech, I successfully implemented a relevance filter and knowledge graph, improving data extraction efficiency and reducing deployment time. These advancements contributed to the company's overall success in leveraging AI for healthcare applications.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - August 2023",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "C",
  "C++",
  "MATLAB",
  "SQL",
  "PyTorch",
  "TensorFlow",
  "vLLM",
  "Hugging Face",
  "LangChain",
  "OpenAI",
  "Scikit-Learn",
  "SpaCy",
  "Docker",
] as const;
