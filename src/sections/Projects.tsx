"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import ImageSlideshow from "@/components/ui/ImageSlideshow";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function ProjectCard({ project, index, isVisible }: { project: typeof PROJECTS[0]; index: number; isVisible: boolean }) {
  return (
    <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-project-card' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 200}ms` }}>
      {/* Project Title */}
      <div className="mb-8">
        <h3 className={`text-3xl md:text-4xl font-semibold text-[#E7F6F2] mb-2 transition-all duration-1000 ${isVisible ? 'animate-project-title' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: `${index * 200 + 100}ms` }}>
          {project.subtitle}
        </h3>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Images Section */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'animate-project-image' : 'opacity-0 -translate-x-8 scale-90'}`} style={{ animationDelay: `${index * 200 + 200}ms` }}>
          <ImageSlideshow
            images={project.images}
            projectTitle={project.title}
            type={project.type}
          />
          
          {/* Technology Tags - Below slideshow with dynamic glass effect */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <div
                key={tech}
                className={`group cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-tech-tag' : 'opacity-0 translate-y-8 scale-75'}`}
                style={{ animationDelay: `${index * 200 + 300 + techIndex * 100}ms` }}
              >
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg bg-[#A5C9CA]" />
                  
                  {/* Main tag */}
                  <span
                    className="relative px-5 py-2.5 rounded-full text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:text-white border inline-block"
                    style={{
                      background: `linear-gradient(135deg, rgba(165,201,202,0.15), rgba(165,201,202,0.05))`,
                      borderColor: `rgba(165,201,202,0.4)`,
                      boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
                    }}
                  >
                    {tech}
                  </span>

                  {/* Inner glow effect */}
                  <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[#A5C9CA]" />
                </div>
              </div>
            ))}
          </div>
          {project.technologies.length > 3 && (
            <div className="flex flex-wrap justify-center gap-3 mt-3">
              {project.technologies.slice(3).map((tech, techIndex) => (
                <div
                  key={tech}
                  className={`group cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-tech-tag' : 'opacity-0 translate-y-8 scale-75'}`}
                  style={{ animationDelay: `${index * 200 + 400 + techIndex * 100}ms` }}
                >
                  <div className="relative">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg bg-[#A5C9CA]" />
                    
                    {/* Main tag */}
                    <span
                      className="relative px-5 py-2.5 rounded-full text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:text-white border inline-block"
                      style={{
                        background: `linear-gradient(135deg, rgba(165,201,202,0.15), rgba(165,201,202,0.05))`,
                        borderColor: `rgba(165,201,202,0.4)`,
                        boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
                      }}
                    >
                      {tech}
                    </span>

                    {/* Inner glow effect */}
                    <div className="absolute inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[#A5C9CA]" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description Section */}
        <div className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'animate-project-description' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: `${index * 200 + 300}ms` }}>
          <div className="relative">
            {/* Decorative line */}
            <div className={`w-16 h-0.5 bg-[#A5C9CA] mb-6 transition-all duration-1000 ${isVisible ? 'animate-decorative-line' : 'opacity-0 w-0'}`} style={{ animationDelay: `${index * 200 + 400}ms` }}></div>
            
            <p className="text-[#E7F6F2] text-lg md:text-xl leading-relaxed">
              {project.description}
            </p>
            {/* Links */}
            {(project.demoUrl || project.repoUrl) && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 border border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <span>Live Demo</span>
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 border border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors"
                    aria-label={`Open GitHub repository of ${project.title}`}
                  >
                    <span>GitHub Repo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section ref={ref} id="projects" className="container centered py-20">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-semibold text-[#A5C9CA] mb-4 relative z-10 transition-all duration-1000 ${isIntersecting ? 'animate-section-title' : 'opacity-0 -translate-y-8 scale-90'}`}>
            Project Work <span className="text-3xl sm:text-4xl md:text-5xl">°</span>
          </h2>

          {/* Title background effects */}
          <div className={`absolute -inset-4 bg-gradient-to-r from-[#A5C9CA]/10 via-[#A5C9CA]/20 to-[#A5C9CA]/10 blur-xl rounded-full opacity-60 transition-all duration-1000 ${isIntersecting ? 'animate-title-glow' : 'opacity-0'}`}></div>

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

      {/* Projects Grid */}
      <div className="space-y-20 md:space-y-28">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} isVisible={isIntersecting} />
        ))}
      </div>
    </section>
  );
}
