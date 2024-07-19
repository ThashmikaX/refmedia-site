import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <section className="w-full" id="home"></section>
      <div className="min-h-screen bg-[url('/assets/Slideshow.jpg')] bg-cover top-0"></div>
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
      <section id="gallery" className="h-[300vh]">
        <Gallery />
      </section>
    </main>
  );
}
