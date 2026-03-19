import { useState, useEffect, useRef } from "react";

export default function Gnome({
  sizes = "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
  idleFrames = 4,
  actionFrames = 6,
  idleFrameDuration = 1,
  actionFrameDuration = 0.8,
  idleLight,
  idleDark,
  actionLight,
  actionDark,
}) {
  const [isAction, setIsAction] = useState(false);
  const [frame, setFrame] = useState(0);
  const intervalRef = useRef(null);

  const isDark = document.documentElement.classList.contains("dark");

  const frames = isAction ? actionFrames : idleFrames;
  const frameDuration = isAction ? actionFrameDuration : idleFrameDuration;
  const sprite = isAction
    ? isDark ? actionDark : actionLight
    : isDark ? idleDark : idleLight;

  // Drive animation manually
  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setFrame((prev) => {
        if (isAction && prev === frames - 1) {
          clearInterval(intervalRef.current);
          setIsAction(false);
          return 0;
        }
        return (prev + 1) % frames;
      });
    }, frameDuration * 1000);

    return () => clearInterval(intervalRef.current);
  }, [isAction, frames, frameDuration]);

  function triggerAction() {
    if (isAction) return;
    setFrame(0);
    setIsAction(true);
  }

  return (
    <div
      onClick={triggerAction}
      className={`cursor-pointer select-none ${sizes}`}
      style={{
        backgroundImage: `url(${sprite})`,
        backgroundSize: `${frames * 100}% 100%`,
        backgroundPositionX: `${-(frame * 100)}%`,
        imageRendering: "pixelated",
      }}
    />
  );
}
