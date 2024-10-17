import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UploadAlbum } from "@/lib/types";

// Function to generate blur placeholder URL
const getBlurDataURL = (src: string) => {
  return src.replace("/upload/", "/upload/w_10,e_blur:1000/");
};

const GalleryDetails = ({
  activeMonth,
  contents,
}: {
  activeMonth: string;
  contents: UploadAlbum;
}) => {
  const {
    albumDescription,
    albumTitle,
    eventDate,
    facebookAlbumLink,
    imageLinks,
    photographers,
  } = contents;
  console.log(imageLinks);
  if (!imageLinks) return null;

  return (
    <div className="flex-1 flex flex-col mb-5">
      <div className="pt-10 flex-col justify-start items-start inline-flex gap-5">
        <div className="self-stretch text-black/90 text-xl font-medium ">
          {albumTitle}
        </div>
        <div className="text-black/90 text-[13px] font-light ">
          {new Date(eventDate).toDateString()}
        </div>
        <div className="self-stretch text-justify text-black/90 text-[13px] font-light ">
          {albumDescription}
        </div>
      </div>
      <div className=" mt-5 justify-start items-start gap-2 inline-flex">
        <div className="text-justify text-black/90 text-[13px] font-light">
          Photographed by:
        </div>
        <div className="flex flex-col mb-5">
          {photographers &&
            photographers.map((photographer, index) => (
              <a
                href="#"
                key={index}
                className="text-[#6840c6] underline text-[13px]"
              >
                {photographer}
              </a>
            ))}
        </div>
      </div>

      <div className="p-0.5 rounded-sm border-4 border-[#f4ebff] justify-start items-start gap-0.5 inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
          <Image
            className="self-stretch object-cover grow shrink basis-0"
            src={imageLinks[0]}
            alt="event image"
            width={1000}
            height={1000}
          />
          <Image
            className="self-stretch object-cover grow shrink basis-0"
            src={imageLinks[1]}
            alt="event image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
          <Image
            className="self-stretch object-cover grow shrink basis-0"
            src={imageLinks[2]}
            alt="event image"
            width={1000}
            height={1000}
          />
          <Image
            className="self-stretch object-cover grow shrink basis-0"
            src={imageLinks[3]}
            alt="event image"
            width={1000}
            height={1000}
          />
          <div className="self-stretch grow shrink basis-0 px-4 bg-black/60 flex-col justify-center items-center gap-1 flex py-20 lgc:py-10 smc:py-5  relative">
            <Image
              className="self-stretch object-cover grow shrink basis-0 absolute top-0 left-0 w-screen h-full opacity-15"
              src={imageLinks[3]}
              alt="event image"
              width={1000}
              height={1000}
            />
            <div className="self-stretch p-2 bg-black/25 rounded-lg border border-[#f4ebff] backdrop-blur-[10px] justify-center items-center gap-2 inline-flex">
              <Link
                href={facebookAlbumLink}
                className="grow shrink basis-0 text-center text-white/90 text-base font-semibold flex items-center justify-center gap-2 lgc:text-xs"
              >
                View Full Album on Facebook
                <Image
                  src={"/assets/galleryPage/icons/link-external.svg"}
                  alt="external-icon"
                  width={20}
                  height={20}
                  className="mdc:w-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetails;
