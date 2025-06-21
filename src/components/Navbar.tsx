"use client"

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isDarkSection, setIsDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsDarkSection(window.scrollY < 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-sm transition-colors duration-300 ${
        isDarkSection ? "text-white bg-black/10" : "text-black bg-white/10"
      }`}
    >
      <div className="text-2xl font-bold tracking-wide">GiRi</div>
      <div className="space-x-6">
        <a
          href="#features"
          className="hover:underline hover:underline-offset-4 transition"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="hover:underline hover:underline-offset-4 transition"
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="hover:underline hover:underline-offset-4 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
