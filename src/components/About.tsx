import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const circleAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const transition = {
  duration: 1,
  ease: "easeInOut",
};

function About() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      controls1.start({ ...circleAnim.visible, transition });
      await new Promise((resolve) =>
        setTimeout(resolve, transition.duration * 500)
      ); // Wait for half the duration
      controls2.start({ ...circleAnim.visible, transition });
      controls1.start({ ...circleAnim.hidden, transition });
      await new Promise((resolve) =>
        setTimeout(resolve, transition.duration * 500)
      );
      controls3.start({ ...circleAnim.visible, transition });
      controls2.start({ ...circleAnim.hidden, transition });
      await new Promise((resolve) =>
        setTimeout(resolve, transition.duration * 500)
      );
      controls4.start({ ...circleAnim.visible, transition });
      controls3.start({ ...circleAnim.hidden, transition });
      await new Promise((resolve) =>
        setTimeout(resolve, transition.duration * 500)
      );
      controls5.start({ ...circleAnim.visible, transition });
      controls4.start({ ...circleAnim.hidden, transition });
      await new Promise((resolve) =>
        setTimeout(resolve, transition.duration * 500)
      );
      controls6.start({ ...circleAnim.visible, transition });
      controls5.start({ ...circleAnim.hidden, transition });
      await new Promise((resolve) =>
        setTimeout(resolve, transition.duration * 500)
      );
      controls6.start({ ...circleAnim.hidden, transition });
      sequence(); // Restart the sequence
    };
    sequence();
  }, [controls1, controls2, controls3, controls4, controls5, controls6]);

  return (
    <div className="relative min-h-[20vh] my-[96px] sm:my-[128px] flex flex-col gap-[40px] w-full sm:gap-[64px]">
      <div className="mx-[16px] max-w-[960px] sm:w-full sm:mx-auto text-sectionTitle h-[35px] sm:px-[40px] text-[24px] font-[500]">
        <p>About Us</p>
        <div className="border-b-2 border-border" />
      </div>
      <div className="max-w-[960px] mx-[16px] sm:w-full sm:mx-auto sm:px-[40px] text-black flex items-center justify-between gap-10 smc:flex-col">
        <div className="flex-1 smc:order-2 smc:text-center">
          Established in 2016, The Media Unit of the Engineering Faculty at the
          University of Ruhuna is dedicated to promoting the faculty's
          activities and achievements. Our team works tirelessly to create
          engaging content that highlights the innovative research and dynamic
          events taking place within our faculty.
        </div>
        <div className="relative flex-1 flex items-center justify-center smc:order-1 smc:w-[100%] smc:overflow-hidden">
          <motion.div
            className="absolute shadow-purple-400 w-[207.74px] h-[207.74px] opacity-80 rounded-full shadow-lg border border-purple-400 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
            initial="hidden"
            animate={controls1}
          />
          <motion.div
            className="absolute w-[270.06px] h-[270.06px] opacity-70 rounded-full shadow-purple-400 shadow-lg border border-purple-400 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
            initial="hidden"
            animate={controls2}
          />
          <motion.div
            className="absolute w-[332.39px] h-[332.39px] opacity-60 rounded-full shadow-purple-400 shadow-lg border border-purple-400 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
            initial="hidden"
            animate={controls3}
          />
          <motion.div
            className="absolute shadow-purple-400 w-[394.71px] h-[394.71px] opacity-50 rounded-full shadow-lg border border-purple-400 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
            initial="hidden"
            animate={controls4}
          />
          <motion.div
            className="absolute shadow-purple-400 w-[457.03px] h-[457.03px] opacity-40 rounded-full shadow-lg border border-purple-400 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
            initial="hidden"
            animate={controls5}
          />
          <motion.div
            className="absolute shadow-purple-400 w-[519.35px] h-[519.35px] opacity-30 rounded-full shadow-lg border border-purple-400 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"
            initial="hidden"
            animate={controls6}
          />
          <img
            className="w-[129px] h-[131px]"
            src="/assets/aboutComponent/logo.png"
            alt="ref logo"
          />
        </div>
        <div className="flex-1 flex items-center justify-center smc:order-3">
          <img
            className="w-[283px] h-[92px]"
            src="/assets/aboutComponent/2016.svg"
            alt="2016"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
