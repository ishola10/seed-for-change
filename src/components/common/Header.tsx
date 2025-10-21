"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/doc/Application Form copy_085500.pdf"; 
    link.download = "Application_Form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-[#0A493E] z-50 border-b border-gray-700">
      <div className="max-w-full mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={80}
            height={50}
            className="w-12 md:w-14 h-auto"
          />
        </Link>

        <div>
          <button
            onClick={handleDownload}
            className="text-base font-medium px-6 py-2 transition bg-[#F9A759] text-black hover:bg-[#F9A759]/90"
          >
            Apply
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
