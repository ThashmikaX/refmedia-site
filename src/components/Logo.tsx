import Image, { StaticImageData } from "next/image";
import { evolutionOfLogo } from "./Assests";

export default function Logo({ imgSrc, title, year }: evolutionOfLogo) {
  return (
    <div className="flex flex-col gap-[21px]">
      <Image
        className="w-[160px] object-scale-down rounded-full"
        src={imgSrc}
        alt="logo"
        placeholder="blur"
        sizes="160px"
        width={160}
        height={160}
        quality={100}
      />

      <div className="w-full flex flex-col  gap-[4px]">
        <p className="text-center text-supportingText text-[16px] font-[500]">
          {title}
        </p>
        <p className="text-center text-[#6941C6] text-[13px] font-[300]">
          {year}
        </p>
      </div>
    </div>
  );
}
