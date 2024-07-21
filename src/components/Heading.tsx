import React from "react";
import Image from "next/image";

function Heading() {
  return (
    <div className="min-h-[100vh]">
      <div
        className="mt-20 w-[100vw]  bg-no-repeat bg-cover bg-center flex items-center justify-center text-center text-[48px] leading-[normal] smc:bg-contain smc:text-[35px] smc:mt-0"
        style={{ backgroundImage: "url('/assets/heading/Background.svg')" }}
      >
        <h1 className="z-50 text-black ">
          Empowering Innovation and
          <br /> Communication
        </h1>
      </div>
      <p className="text-black text-center max-w-[50rem] m-auto px-10 py-[64px]">
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
