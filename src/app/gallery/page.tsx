"use client";

import Navbar from "@/components/Navbar";
import CustomBreadcrums from "@/components/CustomBreadcrums";
import React, { useState } from "react";
import ContactUs from "@/components/ContactUs";
import { Icons } from "@/components/ui/Icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { yearsPick, monthsPick } from "./datePicker";
import { ScrollArea } from "@/components/ui/scroll-area";

const Gallery = () => {
  const [activeMonth, setActiveMonth] = useState("July");

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveMonth(e.currentTarget.id);
  };
  return (
    <main className="relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0">
      <div className="hidden md:block absolute z-[-400] top-[80px]">
        <Icons.lineVector1 />
      </div>
      <div className="hidden md:block absolute z-[-400] right-0 top-[579.5px]">
        <Icons.lineVector2 />
      </div>
      <CustomBreadcrums />
      <section className="relative m-[40px] flex flex-col justify-center items-center gap-[48px]">
        <p className=" text-[48px] font-[500]">Gallery</p>
        <p className=" text-[16px] font-[300] text-center max-w-[800px] text-sectionTitle">
          Explore moments of excellence captured through our lens. Our gallery
          showcases the vibrant life, cutting-edge research, and dynamic events
          of the Engineering Faculty at the University of Ruhuna. Witness the
          spirit of innovation and collaboration that defines our community.
        </p>
        <div className="absolute mx-auto bottom-0 right-0  md:bottom-[-280.5px] md:right-[191px] z-[-100] ">
          {/* <Icons.maskGroup className="w-[393px] h-[197px] md:w-[1057px] md:h-[529px]" /> */}
        </div>
      </section>
      <section className="flex max-w-[1200px] items-start gap-10 self-stretch p-6 m-auto border border-[color:var(--Purple-100,#F9F5FF)] shadow-[0px_0px_100px_0px_rgba(207,185,255,0.50)] rounded-3xl border-solid bg-white">
        <div className="flex flex-col">
          <div className="w-32 ml-10 mb-3">
            <Carousel>
              <CarouselContent>
                {yearsPick.map((year) => (
                  <CarouselItem
                    className="flex items-center justify-center"
                    key={year.year}
                  >
                    {year.year}
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex items-center justify-center">
            <ScrollArea className="h-[300px] px-16">
              {monthsPick.map((month) => (
                <li
                  className={`list-none cursor-pointer px-3 mb-2 transition-all duration-100 ${
                    activeMonth === month.month
                      ? "font-bold scale-110"
                      : "font-light"
                  }`}
                  key={month.month}
                  id={month.month}
                  onClick={onClick}
                >
                  {month.month}
                </li>
              ))}
            </ScrollArea>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-[35px] w-[100%] flex-col justify-start items-start gap-1 inline-flex">
            <div className="px-2 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black/50 text-2xl font-medium">
                {activeMonth}
              </div>
            </div>
            <div className="h-px w-[100%] px-[9px] justify-center items-center inline-flex">
              <div className="w-[100%] h-px bg-black/10" />
            </div>
          </div>
          <div className="pt-10 flex-col justify-start items-start inline-flex gap-5">
            <div className="self-stretch text-black/90 text-xl font-medium ">
              THREE LANKA Project - Pre Closure Meeting and Conference
            </div>
            <div className="text-black/90 text-[13px] font-light ">
              16th July 2024
            </div>
            <div className="self-stretch text-justify text-black/90 text-[13px] font-light ">
              Participants reflected on their journey through significant events
              and milestones, from international partnership meetings to
              technical seminars. This EU Erasmus+ funded initiative has been
              instrumental in developing a skilled workforce in renewable energy
              across Sri Lanka. As the project approaches its closure, the team
              celebrates the progress made in training and certifying
              technicians, engineers, and project managers in solar, wind, and
              biogas technologies. The collaboration across five universities
              has paved the way for a sustainable future.
            </div>
          </div>
          <div className=" mt-5 justify-start items-start gap-2 inline-flex">
            <div className="text-justify text-black/90 text-[13px] font-light">
              Photographed by:
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-[#6840c6] underline text-[13px]">
                Hirun Seneviratne
              </a>
              <a href="#" className="text-[#6840c6] underline text-[13px]">
                Chamika Rohan
              </a>
            </div>
          </div>

          <div className="p-0.5 rounded-sm border-4 border-[#f4ebff] justify-start items-start gap-0.5 inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
              <img
                className="self-stretch object-cover grow shrink basis-0"
                src="/assets/galleryPage/july1.jpeg"
              />
              <img
                className="object-cover self-stretch grow shrink basis-0"
                src="/assets/galleryPage/july3.jpeg"
              />
            </div>
            <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
              <img
                className="object-cover self-stretch grow shrink basis-0"
                src="/assets/galleryPage/july2.jpeg"
              />
              <img
                className="object-cover self-stretch grow shrink basis-0"
                src="/assets/galleryPage/july4.jpeg"
              />
              <div className="self-stretch grow shrink basis-0 px-4 bg-black/60 flex-col justify-center items-center gap-1 flex bg-[url('/assets/galleryPage/july4.jpeg')]">
                <div className="self-stretch p-2 bg-black/25 rounded-lg border border-[#f4ebff] backdrop-blur-[10px] justify-center items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 text-center text-white/90 text-base font-semibold ">
                    View Full Album on Facebook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
