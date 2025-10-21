"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { images } from "@/assets/images";

export default function WhoCanApply() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/doc/Application Form copy_085500.pdf"; 
    link.download = "Application_Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Who Can Apply?
          </h2>
          <p className="text-black text-sm md:text-base mb-6 leading-relaxed">
            In line with the hub’s vision to push the boundaries of knowledge and what’s
            possible by offering research-based solutions to Africa’s supply chain
            challenges, we are offering scholarships to University students in the
            following institutions.
          </p>

          <ul className="list-disc list-inside text-black text-sm md:text-base space-y-2 mb-8">
            <li>Women aged 18–35 years</li>
            <li>Nigerian citizens from all 774 Local Government Areas</li>
            <li>Open to both graduates and non-graduates</li>
            <li>
              Must have a strong passion for creativity and community service
            </li>
            <li>
              Must have started a form of creativity (fashion design,
              photography, videography, or graphic design)
            </li>
            <li>Must be available to live outside your home</li>
          </ul>

          <button onClick={handleDownload} className="bg-[#F9A759] hover:bg-[#F9A759]/80 text-black font-medium px-10 py-2 rounded-md transition-all">
            Apply
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-[500px] md:h-[720px] lg:h-[740px] overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={images.graduateGroup}
            alt="Graduates group"
            width={800}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      <div className="bg-[#0A493E] py-16">
        <div className="mx-auto px-6 md:px-16">
          <p className="text-[#A3B5B5] uppercase tracking-wide text-base mb-2">
            What We Offered
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 max-w-2xl">
            Everything You Need To Focus On Your Creative Growth
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="-translate-y-6 md:-translate-y-14"
            >
              <Image
                src={images.mandate3}
                alt="Certificate and accommodation"
                width={300}
                height={200}
                className="object-cover w-full h-56 border-white border-2 "
              />
              <div className="py-4 text-lg text-white">
                Certificate of Participation and fully sponsored accommodation,
                meals, and creative supplies.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="translate-y-6 md:translate-y-14 ">
                <Image
                src={images.offer2}
                alt="Networking opportunities"
                width={300}
                height={200}
                className="object-cover w-full h-56 border-white border-2"
              />
              <div className="py-4 text-lg text-white">
                Networking opportunities with fellow creatives and change
                makers.
              </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="-translate-y-6 md:-translate-y-14"
            >
              <Image
                src="/images/resident.jpg"
                alt="Mentorship access"
                width={300}
                height={200}
                className="object-cover w-full h-56 border-white border-2"
              />
              <div className="py-4 text-lg text-white">
                Access to Revamp’s Creative Social Impact Network and mentorship
                from seasoned professionals.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="translate-y-6 md:translate-y-14 ">
                <Image
                src={images.graduateGroup}
                alt="Start-up equipment"
                width={300}
                height={200}
                className="object-cover w-full h-56 border-white border-2"
              />
              <div className="py-4 text-lg text-white">
                Start-up equipment based on creative interest including cameras,
                tailoring machines, laptops, etc.
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
