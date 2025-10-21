"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PastResidentsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0A493E] text-white py-16 px-6 md:px-16 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center"
      >
        <div className="relative w-full md:w-3/4 aspect-video bg-black rounded-lg overflow-hidden shadow-lg -mt-64">
          <video
            controls
            className="w-full h-full object-cover"
          >
            <source src="/videos/seed for change.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-4xl md:text-7xl font-extrabold tracking-wide mb-8 bg-gradient-to-b from-white to-[#0A493E] bg-clip-text text-transparent"
      >
        MEET OUR PAST RESIDENTS
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
        <motion.ul
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left text-4xl font-semibold space-y-3 md:w-1/3"
        >
          <li className="text-[#F3C065]">Videography & Photography</li>
          <li>Culinary Art</li>
          <li>Painting & Sculpting</li>
          <li>Fashion Design</li>
          <li>Graphics Design & Digital Art</li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col md:flex-row gap-6 items-center md:items-start"
        >
          <div className="relative w-[250px] h-[320px] rounded-lg overflow-hidden shadow-md border-2 border-white">
            <Image
              src="/images/resident.jpg"
              alt="Resident group"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-[250px] h-[320px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/students/victory-ken-nwafor-amarachi.jpg"
              alt="Victory Ken-Nwafor Amarachi"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded">
              <p className="font-medium">Victory Ken-Nwafor Amarachi</p>
              <p className="text-gray-300">Photography</p>
            </div>
          </div>

          <div className="relative w-[250px] h-[320px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/students/adeyemo-jesutofunmi-janet.jpg"
              alt="Adeyemo Jesutomi"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded">
              <p className="font-medium">Adeyemo Jesutomi</p>
              <p className="text-gray-300">Photography</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
          <ChevronLeft className="text-white" size={20} />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#F3C065] hover:bg-[#d8a855] flex items-center justify-center transition">
          <ChevronRight className="text-[#0B0D26]" size={20} />
        </button>
      </div>
    </section>
  );
};

export default PastResidentsSection;
