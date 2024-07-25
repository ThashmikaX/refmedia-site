"use client"; // Add this directive at the top

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WelcomeCard from "./WelcomeCard";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const images = [
  { url: "/assets/slideshow/Slideshow.jpg", x: 16.5 },
  { url: "/assets/slideshow/slide2.png", x: 50.5 }, // prev x + 14.00
  { url: "/assets/slideshow/slide3.png", x: 84.5 }, // prev x + 14.00
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className=" relative overflow-hidden smc:flex smc:mt-20 smc:flex-col smc:mx-4">
        <div className="h-[100%] relative smc:w-[100vw] smc:order-2">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-[90vh] smc:h-[25rem] relative"
              >
                <Image
                  className="w-[100%] object-cover"
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <WelcomeCard />
      </div>
      <div className="flex justify-center items-center m-4">
        <div className="w-[275px] h-10 justify-start items-center gap-8 inline-flex">
          <div className="px-3 py-2 bg-white rounded-[20px] border border-black/opacity-5 justify-start items-center flex">
            <div
              className="w-6 h-6 justify-center items-center flex cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <FaPlay color="black" />
              ) : (
                <FaPause color="black" size={20} />
              )}
            </div>
            <div className="w-[107px] h-6 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="108"
                height="24"
                viewBox="0 0 108 24"
                fill="none"
              >
                {images.map((image, index) => (
                  <rect
                    className="transition-all duration-[1s] ease-[ease]"
                    key={index}
                    x={`${image.x}`}
                    y="7"
                    width={currentIndex === index ? "24" : "10"}
                    height="10"
                    rx="5"
                    fill="black"
                    fill-opacity="0.5"
                  />
                ))}
              </svg>
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div
              className="p-2 cursor-pointer bg-white rounded-3xl border border-black/opacity-5 justify-start items-center gap-2.5 flex"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M15.5 18L9.5 12L15.5 6"
                  stroke="black"
                  stroke-opacity="0.85"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className="p-2 cursor-pointer bg-white rounded-3xl border border-black/opacity-25 justify-start items-center gap-2.5 flex"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M9.5 18L15.5 12L9.5 6"
                  stroke="black"
                  stroke-opacity="0.85"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
