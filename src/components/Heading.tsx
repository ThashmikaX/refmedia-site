import React from "react";
import Image from "next/image";

function Heading() {
  return (
    <div>
      <div
        className="mt-20 w-full  bg-no-repeat bg-cover bg-center flex items-center justify-center text-center text-[48px] leading-[normal] smc:bg-contain smc:text-[35px] smc:mt-0 relative"
        // style={{ backgroundImage: "url('/assets/line-bg.png')" }}
      >
        <h1 className="z-50 text-black ">
          Empowering Innovation and
          <br /> Communication
        </h1>
        <div
          className="absolute -top-30 left-0 min-w-full min-h-[40vh] bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('/assets/line-bg.png')" }}
        ></div>
      </div>
      <p className="text-supportingText font-[300] text-center t max-w-[50rem] m-auto px-10 py-[64px] sm:text-justify">
        Our media unit serves as the bridge between the engineering faculty and
        the community. We strive to enhance the visibility of our research,
        events, and achievements through various media channels.
      </p>
      <div className="flex items-center justify-center px-10">
        <img
          className="rounded-3xl object-cover"
          src="/assets/heading/camera.png"
          alt="camera"
        />
      </div>
    </div>
  );
}

export default Heading;
