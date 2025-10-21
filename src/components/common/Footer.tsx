"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto px-6 md:px-16 py-12 border-b border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <Image
              src="/icons/logo.png"
              alt="Revamp Initiatives Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed w-60">
            We are dedicated to empowering Nigerian women with relevant skills,
            empowerment, and opportunities to ensure that Nigerian women thrive and positively impact the nations economy through creativity and social development.
          </p>

          <div className="flex items-center space-x-3 pt-2">
            <span className="h-4 w-4 rounded-full bg-white inline-block"></span>
            <span className="h-4 w-4 rounded-full bg-[#F4A732] inline-block"></span>
            <span className="h-4 w-4 rounded-full bg-white inline-block"></span>
            <span className="h-4 w-4 rounded-full bg-white inline-block"></span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h4 className="text-base font-medium text-gray-200">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                About us
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <h4 className="text-base font-medium text-gray-200">Help</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Customer Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="py-4 border-t border-gray-800 text-center text-xs text-gray-400">
        © Copyright 2025. All Rights Reserved by Revamp Initiative
      </div>
    </footer>
  );
};

export default Footer;
