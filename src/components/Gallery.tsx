import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import Button from "./ui/button";
import { Icons } from "./ui/Icons";

const Gallery = () => {
  return (
    <div className="my-[96px] sm:my-[128px] flex flex-col gap-[40px] w-full sm:gap-[64px]">
      <div className="mx-[16px] max-w-[960px] sm:w-full sm:mx-auto text-sectionTitle h-[35px] sm:px-[40px] text-[24px] font-[500px]">
        <p>Gallery</p>
        <div className="border-b-2 border-border" />
      </div>
      <HorizontalScrollCarousel />
      <div className="mx-[16px] max-w-[960px] sm:w-full sm:mx-auto flex flex-col gap-[40px] md:gap-0 md:flex-row sm:px-[40px] justify-between items-center">
        <p className="text-justify md:text-left text-supportingText md:w-[532.5px] text-[16px] font-[300px]">
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
