import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary-background text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
      <section className="w-full" id="home">

      </section>
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
    </main>
  )
}
