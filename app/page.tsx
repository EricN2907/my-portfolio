import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundBlob from "@/components/BackgroundBlob";
import About from "@/components/About";
import TechStack from "@/components/TechStack";

// Thêm 3 dòng này
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <BackgroundBlob />
      
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}