import AboutMe from "@/Components/AboutMe";
import Contact from "@/Components/ContactSection";
import HeroSection from "@/Components/HeroSection";
import Projects from "@/Components/ProjectSection";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
