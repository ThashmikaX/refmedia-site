import React from "react";
import { Icons } from "@/components/ui/Icons";
import CustomBreadcrums from "@/components/CustomBreadcrums";

const BookNow = () => {
  return (
    <div>
      <main className="relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0 mt-20">
        <div className="hidden md:block absolute z-[-400] top-[80px]">
          <Icons.lineVector1 />
        </div>
        <div className="hidden md:block absolute z-[-400] right-0 top-[579.5px]">
          <Icons.lineVector2 />
        </div>
        <CustomBreadcrums />
      </main>
    </div>
  );
};

export default BookNow;
