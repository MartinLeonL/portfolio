import ProjectCard from "./ProjectCard";

import Gnome from "./Gnome";

import GnomeCodingIdleLight from "../assets/Gnomes/GnomeCoding/GnomeCoding-idle.png";
import GnomeCodingIdleDark from "../assets/Gnomes/GnomeCoding/GnomeCoding-idle-dark.png";
import GnomeCodingActionLight from "../assets/Gnomes/GnomeCoding/GnomeCoding-action.png";
import GnomeCodingActionDark from "../assets/Gnomes/GnomeCoding/GnomeCoding-action-dark.png";

import GnomeSleepingIdleLight from "../assets/Gnomes/GnomeSleeping/GnomeSleeping-idle.png";
import GnomeSleepingIdleDark from "../assets/Gnomes/GnomeSleeping/GnomeSleeping-idle-dark.png";
import GnomeSleepingActionLight from "../assets/Gnomes/GnomeSleeping/GnomeSleeping-action.png";
import GnomeSleepingActionDark from "../assets/Gnomes/GnomeSleeping/GnomeSleeping-action-dark.png";

import DuckSleepingIdleLight from "../assets/Ducks/DuckSleeping/DuckSleeping-idle.png";
import DuckSleepingIdleDark from "../assets/Ducks/DuckSleeping/DuckSleeping-idle-dark.png";
import DuckSleepingActionLight from "../assets/Ducks/DuckSleeping/DuckSleeping-action.png";
import DuckSleepingActionDark from "../assets/Ducks/DuckSleeping/DuckSleeping-action-dark.png";

import logoWizzOff from "../assets/Logos/Logo-WizzOff.png";
import logoCalenPal from "../assets/Logos/Logo-CalenPal.png";
import logoCompiler from "../assets/Logos/Logo-Compiler.png";
import logoPortfolio from "../assets/Logos/Logo-Portfolio.png";
import logoLockdownRadar from "../assets/Logos/Logo-LockdownRadar.png";

const PROJECTS = [
  {
    name: "WizzOff",
    logo: logoWizzOff,
    stack: ["PyGame", "OpenCV", "MediaPipe", "Flask"],
    description:
      "A real-time wizard dueling game where the user can cast spells using hand gestures and a real 3D-printed magic wand! Utilizes computer vision to track wand movements and hand gestures, and AI to recognize spells (shapes) cast by the user.",
    href: "https://devpost.com/software/wizzoff",
    linkLabel: "DevPost →",
  },
  {
    name: "CalenPal",
    logo: logoCalenPal,
    stack: ["HTML", "CSS", "JavaScript", "Flask", "Google ADK"],
    description:
      "Smart calendar web app to help manage stress. It can take in the user's syllabi and other documents to automatically fill the calendar with important dates using an AI agent. It also tracks each event's potential stress levels and includes a built-in AI chatbot to help user plan events based on availabilty and stress.",
    href: "https://devpost.com/software/calenpal",
    linkLabel: "DevPost →",
  },
  {
    name: "P-Code Compiler and Virtual Machine",
    logo: logoCompiler,
    stack: ["C"],
    description:
      "P-Code compiler built using C that translates P-Code (a very low-level code) into assembly code and executes it using a stack-based virtual machine. The compiler consists of a lexical analyzer, parser, and code generator.",
    href: "https://github.com/MartinLeonL/Compiler",
    linkLabel: "GitHub →",
  },
  {
    name: "Lockdown Radar",
    logo: logoLockdownRadar,
    stack: ["React JS", "React Native", "Tailwind CSS", "Firebase"],
    description:
      "Emergency response system in the event of a school shooting. The system consists of a web dashboard for administrators which calculates an approximate area of the shooter based on reports from teachers, and a mobile app for teachers which listens for gunshots and allows them to report sightings as well as view the shooter's approximate location on a map.",
    href: "https://devpost.com/software/lockdown-radar",
    linkLabel: "DevPost →",
  },
  {
    name: "This Portfolio!",
    logo: logoPortfolio,
    stack: ["React", "Tailwind CSS", "Vite"],
    description:
      "My first ever portfolio website! I wanted a fun and interactive site so I made a fantasy forest with creatures all around that interact when clicked! All pixel art designs are made by me and the website itself I built using React and styled with Tailwind CSS.",
    href: "https://github.com/MartinLeonL/portfolio",
    linkLabel: "GitHub →",
  },
];

export default function Projects() {
  return (
    <section className="text-center md:text-left px-12 sm:px-32 md:px-48 pt-16 sm:pt-19 md:pt-32 z-10 relative">
      {/* Heading */}
      <div className = "flex flex-col md:flex-row items-center md:items-baseline gap-4 sm:gap-6 md:gap-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-accent font-bold font-subheading pb-8 md:pt-0">PROJECTS</h1>
        <div className="-mt-9 md:mt-0">
          <Gnome
            sizes = "w-9 sm:w-10 md:w-12 aspect-[12/23]"
            idleFrames = {2} 
            actionFrames = {17}
            idleFrameDuration = {.5}
            actionFrameDuration = {.075}
            idleLight = {GnomeCodingIdleLight}
            idleDark = {GnomeCodingIdleDark}
            actionLight = {GnomeCodingActionLight}
            actionDark = {GnomeCodingActionDark}
          />
        </div>
      </div>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* Sleeping gnome and duck*/}
      <div className = "absolute mt-8 left-0 w-full flex items-end justify-center gap-24 md:gap-200">
        <Gnome
          sizes = "w-15 sm:w-16 md:w-21 aspect-[21/17]"
          idleFrames = {2} 
          actionFrames = {10}
          idleFrameDuration = {.1}
          actionFrameDuration = {.3}
          idleLight = {DuckSleepingIdleLight}
          idleDark = {DuckSleepingIdleDark}
          actionLight = {DuckSleepingActionLight}
          actionDark = {DuckSleepingActionDark}
        />
        <Gnome
          sizes = "w-10 sm:w-14 md:w-16 aspect-[16/21]"
          idleFrames = {2} 
          actionFrames = {5}
          idleFrameDuration = {.1}
          actionFrameDuration = {1}
          idleLight = {GnomeSleepingIdleLight}
          idleDark = {GnomeSleepingIdleDark}
          actionLight = {GnomeSleepingActionLight}
          actionDark = {GnomeSleepingActionDark}
        />
      </div>
    </section>
  );
}