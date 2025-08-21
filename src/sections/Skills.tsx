"use client";

import React from "react";
import { SKILLS } from "@/data/skills";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section ref={ref} id="skills" className="container centered py-20">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-semibold text-[#A5C9CA] mb-4 relative z-10 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 -translate-y-8 scale-90'}`}>
            Skills°
          </h2>
          
          {/* Title background effects */}
          <div className={`absolute -inset-4 bg-gradient-to-r from-[#A5C9CA]/10 via-[#A5C9CA]/20 to-[#A5C9CA]/10 blur-xl rounded-full opacity-60 transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'}`}></div>
          
          {/* Animated dots */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#A5C9CA] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#A5C9CA]/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#A5C9CA]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile & iPad Grid Layout */}
      <div className={`block lg:hidden transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-3 gap-6 max-w-sm md:max-w-md mx-auto">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`group cursor-pointer text-center transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8 scale-90'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {/* Skill circle */}
                <div 
                  className="w-18 h-18 md:w-20 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur hover:border-white/50 hover:bg-white/20 transition-all duration-300 group-hover:scale-110 mx-auto"
                  style={{ borderColor: `${skill.color}40` }}
                >
                  <skill.icon 
                    className="w-9 h-9 md:w-10 md:h-10"
                    style={{ color: skill.color }}
                  />
                </div>
                
                {/* Label */}
                <div className="mt-2">
                  <span className="text-white/80 text-xs md:text-sm font-medium">
                    {skill.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop V V Layout */}
      <div className={`hidden lg:block relative w-full max-w-full mx-auto h-[600px] px-4 md:px-8 lg:px-12 xl:px-16 overflow-hidden skills-container transition-all duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        {SKILLS.map((skill, index) => (
          <div
            key={skill.name}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-1000 ${isIntersecting ? 'animate-pulse' : 'opacity-0 scale-75'}`}
            style={{
              top: skill.position.top,
              left: skill.position.left,
              animationDelay: `${index * 100}ms`,
              animationDuration: '2s',
              animationIterationCount: '1'
            }}
          >
            <div className="relative">
              {/* Skill circle with enhanced effects */}
              <div className="relative">
                {/* Animated background glow */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Main circle */}
                <div 
                  className="relative w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full border-2 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg hover:shadow-2xl"
                  style={{ 
                    borderColor: `${skill.color}60`,
                    background: `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
                  }}
                >
                  {/* Inner glow effect */}
                  <div 
                    className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  <skill.icon 
                    className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div
                    className="absolute top-0 left-1/2 w-1 h-1 rounded-full animate-ping"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div
                    className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full animate-pulse"
                    style={{ backgroundColor: skill.color }}
                  />
                  <div
                    className="absolute top-1/4 right-0 w-0.5 h-0.5 rounded-full animate-bounce"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>

              {/* Skill label */}
              <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative text-white/80 group-hover:text-white text-sm lg:text-base font-medium whitespace-nowrap transition-colors duration-300 px-2 py-1">
                    {skill.label}
                  </span>
                  
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
