import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { NAV_LINKS } from "@/data/navigation";
import Hero from "@/sections/Hero";
import Highlights from "@/sections/Highlights";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen text-white/90">
      <Navbar brand="Portfolio Reza" links={NAV_LINKS} />
      <Hero />
      <Highlights />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
