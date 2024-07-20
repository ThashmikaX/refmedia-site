import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import TheTeamBehind from "@/components/TheTeamBehind";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <section className="w-full" id="home"></section>
      <div className="min-h-screen">
        <Hero />
      </div>
      <div className="min-h-screen bg-cover">
        {/* <Welcome />
        <Theme />
        <Sponsors />
        <PastEvents />
        <Organized />
        <Team/>
        <FAQ />
        <Footer></Footer> */}
        {/* <Countdown/> */}
      </div>

      {/*Gallery section
      to test animation h-[300vh] was added
      */}
      <section id="gallery">
        <Gallery />
      </section>
      <section id="theTeamBehind">
        <TheTeamBehind />
      </section>
      <section id="contactUs">
        <ContactUs />
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
