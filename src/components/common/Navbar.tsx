"use client";

import Link from "next/link";
import React, { useState } from "react";

export type NavLink = {
  href: string;
  label: string;
};

export function Navbar({ brand, links }: { brand: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="container pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full border border-white/50" />
          <a href="#about" className="text-xl tracking-wide">
            {brand}
          </a>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                l.label.toLowerCase() === "about"
                  ? "font-semibold border-b-2 border-white/60 pb-1"
                  : "hover:text-white/70"
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block w-5 h-5">
            <span
              className={`absolute left-0 right-0 top-1 h-0.5 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-2.5 h-0.5 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-4 h-0.5 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div className="divider mt-3" />

      {/* Mobile menu dropdown */}
      {open && (
        <nav className="md:hidden mt-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-xl hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;


