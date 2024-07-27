import { Icons } from "./ui/Icons";
import UserAvatar from "./UserAvatar";

export default function TextAnimationSection() {
  return (
    <>
      <div className="bg-[url('/assets/fac-bg.jpg')] bg-cover bg-center md:bg-fixed h-screen flex items-center justify-center flex-col">
        <div className="bg-black/20 backdrop-blur-[5px] justify-center items-center overflow-hidden w-full">
          <div className="self-stretch justify-center items-center gap-2 inline-flex animate-slideLeftRight">
            <div className="text-white/90 text-[32px] md:text-[64px] font-sans whitespace-nowrap">
              Bridging Innovation and Communication – Explore, Engage, Elevate
            </div>
          </div>
          <div className="items-center gap-2 inline-flex animate-slideRightLeft">
            <div className="text-white/90 text-[32px] md:text-[64px] font-sans whitespace-nowrap">
              Capturing Excellence, Inspiring Innovation - We are REF Media
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-slideLeftRight {
    animation: slide 20s linear infinite;
  }

  .animate-slideRightLeft {
    animation: slide 20s linear infinite reverse;
  }
      `}</style>
    </>
  );
}