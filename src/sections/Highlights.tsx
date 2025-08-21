"use client";

import React from "react";
import HorizontalSlider from "@/components/ui/HorizontalSlider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function Card({ title, children, isVisible }: { title: string; children: React.ReactNode; isVisible: boolean }) {
  return (
    <div className={`inline-flex flex-col justify-start w-full sm:w-[420px] md:w-[520px] max-w-[92vw] min-h-[240px] glass no-shadow rounded-3xl md:rounded-[48px] px-5 py-5 md:px-8 md:py-8 transition-all duration-1000 will-change-transform ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-6 sm:translate-y-8 scale-[0.98] sm:scale-95'}`}>
      <div className="text-white/90 text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-center tracking-tight title-glow animate-title-glow">{title}</div>
      {children}
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
      <HorizontalSlider className="" itemGapClass="gap-5 md:gap-8" controls>
        <Card title="Work Experiences" isVisible={isIntersecting}>
          <div className="flex h-full flex-col justify-center">
            {/* Top timeline: two circles connected */}
            <div className="relative h-10 md:h-14 mb-2 hidden sm:block">
              <div className="absolute left-[calc(18%+24px)] right-[calc(18%+24px)] top-1/2 -translate-y-1/2 h-[3px] rounded-full bg-white/45" />
              <div className="absolute left-[18%] top-1/2 -translate-y-1/2 -translate-x-1/2 size-8 md:size-10 rounded-full border-4 border-white/60 bg-transparent" />
              <div className="absolute right-[18%] top-1/2 -translate-y-1/2 translate-x-1/2 size-8 md:size-10 rounded-full border-4 border-white/60 bg-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 md:gap-8 text-center">
              <a
                href="#"
                aria-label="Lihat detail pengalaman Data Management di Telkom Akses"
                className="block w-full rounded-2xl px-3 py-3 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors pointer-events-auto"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="font-medium">Data Management</div>
                  <div className="font-medium">Telkom Akses</div>
                  <div className="text-xs sm:text-sm text-white/70">( May 2025 - Present )</div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Lihat detail pengalaman Frontend Intern di Gikslab Indonesia"
                className="block w-full rounded-2xl px-3 py-3 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors pointer-events-auto"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="font-medium">Frontend Intern</div>
                  <div className="font-medium">Gikslab Indonesia</div>
                  <div className="text-xs sm:text-sm text-white/70">( Jul 2023 - Sep 2023 )</div>
                </div>
              </a>
            </div>
          </div>
        </Card>

        <Card title="Education" isVisible={isIntersecting}>
          <div className="flex h-full flex-col items-center justify-center text-center space-y-1">
            <div className="relative h-10 md:h-14 mb-2 w-full hidden sm:block">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-8 md:size-10 rounded-full border-4 border-white/60 bg-transparent" />
            </div>
            <div className="text-center space-y-1">
              <div className="font-medium">Telkom University - Bandung, Indonesia</div>
              <div className="text-xs sm:text-sm text-white/70">Bachelor Informatics, 3.54/4.00</div>
              <div className="text-xs sm:text-sm text-white/70">2020 - 2024</div>
            </div>
            
          </div>
        </Card>

        <Card title="Certifications" isVisible={isIntersecting}>
          <div className="flex h-full flex-col justify-center">
            {/* Top timeline: two circles connected */}
            <div className="relative h-10 md:h-14 mb-2 hidden sm:block">
              <div className="absolute left-[calc(18%+24px)] right-[calc(18%+24px)] top-1/2 -translate-y-1/2 h-[3px] rounded-full bg-white/45" />
              <div className="absolute left-[18%] top-1/2 -translate-y-1/2 -translate-x-1/2 size-8 md:size-10 rounded-full border-4 border-white/60 bg-transparent" />
              <div className="absolute right-[18%] top-1/2 -translate-y-1/2 translate-x-1/2 size-8 md:size-10 rounded-full border-4 border-white/60 bg-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 md:gap-8 text-center">
              <a
                href="https://drive.google.com/file/d/1ETPSaHbOXVk4gmojidxnb5Ny80UKtJST/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka sertifikat Dicoding: React dan Back-End"
                className="block w-full rounded-2xl px-3 py-3 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors pointer-events-auto"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="font-medium">React dan Back-End Dicoding Certificate</div>
                  <div className="text-xs sm:text-sm text-white/70">Dicoding Indonesia 2025</div>
                </div>
              </a>
              <a
                href="#"
                aria-label="Buka sertifikat kedua"
                className="block w-full rounded-2xl px-3 py-3 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition-colors pointer-events-auto"
                onPointerDown={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="font-medium">Frontend Developer Intern</div>
                  <div className="text-xs sm:text-sm text-white/70">( Jul 2023 - Sep 2023 )</div>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </HorizontalSlider>
    </section>
  );
}

