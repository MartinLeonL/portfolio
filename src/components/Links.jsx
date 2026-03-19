import Gnome from "./Gnome";

import DuckPetIdleLight from "../assets/Ducks/DuckPet/DuckPet-idle.png";
import DuckPetActionLight from "../assets/Ducks/DuckPet/DuckPet-action.png";
import DuckPetIdleDark from "../assets/Ducks/DuckPet/DuckPet-idle-dark.png";
import DuckPetActionDark from "../assets/Ducks/DuckPet/DuckPet-action-dark.png";

import GnomeFishingIdleLight from "../assets/Gnomes/GnomeFishing/GnomeFishing-idle.png";
import GnomeFishingIdleDark from "../assets/Gnomes/GnomeFishing/GnomeFishing-idle-dark.png";
import GnomeFishingActionLight from "../assets/Gnomes/GnomeFishing/GnomeFishing-action.png";
import GnomeFishingActionDark from "../assets/Gnomes/GnomeFishing/GnomeFishing-action-dark.png";

import Trunk from "../assets/Environment/Trunk.png";

import { Linkedin, Github, FileText, Mail, Phone } from "lucide-react";

export default function Links() {
  return (
    <section className="text-center md:text-left sm:px-32 md:px-48 pt-16 sm:pt-19 md:pt-32 z-10 relative">
      
      {/* Heading */}
      <div className = "flex flex-col md:flex-row items-center md:items-baseline gap-4 sm:gap-6 md:gap-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-accent font-bold font-subheading pb-8 md:pt-0">LINKS</h1>
        <div className="-mt-9 md:mt-0">
          <Gnome
            sizes = "w-16 sm:w-20 md:w-22 aspect-[23/28]"
            idleFrames = {6} 
            actionFrames = {21}
            idleFrameDuration = {.3}
            actionFrameDuration = {.1}
            idleLight = {GnomeFishingIdleLight}
            idleDark = {GnomeFishingIdleDark}
            actionLight = {GnomeFishingActionLight}
            actionDark = {GnomeFishingActionDark}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        
        {/* LEFT */}
        <div className="justify-center md:justify-start flex flex-col">

          {/* Links */}
          <div className = "mt-6 gap-x-3 gap-y-3 flex md:flex-row md:gap-x-5 md:gap-y-0 justify-center md:justify-start">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/martinleonletelier"
              target="_blank"
              rel="noopener noreferrer"
              title = "LinkedIn"
              className="
                w-12 h-12 sm:w-14 sm:h-14
                grid place-items-center
                rounded-xl
                bg-surface hover:bg-button1
                hover:scale-110
                duration-300
                transition-transform
              "
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-text2" strokeWidth={2} />
            </a>
            
            {/* GitHub */}
            <a
              href="https://github.com/MartinLeonL"
              target="_blank"
              rel="noopener noreferrer"
              title = "GitHub"
              className="
                w-12 h-12 sm:w-14 sm:h-14
                grid place-items-center
                rounded-xl
                bg-surface hover:bg-button1
                hover:scale-110
                duration-300
                transition-transform
              "
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 text-text2" strokeWidth={2} />
            </a>

            {/* Resume */}
            <a
              href = "/Martin Leon Letelier Resume.pdf"
              download = "Martin Leon Letelier Resume.pdf"
              title = "Resume"
              className="
                w-12 h-12 sm:w-14 sm:h-14
                grid place-items-center
                rounded-xl
                bg-surface hover:bg-button1
                hover:scale-110
                duration-300
                transition-transform
              "
            >
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-text2" strokeWidth={2} />
            </a>

          </div>

          {/* Contact Info */}
          <div className="mt-8 font-body text-text1 text-base sm:text-lg md:text-xl leading-snug">
            
            <p className="font-semibold mb-1">Contact Info</p>
            <a
              className="block hover:text-accent transition-colors underline-offset-4 hover:underline"
              href="mailto:martinleonletelier@gmail.com"
            >
              martinleonletelier@gmail.com
            </a>
            <a
              className="block hover:text-accent transition-colors underline-offset-4 hover:underline"
              href="tel:+17865571505"
            >
              786-557-1505
            </a>
          </div>

        </div>

        {/* CENTER */}
        <div className="flex justify-center md:justify-end mt-0 md:mt-8">
          <img
            src={Trunk}
            className="hidden lg:block w-70 aspect-70/28"
            data-theme-img = "trunk"
          />
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end mt-0 md:mt-8">
          <Gnome
            sizes="w-15 sm:w-17 md:w-20 aspect-[21/30]"
            idleFrames={2}
            actionFrames={10}
            idleFrameDuration={0.5}
            actionFrameDuration={0.5}
            idleLight={DuckPetIdleLight}
            idleDark={DuckPetIdleDark}
            actionLight={DuckPetActionLight}
            actionDark={DuckPetActionDark}
          />
        </div>

      </div>

    </section>
  );
}
