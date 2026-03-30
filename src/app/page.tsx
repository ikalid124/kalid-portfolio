import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import WeeklyUpdates from "@/components/WeeklyUpdates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Activities />
        <WeeklyUpdates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
