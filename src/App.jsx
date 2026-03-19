import LeafParticles from "./components/LeafParticles"; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Links from "./components/Links";
import Projects from "./components/Projects";

import leftTree from "./assets/Trees/LeftTree.png";
import rightTree from "./assets/Trees/RightTree.png";
import centerTrees from "./assets/Trees/CenterTrees.png";

function App() {
  return (
    <div className = "min-h-screen">
      
      {/* leaf particles */}
      <LeafParticles />

      {/* background color */}
      <div className="pointer-events-none fixed inset-0 bg-background/75 z-0" />

      {/* fixed trees */}
      <img
        src = {leftTree}
        data-theme-img = "leftTree"
        className = "fixed bottom-0 left-0 pointer-events-none z-50 w-16 sm:w-32 md:w-48"
      />
      <img
        src = {rightTree}
        data-theme-img = "rightTree"
        className = "fixed bottom-0 right-0 pointer-events-none z-50 w-16 sm:w-32 md:w-48"
      />
      <img
        src = {centerTrees}
        data-theme-img = "centerTrees"
        className = "fixed bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-40 w-350"
      />

      {/* components */}
      <Navbar />
      <section id = "home">
        <Home />
      </section>
      <section id = "about">
        <About />
      </section>
      <section id = "links">
        <Links />
      </section>
      <section id = "projects">
        <Projects />
      </section>

      {/* spacer at bottom */}
      <div className = "h-40 md:h-75"></div>
    </div>
  );
}

export default App