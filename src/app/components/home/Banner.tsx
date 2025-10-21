"use client";

import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Banner: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/doc/Application Form copy_085500.pdf"; 
    link.download = "Application_Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative w-full bg-[#0A493E]  text-white px-6 md:px-16 pt-32 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Federal Ministry Of Women Affairs
            <br /> Under The Social Development Program Presents
            <br />
            <span className="text-[#F3C065]">The Seed For Change</span> -
            Creative Women Residency Program
          </h1>

          <p className="text-base md:text-lg text-[#D0E5DA]">
            In collaboration with Revamp Initiatives
          </p>

          <Button onClick={handleDownload} className="bg-[#F9A759] text-black hover:bg-[#F9A759]/80 px-10 py-2 font-semibold">
            Apply
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-10 md:mt-0"
        >
          <div className="relative w-full h-40 md:h-72 overflow-hidden">
            <Image
              src={images.img1}
              alt="Creative Women 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-40 md:h-72 overflow-hidden">
            <Image
              src={images.img2}
              alt="Creative Women 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-40 md:h-72 overflow-hidden">
            <Image
              src={images.img3}
              alt="Creative Women 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-40 md:h-72 overflow-hidden">
            <Image
              src={images.img4}
              alt="Creative Women 4"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <div className="w-full bg-white flex justify-center items-center gap-10 py-3 px-6 mt-6">
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image
            src={images.partner1}
            alt="Federal Ministry of Women Affairs"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image
            src={images.partner2}
            alt="Revamp Initiatives"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-20 h-12 md:w-24 md:h-16">
          <Image
            src={images.partner3}
            alt="UN Women"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
