"use client";

import CustomBreadcrums from "@/components/CustomBreadcrums";
import React, { useState, useCallback, useEffect } from "react";
import { Icons } from "@/components/ui/Icons";
import { yearsPick, monthsPick } from "./datePicker";
import GalleryDetails from "./components/GalleryDetails";
import { fetchAllAlbums } from "@/lib/actions";
import { Status, UploadAlbum } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { GridBackground } from "@/components/GridBackground";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const today = new Date();
  const [api, setApi] = useState<CarouselApi>();
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentYearIndex(api.selectedScrollSnap());
    });
  }, [api]);
  const [activeDate, setActiveDate] = useState<{ year: number; month: number }>(
    {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
    }
  );

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

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

  useEffect(() => {
    if (currentYearIndex >= 0 && currentYearIndex < yearsPick.length) {
      handleYearChange(yearsPick[currentYearIndex].year);
    }
  }, [currentYearIndex, handleYearChange]);
  const albums = data?.data as UploadAlbum[] | undefined;
  const activeMonthName = monthsPick[activeDate.month - 1]?.month;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0 mt-20"
    >
      <div className="hidden md:block absolute z-[-400] top-[80px]">
        <Icons.lineVector1 />
      </div>
      <div className="hidden md:block absolute z-[-400] right-0 top-[579.5px]">
        <Icons.lineVector2 />
      </div>
      <CustomBreadcrums />
      <GridBackground>
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative md:m-[40px] flex flex-col justify-center items-center gap-[48px]"
        >
          <p className="text-[48px] font-[500]">Gallery</p>
          <p className="text-justify text-[16px] font-[300] md:text-center max-w-[800px] text-sectionTitle">
            Explore moments of excellence captured through our lens. Our gallery
            showcases the vibrant life, cutting-edge research, and dynamic
            events of the Engineering Faculty at the University of Ruhuna.
            Witness the spirit of innovation and collaboration that defines our
            community.
          </p>
        </motion.section>
      </GridBackground>
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col md:flex-row max-w-[1200px] items-start gap-10 self-stretch p-6 m-auto border border-[color:var(--Purple-100,#F9F5FF)] shadow-[0px_0px_100px_0px_rgba(207,185,255,0.50)] rounded-3xl border-solid bg-white"
      >
        <div className="flex flex-col w-full md:w-auto">
          {isSmallScreen ? (
            <div className="flex flex-col gap-4 mb-6">
              <Select
                value={activeDate.year.toString()}
                onValueChange={(value) => handleYearChange(parseInt(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {yearsPick.map((year) => (
                    <SelectItem key={year.year} value={year.year.toString()}>
                      {year.year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={activeDate.month.toString()}
                onValueChange={(value) => handleMonthChange(parseInt(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Month" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {monthsPick.map((month) => (
                    <SelectItem
                      key={month.monthNo}
                      value={month.monthNo.toString()}
                    >
                      {month.month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="hidden md:flex flex-col items-center">
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
                <ul className="h-[300px] px-16 overflow-y-auto">
                  {monthsPick.map((month) => (
                    <motion.li
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`list-none cursor-pointer px-3 mb-2 transition-all duration-100 ${
                        activeDate.month === month.monthNo
                          ? "font-bold scale-110"
                          : "font-light"
                      }`}
                      key={month.month}
                      onClick={() => handleMonthChange(month.monthNo)}
                    >
                      {month.month}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex-col w-full">
          <div className="h-[35px] w-full flex-col justify-start items-start gap-1 inline-flex">
            <div className="px-2 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-black/50 text-2xl font-medium">
                {activeMonthName} {activeDate.year}
              </div>
            </div>
            <div className="h-px w-full px-[9px] inline-flex">
              <div className="w-full h-px bg-black/10" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {albums && albums.length > 0 ? (
              albums.map((album, index) => (
                <motion.div
                  key={album._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <GalleryDetails
                    contents={album}
                    activeMonth={activeMonthName}
                  />
                </motion.div>
              ))
            ) : isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-left py-10"
              >
                Loading albums....
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-left py-10"
              >
                No albums found for this month.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default Gallery;
