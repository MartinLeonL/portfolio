import { useEffect, useState } from "react";

import Gnome from "./Gnome";

import GnomeWavingIdleLight from "../assets/Gnomes/GnomeWaving/GnomeWaving-idle.png";
import GnomeWavingIdleDark from "../assets/Gnomes/GnomeWaving/GnomeWaving-idle-dark.png";
import GnomeWavingActionLight from "../assets/Gnomes/GnomeWaving/GnomeWaving-action.png";
import GnomeWavingActionDark from "../assets/Gnomes/GnomeWaving/GnomeWaving-action-dark.png";

export default function Home() {
  
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
        setShowHint(false);
        setTimeout(() => setShowHint(true), 5000);
    }, 9000);

    return () => clearInterval(interval);
    }, []);

    return (
      <div className = "text-text1 text-4xl sm:text-6xl md:text-8xl z-10 relative pt-32 sm:pt-32 md:pt-48 sm:px-32 md:px-48 font-heading text-center md:text-left">
        <h1>HEY!</h1>
        <div className = "flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            <h1>
                I'M
                <span className = "text-accent"> MARTIN LEON LETELIER</span>
            </h1>
            <div className="relative flex items-center">
                {showHint && (
                    <div
                    className="
                        absolute
                        -top-1 sm:-top-3 md:-top-5
                        left-1/2
                        translate-x-10 sm:translate-x-12 md:translate-x-15
                        text-text1
                        px-2 py-1
                        text-[10px] sm:text-[12px] md:text-sm
                        font-body
                        animate-float
                        pointer-events-none"
                    >
                    click me!
                    </div>
                )}
                    <Gnome
                        sizes = "w-12 sm:w-16 md:w-18 aspect-[18/22]"
                        idleFrames = {2} 
                        actionFrames = {10}
                        idleFrameDuration = {.5}
                        actionFrameDuration = {.1}
                        idleLight = {GnomeWavingIdleLight}
                        idleDark = {GnomeWavingIdleDark}
                        actionLight = {GnomeWavingActionLight}
                        actionDark = {GnomeWavingActionDark}
                    />
                </div>
        </div>
      </div>
  );
}
