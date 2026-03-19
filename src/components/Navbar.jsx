import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [dark, setDark] = useState(
        document.documentElement.classList.contains("dark")
    );

    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
        setDark((prev) => !prev);
    }

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return <nav className = "fixed top-0 w-full z-50 transition-all duration-300 bg-accent drop-shadow-xl/50 drop-shadow-shadow">
        <div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className = "flex justify-between items-center h-16 sm:h-20 md:h-24">

                {/* Name */}
                <h1 className = "text-lg sm:text-xl md:text-2xl font-bold text-text2 font-subheading">Martin Leon Letelier</h1>

                {/* Toggles and Navigation Buttons */}
                <div className = "flex items-center space-x-6 lg:space-x-8">

                    {/* theme toggle */}
                    <button onClick = {toggleDarkMode}>
                        {dark ? (
                        <Moon
                            className = "w-8 sm:w-10 md:w-12 text-text2 hover:text-button2 cursor-pointer transition-transform duration-300 hover:rotate-12"
                            strokeWidth = {2.5}
                        />
                        ) : (
                        <Sun
                            className = "w-8 sm:w-10 md:w-12 text-text2 hover:text-button2 cursor-pointer transition-transform duration-300 hover:rotate-12"
                            strokeWidth = {2.5}
                            fill = "currentColor"
                        />
                        )}
                    </button>

                    {/* Nav Buttons */}
                    <div className = "hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href = "#home" className = "text-text2 hover:text-button2 lg:text-xl font-body">
                            Home
                        </a>
                        <a href = "#about" className = "text-text2 hover:text-button2 lg:text-xl font-body">
                            About
                        </a>
                        <a href = "#links" className = "text-text2 hover:text-button2 lg:text-xl font-body">
                            Links
                        </a>
                        <a href = "#projects" className = "text-text2 hover:text-button2 lg:text-xl font-body">
                            Projects
                        </a>
                    </div>

                    {/* mobile menu button */}
                    <button
                        className = "md:hidden items-center p-2"
                        onClick={()=>setMobileMenuIsOpen(prev=>!prev)}
                    >
                        { mobileMenuIsOpen ? (
                            <X className = "w-5 h-5 sm:w-6 sm:h-6 text-text2 hover:text-button2" strokeWidth={3}/>
                        ) : (
                            <Menu className = "w-5 h-5 sm:w-6 sm:h-6 text-text2 hover:text-button2" strokeWidth={3}/>
                        )}
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {mobileMenuIsOpen && (
                <div className = "md:hidden bg-accent border-t border-text2 animate-in slide-in-from-top duration-300">
                    <div className = "text-right px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a
                            href = "#home"
                            className = "block text-text2 hover:text-button2 lg:text-xl font-body"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href = "#about"
                            className = "block text-text2 hover:text-button2 lg:text-xl font-body"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href = "#links"
                            className = "block text-text2 hover:text-button2 lg:text-xl font-body"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Links
                        </a>
                        <a
                            href = "#projects"
                            className = "block text-text2 hover:text-button2 lg:text-xl font-body"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            Projects
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>;
}