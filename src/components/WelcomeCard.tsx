import React from "react";
import Button from "./ui/button";
import RefLogo from "../../public/assets/Union.svg";

const MyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 13L12 18L17 13M7 6L12 11L17 6"
      stroke="white"
      stroke-opacity="0.85"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

function CarouselNav() {
  return (
    <div className="absolute left-6 bottom-6 smc:relative smc:order-1 smc:left-0">
      <div className="z-[100] w-[531px] h-[277px] p-6 bg-white bg-opacity-70 rounded-2xl border-4 border-white border-opacity-10 backdrop-blur-2xl flex-col justify-start items-start gap-8 inline-flex smc:bg-white smc:border-none smc:w-[100%] smc:rounded-none">
        <div className="border-b-2 border-solid border-[#0000002a] self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
          <div className="px-2 justify-center items-center gap-2.5 inline-flex ">
            <div className="text-center text-black text-opacity-50 text-2xl font-bold   ">
              Welcome to
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="w-[241.50px]">
            <span className="text-black text-opacity-90 text-base font-light ">
              the
            </span>
            <span className="text-black text-opacity-90 text-base font-semibold ">
              {" "}
              Media Unit{" "}
            </span>
            <span className="text-black text-opacity-90 text-base font-light ">
              of the Engineering Faculty, University of Ruhuna
            </span>
          </div>
          <img src="/assets/Union.svg" alt="ref logo" />
        </div>
        <div className="smc:w-[100%] smc:flex smc:items-center smc:justify-center">
          <Button Icon={MyIcon}>Find Out More</Button>
        </div>
      </div>
    </div>
  );
}

export default CarouselNav;
