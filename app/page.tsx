import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialHub from "@/components/SocialHub";
import BackgroundBlob from "@/components/BackgroundBlob";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="main-wrapper">
      <BackgroundBlob />
      <ScrollProgress />
      <ScrollReveal />

      <Navbar />
      <Hero />
      <SocialHub />
      <Stats />
      <About />
      <Services />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
