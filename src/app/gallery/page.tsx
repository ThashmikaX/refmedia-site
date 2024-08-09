"use client";

import CustomBreadcrums from "@/components/CustomBreadcrums";
import React, { useState } from "react";

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
import GalleryDetails from "./components/GalleryDetails";
import { galleryContents } from "./galleryText"; // Import the organized gallery data

const Gallery = () => {
  const [activeMonth, setActiveMonth] = useState("July");

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActiveMonth(e.currentTarget.id);
  };

  // Get the contents for the active month
  const filteredContent = galleryContents[activeMonth] || [];

  return (
    <main className="relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0 mt-20">
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
        {/* Render the filtered content based on active month */}
        <div className="flex-col">
          <div className="h-[35px] w-[100%] flex-col justify-start items-start gap-1 inline-flex">
            <div className="px-2 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black/50 text-2xl font-medium">
                {activeMonth}
              </div>
            </div>
            <div className="h-px w-[100%] px-[9px]inline-flex">
              <div className="w-[100%] h-px bg-black/10" />
            </div>
          </div>

          {filteredContent.map((contents, index) => (
            <GalleryDetails
              contents={contents}
              key={index}
              activeMonth={activeMonth}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
