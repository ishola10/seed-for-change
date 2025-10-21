"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/assets/images";

const ProgramSection: React.FC = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-16 space-y-48">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div className="relative grid grid-cols-2 gap-6">
          <div className="relative w-full h-56 md:h-80 lg:h-96 overflow-hidden -translate-y-6 md:-translate-y-14">
            <Image
              src={images.about1}
              alt="Creative Women Residency Program - Painting"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative w-full h-56 md:h-80 lg:h-96 overflow-hidden translate-y-6 md:translate-y-14 ">
            <Image
              src={images.about2}
              alt="Creative Women Residency Program - Keynote Session"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            About The Program
          </h2>
          <p className="text-base md:text-lg text-black leading-relaxed">
            The Seed for Change Creative Women Residency Program is a creative
            empowerment initiative aimed at building the capacity of young
            Nigerian women to create positive social impact in the fields of
            painting & sculpting, creative fashion design (tie & dye, knitting,
            etc.), photography, videography, culinary art, and graphic design.
            Through this program, selected participants undergo a 2-week
            intensive residency followed by a 4-week mentorship period to turn
            their skills into tools for social change and economic empowerment.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pb-56"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-snug">
            Mandate Of The Ministry Of Women Affairs{" "}
            <span className="block">(Social Development Program)</span>
          </h2>

          <p className="text-base md:text-xl text-black mb-4 leading-relaxed">
            The Federal Ministry of Women Affairs, through its Social
            Development Program, is committed to:
          </p>

          <ul className="list-disc list-outside pl-5 text-base md:text-xl text-black space-y-2 leading-relaxed">
            <li>
              Empowering women and girls across Nigeria through skill-building
              and access to opportunities.
            </li>
            <li>
              Supporting initiatives that promote gender equality, women’s
              entrepreneurship, and youth inclusion.
            </li>
            <li>
              Partnering with civil society and community organizations to
              implement sustainable, people-centered development programs.
            </li>
            <li>
              Enhancing the social and economic well-being of Nigerian women as
              a pathway to national development.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-56 md:h-80 lg:h-96 overflow-hidden translate-y-6 md:translate-y-14 ">
            <Image
              src={images.mandate1}
              alt="Women Affairs Event"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-56 md:h-80 lg:h-96 overflow-hidden -translate-y-6 md:-translate-y-14">
            <Image
              src={images.mandate2}
              alt="Minister Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramSection;
