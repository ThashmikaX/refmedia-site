"use client";

import CustomBreadcrums from "@/components/CustomBreadcrums";
import React, { useState, useCallback, useEffect } from "react";
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
import { fetchAllAlbums } from "@/lib/actions";
import { Status, UploadAlbum } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { type CarouselApi } from "@/components/ui/carousel";

const Gallery = () => {
  const [activeDate, setActiveDate] = useState<{ year: number; month: number }>(
    {
      year: 2024,
      month: 7,
    }
  );

  const [api, setApi] = useState<CarouselApi>();
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  const { data, isLoading, error } = useQuery<Status>({
    queryKey: ["albums", activeDate.year, activeDate.month],
    queryFn: () => fetchAllAlbums(activeDate),
  });

  const handleYearChange = useCallback((newYear: number) => {
    setActiveDate((prev) => ({ ...prev, year: newYear }));
  }, []);

  const handleMonthChange = useCallback((month: number) => {
    setActiveDate((prev) => ({ ...prev, month }));
  }, []);

  const albums = data?.data as UploadAlbum[] | undefined;
  const activeMonthName = monthsPick[activeDate.month - 1]?.month;
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentYearIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (currentYearIndex >= 0 && currentYearIndex < yearsPick.length) {
      handleYearChange(yearsPick[currentYearIndex].year);
    }
  }, [currentYearIndex, handleYearChange]);

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
        <p className="text-[48px] font-[500]">Gallery</p>
        <p className="text-[16px] font-[300] text-center max-w-[800px] text-sectionTitle">
          Explore moments of excellence captured through our lens. Our gallery
          showcases the vibrant life, cutting-edge research, and dynamic events
          of the Engineering Faculty at the University of Ruhuna. Witness the
          spirit of innovation and collaboration that defines our community.
        </p>
        <div className="absolute mx-auto bottom-0 right-0 md:bottom-[-280.5px] md:right-[191px] z-[-100]">
          {/* <Icons.maskGroup className="w-[393px] h-[197px] md:w-[1057px] md:h-[529px]" /> */}
        </div>
      </section>
      <section className="flex max-w-[1200px] items-start gap-10 self-stretch p-6 m-auto border border-[color:var(--Purple-100,#F9F5FF)] shadow-[0px_0px_100px_0px_rgba(207,185,255,0.50)] rounded-3xl border-solid bg-white">
        <div className="flex flex-col">
          <div className="w-32 ml-10 mb-3">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {yearsPick.map((year, index) => (
                  <CarouselItem
                    className="flex items-center justify-center cursor-pointer transition-transform duration-300"
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
              {monthsPick.map((month, index) => (
                <li
                  className={`list-none cursor-pointer px-3 mb-2 transition-all duration-100 ${
                    activeDate.month === index + 1
                      ? "font-bold scale-110"
                      : "font-light"
                  }`}
                  key={month.month}
                  onClick={() => {
                    handleMonthChange(month.monthNo);
                  }}
                >
                  {month.month}
                </li>
              ))}
            </ScrollArea>
          </div>
        </div>
        <div className="flex-col">
          <div className="h-[35px] w-[100%] flex-col justify-start items-start gap-1 inline-flex">
            <div className="px-2 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black/50 text-2xl font-medium">
                {activeMonthName} {activeDate.year}
              </div>
            </div>
            <div className="h-px w-[100%] px-[9px] inline-flex">
              <div className="w-[100%] h-px bg-black/10" />
            </div>
          </div>

          {albums && albums.length > 0 ? (
            albums.map((album, index) => (
              <GalleryDetails
                contents={album}
                key={album._id || index}
                activeMonth={activeMonthName}
              />
            ))
          ) : isLoading ? (
            <div className="text-center py-10">Loading albums....</div>
          ) : (
            <div className="text-center py-10">
              No albums found for this month.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Gallery;
