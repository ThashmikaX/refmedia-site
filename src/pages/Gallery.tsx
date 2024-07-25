import Navbar from "@/components/Navbar";
import React from "react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white w-full text-primary-foreground relative">
      <div className="h-[2px] w-full bg-main-gradient absolute top-0 z-50"></div>
      <Navbar></Navbar>
    </div>
  );
};

export default Gallery;
