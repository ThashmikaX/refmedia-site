"use client"; //todo remove use client
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import TheTeamBehind from "@/components/TheTeamBehind";
import Heading from "@/components/Heading";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import LatestNews from "@/components/LatestNews";
import EvolutionOfLogo from "@/components/EvolutionOfLogo";
import TextAnimationSection from "@/components/TextAnimationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <div className="min-h-screen" id="home">
        <Hero />
      </div>
      <section id="heading">
        <Heading />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="theTeamBehind">
        <TheTeamBehind />
      </section>
      <section id="text-animation">
        <TextAnimationSection />
      </section>
      <section id="latestnews">
        <LatestNews />
      </section>
      <section id="evolutionOfLogo">
        <EvolutionOfLogo />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}
