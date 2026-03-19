import headshot from '../assets/Headshot.png';
import Gnome from './Gnome';

import GnomeCleaningIdleLight from "../assets/Gnomes/GnomeCleaning/GnomeCleaning-idle.png";
import GnomeCleaningIdleDark from "../assets/Gnomes/GnomeCleaning/GnomeCleaning-idle-dark.png";
import GnomeCleaningActionLight from "../assets/Gnomes/GnomeCleaning/GnomeCleaning-action.png";
import GnomeCleaningActionDark from "../assets/Gnomes/GnomeCleaning/GnomeCleaning-action-dark.png";

import DuckFamilyIdleLight from "../assets/Ducks/DuckFamily/DuckFamily-idle.png";
import DuckFamilyIdleDark from "../assets/Ducks/DuckFamily/DuckFamily-idle-dark.png";
import DuckFamilyActionLight from "../assets/Ducks/DuckFamily/DuckFamily-action.png";
import DuckFamilyActionDark from "../assets/Ducks/DuckFamily/DuckFamily-action-dark.png";

import Mushroom from "../assets/Environment/Mushroom.png";
import MiniMushroom from "../assets/Environment/MiniMushroom.png";

export default function About() {
  return (
    <section className="text-center md:text-left sm:px-32 md:px-48 pt-16 sm:pt-19 md:pt-32 z-10 relative">
      
      <div className = "flex flex-col md:flex-row items-center md:items-baseline gap-8 sm:gap-12 md:gap-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-accent font-bold font-subheading pb-8 md:pt-0">ABOUT ME</h1>
        <Gnome
          sizes = "w-41 sm:w-51 md:w-61 aspect-[61/20]"
          idleFrames = {2} 
          actionFrames = {25}
          idleFrameDuration = {.1}
          actionFrameDuration = {.1}
          idleLight = {DuckFamilyIdleLight}
          idleDark = {DuckFamilyIdleDark}
          actionLight = {DuckFamilyActionLight}
          actionDark = {DuckFamilyActionDark}
        />
      </div>

      <div className = "flex flex-wrap-reverse justify-between">
        
        <p className="text-text1 text-base sm:text-lg md:text-xl pt-8 sm:pt-12 md:pt-16 px-6 md:px-0 max-w-2xl font-body">
          I'm a Sophomore at the University of Central Florida majoring in Computer Science. I'm passionate about web development and UI/UX design, and love creating fun and interactive user experiences! I LOVE ducks (I have an ever-growing rubber duck collection!), and when I'm not coding, I'm probably in the kitchen trying out some new recipe, reading, or going out with my friends (probably getting food).
        </p>

        <div className = "relative inline-block mx-auto md:mx-0">
          
          <img src={headshot} className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-4xl mx-auto md:mx-0 border-20 border-surface" />
          
          <img
            src={Mushroom}
            className = "hidden lg:block absolute -top-25 right-25 w-25 pointer-events-none"
            data-theme-img = "mushroom"
          />

          <img
            src={MiniMushroom}
            className = "hidden lg:block absolute -top-8 left-20 w-9 pointer-events-none"
            data-theme-img = "miniMushroom"
          />

          <div className = "absolute bottom-0 right-0 translate-x-1/4 translate-y-1/8">
            <Gnome
              sizes = "w-14 sm:w-18 md:w-22 aspect-[22/22]"
              idleFrames = {2} 
              actionFrames = {15}
              idleFrameDuration = {.5}
              actionFrameDuration = {.2}
              idleLight = {GnomeCleaningIdleLight}
              idleDark = {GnomeCleaningIdleDark}
              actionLight = {GnomeCleaningActionLight}
              actionDark = {GnomeCleaningActionDark}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
