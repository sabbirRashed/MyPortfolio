import AboutMe from "@/Components/AboutMe";
import HeroSection from "@/Components/HeroSection";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutMe />
      <Skills/>
    </div>
  );
}
