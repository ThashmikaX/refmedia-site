import React from "react";
import { Icons } from "@/components/ui/Icons";
import CustomBreadcrums from "@/components/CustomBreadcrums";
import { GridBackground } from "@/components/GridBackground";
import Image from "next/image";
import Button from "@/components/ui/button";

const Calender = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="calendar-plus-02">
      <path
        id="Icon"
        d="M21.5 11.5V8.8C21.5 7.11984 21.5 6.27976 21.173 5.63803C20.8854 5.07354 20.4265 4.6146 19.862 4.32698C19.2202 4 18.3802 4 16.7 4H8.3C6.61984 4 5.77976 4 5.13803 4.32698C4.57354 4.6146 4.1146 5.07354 3.82698 5.63803C3.5 6.27976 3.5 7.11984 3.5 8.8V17.2C3.5 18.8802 3.5 19.7202 3.82698 20.362C4.1146 20.9265 4.57354 21.3854 5.13803 21.673C5.77976 22 6.61984 22 8.3 22H13M21.5 10H3.5M16.5 2V6M8.5 2V6M18.5 21V15M15.5 18H21.5"
        stroke="white"
        stroke-opacity="0.85"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
);

const Convocation = () => {
  return (
    <main className="relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0 mt-20">
      <div className="hidden md:block absolute z-[-400] top-[80px]">
        <Icons.lineVector1 />
      </div>
      <div className="hidden md:block absolute z-[-400] right-0 top-[579.5px]">
        <Icons.lineVector2 />
      </div>
      <CustomBreadcrums />
      <GridBackground>
        <section className="relative md:m-[40px] flex flex-col justify-center items-center gap-[20px]">
          <p className=" text-[48px] font-[500] smc:text-[22px]">
            31st General Convocation
          </p>
          <p className="text-justify text-[16px] font-[300] md:text-center max-w-[800px] text-sectionTitle smc:text-[12px]">
            Photo Shoot Booking
          </p>
        </section>
      </GridBackground>
      <div className="text-center text-[#0011ff] text-base font-normal smc:text-[14px]">
        Capture Your Special Moment!
      </div>
      <div className="mt-10 flex justify-center items-center ">
        <Image
          className="rounded-2xl border-2 border-[#f9f5ff] object-cover "
          src={"/assets/convocation/photo1.png"}
          width={500}
          height={500}
          alt="graduation"
        />
      </div>
      <div className="mt-10 text-black/80 text-base font-light text-center">
        Book your professional photo shoot for the 31st General Convocation of
        the University of Ruhuna. Don’t miss out on preserving this milestone!
      </div>
      <div className="text-center text-black/80 text-base font-normal mt-2">
        "Limited slots available, secure your spot today."
      </div>
      <div className="flex items-center justify-center my-10">
        <Button asLink={true} to={"/convocation/book-now"} Icon={Calender}>
          Book Now
        </Button>
      </div>
    </main>
  );
};

export default Convocation;
