import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import Button from "./ui/button";
import { Icons } from "./ui/Icons";

const Gallery = () => {
  return (
    <div className="my-[96px] sm:my-[128px] flex flex-col gap-[40px] w-full sm:gap-[64px]">
      <div className="mx-[16px]  sm:m-0 text-sectionTitle h-[35px] sm:px-[100px] text-[24px] font-[500px]">
        <p className="font-outfit.normal">Gallery</p>
        <div className="border-b-2 border-border " />
      </div>
      <HorizontalScrollCarousel />
      <div className="mx-[16px] flex flex-col gap-[40px] md:gap-0 md:flex-row px-[24px] md:px-[100px]  justify-between items-center">
        <p className="text-justify md:text-left items-center text-supportingText w-full md:w-[532.5px] text-[16px] font-[300px]">
          Explore moments of excellence captured through our lens. Our gallery
          showcases the vibrant life, cutting-edge research, and dynamic events
          of the Engineering Faculty at the University of Ruhuna. Witness the
          spirit of innovation and collaboration that defines our community.
        </p>
        <Button Icon={Icons.arrowUpRight}>View Gallery</Button>
      </div>
    </div>
  );
};

export default Gallery;
