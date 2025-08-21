"use client";

import React, { useState } from "react";
// import { SOCIALS } from "@/data/socials";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <footer className="container py-12 text-white/80">
      {/* Main Footer Content */}
      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright & Info */}
          <div className="text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} Reza Dwi Andrianto. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Built with Next.js, React & Tailwind CSS
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white/80 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              ↑ Back to Top
            </button>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#A5C9CA]/20 hover:bg-[#A5C9CA]/30 text-[#A5C9CA] rounded-full border border-[#A5C9CA]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


