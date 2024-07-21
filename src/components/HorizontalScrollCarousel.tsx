"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { row1, row2, row3 } from "./Assests";

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });
  const x = useTransform(smoothProgress, [0, 1], ["-25%", "-50%"]);
  const xReverse = useTransform(smoothProgress, [0, 1], ["-50%", "-25%"]);
  return (
    <section
      ref={targetRef}
      className="relative w-full h-[301px] flex flex-col gap-[4px] sm:h-[709px]"
    >
      <div className="flex h-[234px] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[5px]">
          {[...row1, ...row1].map((imageSrc, index) => {
            return (
              <Image
                key={index}
                className="w-[9.124rem] h-[6.069rem] sm:h-[14.604rem] sm:w-[32.687rem] rounded-[5.51px]"
                src={imageSrc}
                width={523}
                height={234}
                quality={100}
                sizes="(max-width: 425px) 145.99px , 522.99px"
                alt="image"
                placeholder="blur"
              />
            );
          })}
        </motion.div>
      </div>
      <div className="flex h-[234px] items-center overflow-hidden">
        <motion.div style={{ x: xReverse }} className="flex gap-[5px]">
          {[...row2, ...row2].map((imageSrc, index) => {
            return (
              <Image
                key={index}
                className="w-[9.124rem] h-[6.069rem] sm:h-[14.604rem] sm:w-[32.687rem] rounded-[5.51px]"
                src={imageSrc}
                width={523}
                quality={100}
                height={234}
                sizes="(max-width: 425px) 145.99px , 390.87px"
                alt="image"
                placeholder="blur"
              />
            );
          })}
        </motion.div>
      </div>
      <div className="flex h-[234px] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[5px]">
          {[...row3, ...row3].map((imageSrc, index) => {
            return (
              <Image
                key={index}
                className="w-[9.124rem] h-[6.069rem] sm:h-[14.604rem] sm:w-[32.687rem] rounded-[5.51px]"
                src={imageSrc}
                width={523}
                height={234}
                quality={100}
                sizes="(max-width: 425px) 145.99px , 522.99px"
                alt="image"
                placeholder="blur"
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
