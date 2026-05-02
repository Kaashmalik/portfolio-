import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Ambient background glows */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-3" aria-hidden="true" />

      <Hero />

      <div className="divider" />
      <About />

      <Skills />

      <div className="divider" />
      <Projects />

      <div className="divider" />
      <Experience />

      <div className="divider" />
      <Services />

      <div className="divider" />
      <Testimonials />

      <div className="divider" />
      <Contact />
    </>
  );
}
