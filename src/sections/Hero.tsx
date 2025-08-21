"use client";

import Image from "next/image";
import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <main ref={ref} id="about" className="container centered pt-10 grid md:grid-cols-2 gap-10 items-center">
      <section>
        {/* Animated Title with Staggered Text Effect */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide text-[#A5C9CA]">
          <span 
            className={`inline-block transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} 
            style={{ animationDelay: '0ms', animationDuration: '1s' }}
          >
            Hai I&#39;m
          </span>
          <br />
          <span 
            className={`inline-block transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} 
            style={{ animationDelay: '200ms', animationDuration: '1s' }}
          >
            Reza Dwi
          </span>
          <br />
          <span 
            className={`inline-block transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} 
            style={{ animationDelay: '400ms', animationDuration: '1s' }}
          >
            Andrianto
          </span>
        </h1>
        
        {/* Animated Description with Fade In */}
        <p 
          className={`mt-6 text-[#E7F6F2] leading-8 md:leading-9 max-w-2xl text-lg sm:text-xl transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`} 
          style={{ animationDelay: '600ms', animationDuration: '1.2s' }}
        >
          Highly motivated <b className={`transition-all duration-1000 ${isIntersecting ? 'animate-highlight' : ''}`}>full‑stack developer</b> with a focus on
          <b className={`transition-all duration-1000 ${isIntersecting ? 'animate-highlight' : ''}`}> front‑end technologies (ReactJS, NextJS)</b> and current
          experience as a Data Analyst at PT. Telkom Akses. Skilled in server
          optimization, database management, and web application development
          using SQL, Tableau, and modern JavaScript frameworks. Certified in
          <b className={`transition-all duration-1000 ${isIntersecting ? 'animate-highlight' : ''}`}> Frontend React</b>, eager to contribute as a <b className={`transition-all duration-1000 ${isIntersecting ? 'animate-highlight' : ''}`}>Full Stack Developer</b>.
        </p>
      </section>
      
      <section className="justify-self-center">
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] ratio-square">
          {/* Animated Profile Image */}
          <Image
            src="/profile.png"
            alt="profile"
            fill
            className={`rounded-full object-cover ring-2 ring-white/20 bg-black/20 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-scale' : 'opacity-0 scale-90'}`}
            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
            priority
          />
          
          {/* Animated Decorative Circles */}
          <div 
            className={`absolute left-10 top-7 w-10 h-10 rounded-full border-2 border-white/50 transition-all duration-1000 ${isIntersecting ? 'animate-float' : 'opacity-0'}`} 
            style={{ animationDelay: '800ms' }} 
          />
          <div 
            className={`absolute right-0 bottom-12 w-12 h-12 rounded-full border-8 border-white/40 transition-all duration-1000 ${isIntersecting ? 'animate-float' : 'opacity-0'}`} 
            style={{ animationDelay: '1000ms' }} 
          />
          <div 
            className={`absolute right-12 bottom-10 w-4 h-4 rounded-full border-8 border-white/40 transition-all duration-1000 ${isIntersecting ? 'animate-float' : 'opacity-0'}`} 
            style={{ animationDelay: '1200ms' }} 
          />
        </div>
      </section>
    </main>
  );
}


