"use client";

import React, { useState } from "react";
import Image from "next/image";

type ImageSlideshowProps = {
  images: string[];
  projectTitle: string;
  type: 'mobile' | 'web';
};

export default function ImageSlideshow({ images, projectTitle }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main image container - unified layout for all project types */}
      <div className="relative aspect-[16/9] bg-white/10 rounded-2xl p-2 backdrop-blur-sm border border-white/10 overflow-hidden">
      <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${projectTitle} screenshot ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500"
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Navigation Arrows - Responsive positioning to prevent cutoff */}
      {images.length > 1 && (
        <>
          {/* Previous Button - Responsive left positioning */}
          <button
            onClick={goToPrevious}
            className="group absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 text-white/70 hover:text-white/90 z-10 hover:scale-105 -left-2 md:-left-6"
            style={{
              background: `linear-gradient(135deg, rgba(165,201,202,0.12), rgba(165,201,202,0.03))`,
              borderColor: `rgba(165,201,202,0.25)`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)`,
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg bg-[#A5C9CA]" />
            
            <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>

            {/* Inner glow effect */}
            <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-[#A5C9CA]" />
          </button>

          {/* Next Button - Responsive right positioning */}
          <button
            onClick={goToNext}
            className="group absolute top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 text-white/70 hover:text-white/90 z-10 hover:scale-105 -right-2 md:-right-6"
            style={{
              background: `linear-gradient(135deg, rgba(165,201,202,0.12), rgba(165,201,202,0.03))`,
              borderColor: `rgba(165,201,202,0.25)`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)`,
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg bg-[#A5C9CA]" />
            
            <svg className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>

            {/* Inner glow effect */}
            <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-[#A5C9CA]" />
          </button>
        </>
      )}

      {/* Bottom controls */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#A5C9CA] scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Image counter */}
          <span className="text-sm text-white/60 ml-2">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
