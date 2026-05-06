import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import { projects } from "./data/projects";
import { useState, useEffect } from "react";
import "./components/App.css"; 
import Skills from "./components/Skills";
import Quote from "./components/Quote"
import Footer from "./components/Footer";
export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for high-performance, smooth updates
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
        document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId); // Cleanup
    };
  }, []);

  return (
    <div className="main-container">
      {/* Background layer glow */}
      <div className="cursor-glow"></div>
      
      {/* Content layers */}
      <div className="content-wrapper">
        <Navbar /> 
        
        <main>
          <Hero />

          <Terminal
            projects={projects}
            onOpenProject={setActiveProject}
          />

          <Projects
            projects={projects}
            onOpenProject={setActiveProject}
          />
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
        <Skills/>
        <Quote/>
        <Footer/>
      </div>
    </div>
  );
}