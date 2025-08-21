"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Icons for each section
const WorkIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const EducationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const CertificationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

function Card({ 
  title, 
  icon: Icon, 
  children, 
  isVisible, 
  gradient = "from-blue-500/20 to-cyan-500/20"
}: { 
  title: string; 
  icon: React.ComponentType; 
  children: React.ReactNode; 
  isVisible: boolean;
  gradient?: string;
}) {
  return (
    <div className={`glass no-shadow rounded-3xl md:rounded-[48px] transition-all duration-700 will-change-transform relative overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6 sm:translate-y-8 scale-[0.98] sm:scale-95'}`}>
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 transition-opacity duration-500`} />
      
      {/* Header with icon and title */}
      <div className="relative z-10 flex items-center justify-center gap-3 p-6 md:p-8">
        <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
          <Icon />
        </div>
        <h3 className="text-white/90 text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>
      
      {/* Content - Always visible */}
      <div className="relative z-10 px-6 md:px-8 pb-6 md:pb-8">
        {children}
      </div>
    </div>
  );
}

function ExperienceItem({ 
  role, 
  company, 
  period, 
  description, 
  isVisible, 
  delay 
}: { 
  role: string; 
  company: string; 
  period: string; 
  description: string;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div 
      className={`group transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02] mb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="font-semibold text-white/90 text-lg mb-1">{role}</h4>
            <p className="text-[#A5C9CA] font-medium">{company}</p>
          </div>
          <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {period}
          </span>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CertificationItem({ 
  title, 
  issuer, 
  year, 
  link, 
  isVisible, 
  delay 
}: { 
  title: string; 
  issuer: string; 
  year: string; 
  link?: string;
  isVisible: boolean;
  delay: number;
}) {
  const content = (
    <div className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-[1.02] mb-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-white/90 text-lg mb-1">{title}</h4>
          <p className="text-[#A5C9CA] font-medium">{issuer}</p>
        </div>
        <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full border border-white/20">
          {year}
        </span>
      </div>
      {link && (
        <div className="flex items-center gap-2 text-[#A5C9CA] text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>View Certificate</span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div 
          className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
          style={{ animationDelay: `${delay}ms` }}
        >
          {content}
        </div>
      </a>
    );
  }

  return (
    <div 
      className={`group transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {content}
    </div>
  );
}

export default function Highlights() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section ref={ref} className="container centered mt-14 md:mt-20">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card 
          title="Work Experience" 
          icon={WorkIcon} 
          isVisible={isIntersecting} 
          gradient="from-emerald-500/20 to-teal-500/20"
        >
          <div className="space-y-2">
            <ExperienceItem
              role="Data Management"
              company="Telkom Akses"
              period="May 2025 - Present"
              description="Managing and analyzing data infrastructure, optimizing database performance, and implementing data-driven solutions for business growth."
              isVisible={isIntersecting}
              delay={200}
            />
            <ExperienceItem
              role="Frontend Intern"
              company="Gikslab Indonesia"
              period="Jul 2023 - Sep 2023"
              description="Developed responsive web applications using React.js, collaborated with design team, and implemented modern UI/UX practices."
              isVisible={isIntersecting}
              delay={400}
            />
          </div>
        </Card>

        <Card 
          title="Education" 
          icon={EducationIcon} 
          isVisible={isIntersecting} 
          gradient="from-purple-500/20 to-pink-500/20"
        >
          <div className="text-center">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h4 className="font-semibold text-white/90 text-xl mb-3">Telkom University</h4>
              <p className="text-[#A5C9CA] font-medium mb-2">Bandung, Indonesia</p>
              <div className="space-y-2 text-white/70">
                <p className="text-lg">Bachelor of Informatics</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm">GPA: <span className="text-[#A5C9CA] font-semibold">3.54/4.00</span></span>
                  <span className="text-sm">2020 - 2024</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card 
          title="Certifications" 
          icon={CertificationIcon} 
          isVisible={isIntersecting} 
          gradient="from-orange-500/20 to-red-500/20"
        >
          <div className="space-y-2">
            <CertificationItem
              title="React dan Back-End"
              issuer="Dicoding Indonesia"
              year="2025"
              link="https://drive.google.com/file/d/1ETPSaHbOXVk4gmojidxnb5Ny80UKtJST/view?usp=sharing"
              isVisible={isIntersecting}
              delay={200}
            />
            <CertificationItem
              title="Frontend Developer Intern"
              issuer="Gikslab Indonesia"
              year="2023"
              link="https://drive.google.com/file/d/1bFmWGTYOFwc8_gVv82DxE9HYswAEWbkF/view?usp=sharing"
              isVisible={isIntersecting}
              delay={400}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

