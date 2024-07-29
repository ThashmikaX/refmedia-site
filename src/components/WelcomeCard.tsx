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
    {...props}
  >
    <path
      d="M7 13L12 18L17 13M7 6L12 11L17 6"
      stroke="white"
      strokeOpacity="0.85"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function CarouselNav() {
  return (
    <div className="absolute left-6 bottom-6 smc:relative smc:order-1 smc:left-0 smc:mb-10 xsc:mb-16 lgc:bottom-14 smc:top-0">
      <div className="z-[100] w-[531px] h-[277px] p-6 bg-white bg-opacity-70 rounded-2xl border-4 border-white border-opacity-10 backdrop-blur-2xl flex-col justify-start items-start gap-8 inline-flex smc:bg-white smc:border-none smc:w-[100%] smc:rounded-none">
        <div className="border-b-2 border-solid border-[#0000002a] self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
          <div className="px-2 justify-center items-center gap-2.5 inline-flex ">
            <div className="text-center text-black text-opacity-50 text-2xl font-[500]">
              Welcome to
            </div>
          </div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex gap-5 ">
          <div>
            <span className="text-black text-opacity-90 text-base font-light xsc:text-sm">
              the
            </span>
            <span className="text-black text-opacity-90 text-base font-semibold xsc:text-sm">
              {" "}
              Media Unit{" "}
            </span>
            <span className="text-black text-opacity-90 text-base font-light xsc:text-sm">
              of the Engineering Faculty, University of Ruhuna
            </span>
          </div>
          <img
            className="w-[100%] object-cover xsc:w-[180px] smc:w-[200px]"
            src="/assets/Union.svg"
            alt="ref logo"
          />
        </div>
        <div className="smc:w-[100%] smc:flex smc:items-center smc:justify-center">
          <Button asLink={true} to={"#heading"} Icon={MyIcon}>
            Find Out More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CarouselNav;
