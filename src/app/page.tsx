"use client";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import TheTeamBehind from "@/components/TheTeamBehind";
import Heading from "@/components/Heading";
import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LatestNews from "@/components/LatestNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
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
      <section id="latestnews">
        <LatestNews />
      </section>
      <section id="contact">

        <ContactUs />
      </section>
      <section id="footer">
        <Footer />
      </section>
      {/* <section id="parallexText" className="w-full">
        <ParallaxText 
        line1="Bridging Innovation and Communication – Explore, Engage, Elevate"
        line2="Capturing Excellence, Inspiring Innovation - We are REF Media"
        />
      </section> */}
    </main>
  );
}
