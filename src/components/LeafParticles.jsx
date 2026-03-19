import { useEffect, useState } from "react";

import leaf1 from "../assets/Leaves/Leaf1.png";
import leaf2 from "../assets/Leaves/Leaf2.png";
import leaf3 from "../assets/Leaves/Leaf3.png";
import leaf4 from "../assets/Leaves/Leaf4.png";
import leaf5 from "../assets/Leaves/Leaf5.png";
import leaf6 from "../assets/Leaves/Leaf6.png";

const leaves = [
  { src: leaf1, theme: "leaf1" },
  { src: leaf2, theme: "leaf2" },
  { src: leaf3, theme: "leaf3" },
  { src: leaf4, theme: "leaf4" },
  { src: leaf5, theme: "leaf5" },
  { src: leaf6, theme: "leaf6" },
];
const MAX_LEAVES = 25; // max leaves on screen

export default function LeafParticles()
{
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) => {
                if (prev.length >= MAX_LEAVES) return prev;
                
                const pageHeight = document.documentElement.scrollHeight / window.innerHeight * 100;
                const leaf = leaves[Math.floor(Math.random() * leaves.length)];
                
                return [
                    ...prev,
                    {
                        id: `${Date.now()}-${Math.random()}`,

                        // Start anywhere across the screen
                        startX: -10, // off-screen left (vw)
                        startY: Math.random() * (pageHeight + 20) - 50, // vh

                        // Drift slightly left/right
                        driftX: 60 + Math.random() * 40, // vw

                        size: 16 + Math.random() * 20,
                        duration: 18 + Math.random() * 14,
                        leaf: leaves[Math.floor(Math.random() * leaves.length)],
                        image: leaf.src,
                        theme: leaf.theme,
                    },
                ];
            });
        }, 750); // spawn rate

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        {particles.map((p) => (
            <img
            key={p.id}
            src={p.image}
            data-theme-img = {p.theme}
            className="leaf"
            style={{
                left: `${p.startX}vw`,
                top: `${p.startY}vh`,
                width: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                "--drift-x": `${p.driftX}vw`,
            }}
            onAnimationEnd={() =>
                setParticles((prev) => prev.filter((x) => x.id !== p.id))
            }
            />
        ))}
        </div>
    );
}