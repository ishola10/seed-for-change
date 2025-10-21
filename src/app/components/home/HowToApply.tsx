"use client";

import { motion } from "framer-motion";
// let's import email icon from lucide-react
import { FileText, Upload, Mail  } from "lucide-react";
import Image from "next/image";

export default function HowToApply() {
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
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#071739] mb-12"
        >
          How To Apply
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#003B3B]/10 p-4 rounded-full mb-4">
              <FileText size={40} className="text-[#003B3B]" />
            </div>
            <p className="text-gray-700 text-sm md:text-base max-w-xs">
              Complete the online application form
            </p>
          </motion.div>

         

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#003B3B]/10 p-4 rounded-full mb-4">
              <Upload size={40} className="text-[#003B3B]" />
            </div>
            <p className="text-gray-700 text-sm md:text-base max-w-xs">
              Upload any relevant document or portfolio (Important)
            </p>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#003B3B]/10 p-4 rounded-full mb-4">
              <Mail size={40} className="text-[#003B3B]" />
            </div>
            <p className="text-gray-700 text-sm md:text-base max-w-xs">
              Submit form to &quot;info@revampinitiatives.org&quot; and await response
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-[#071739] font-medium text-base md:text-lg"
        >
          Application Deadline: <span className="font-semibold">27th November 2025</span>
        </motion.p>
      </div>

      <div className="relative w-full">
        <Image
          src="/images/apply-bg.jpg"
          alt="Graduates"
          width={1600}
          height={800}
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-[#0A362600]/70 flex flex-col items-center justify-center text-center px-6">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-2xl md:text-4xl font-bold mb-2"
          >
            Apply for the Next Cohort
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white/90 text-sm md:text-base max-w-xl mb-6"
          >
            Are you a young Nigerian woman ready to take your creative talent to the
            next level? Apply for the next Seed for Change Residency and join a growing
            network of empowered creators.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            onClick={handleDownload}
            className="bg-[#E28C45] hover:bg-[#c67533] text-white font-medium px-6 py-2 rounded-md transition-all"
          >
            Apply
          </motion.button>
        </div>
      </div>
    </section>
  );
}
