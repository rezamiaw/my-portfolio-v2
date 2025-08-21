"use client";

import React from "react";
import { CONTACT_INFO } from "@/data/contact";
import ContactForm from "@/components/forms/ContactForm";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function ContactInfoCard({ info, index, isVisible }: { info: typeof CONTACT_INFO[0]; index: number; isVisible: boolean }) {
  const content = (
    <div className={`group cursor-pointer transition-all duration-1000 ${isVisible ? 'animate-contact-card' : 'opacity-0 translate-y-8 scale-90'}`} style={{ animationDelay: `${index * 150}ms` }}>
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg bg-[#A5C9CA]" />
        
        {/* Main card */}
        <div
          className="relative p-6 rounded-xl backdrop-blur-md transition-all duration-500 group-hover:scale-105 border"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
            borderColor: `rgba(255,255,255,0.2)`,
            boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
          }}
        >
          {/* Icon */}
          <div className={`text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 transition-all duration-1000 ${isVisible ? 'animate-contact-icon' : 'opacity-0 scale-50 -rotate-180'}`} style={{ animationDelay: `${index * 150 + 100}ms` }}>
            {info.icon}
          </div>
          
          {/* Title */}
          <h3 className={`text-lg font-semibold text-white/90 mb-2 transition-all duration-1000 ${isVisible ? 'animate-contact-title' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: `${index * 150 + 200}ms` }}>
            {info.title}
          </h3>
          
          {/* Value */}
          <p className={`text-white/70 group-hover:text-white/90 transition-colors duration-300 transition-all duration-1000 ${isVisible ? 'animate-contact-value' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: `${index * 150 + 300}ms` }}>
            {info.value}
          </p>

          {/* Inner glow effect */}
          <div className="absolute inset-1 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[#A5C9CA]" />
        </div>
      </div>
    </div>
  );

  if (info.href) {
    return (
      <a 
        href={info.href}
        target={info.href.startsWith('http') ? '_blank' : undefined}
        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section ref={ref} id="contact" className="container centered py-20">
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-semibold text-[#A5C9CA] mb-4 relative z-10 transition-all duration-1000 ${isIntersecting ? 'animate-contact-section-title' : 'opacity-0 -translate-y-8 scale-90'}`}>
            Contact Me <span className="text-3xl sm:text-4xl md:text-5xl">°</span>
          </h2>

          {/* Title background effects */}
          <div className={`absolute -inset-4 bg-gradient-to-r from-[#A5C9CA]/10 via-[#A5C9CA]/20 to-[#A5C9CA]/10 blur-xl rounded-full opacity-60 transition-all duration-1000 ${isIntersecting ? 'animate-contact-title-glow' : 'opacity-0'}`}></div>

          {/* Animated dots */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#A5C9CA] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#A5C9CA]/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#A5C9CA]/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>

        <p className={`text-[#E7F6F2] text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${isIntersecting ? 'animate-contact-subtitle' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
          Ready to bring your ideas to life? Let&#39;s discuss your project and create something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Information */}
        <div className={`transition-all duration-1000 ${isIntersecting ? 'animate-contact-info' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '500ms' }}>
          <div className="mb-8">
            <h3 className={`text-2xl md:text-3xl font-semibold text-[#E7F6F2] mb-4 transition-all duration-1000 ${isIntersecting ? 'animate-contact-subsection-title' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '600ms' }}>
              Let&#39;s Connect
            </h3>
            <p className={`text-white/80 leading-relaxed transition-all duration-1000 ${isIntersecting ? 'animate-contact-description' : 'opacity-0 -translate-x-8'}`} style={{ animationDelay: '700ms' }}>
              I&#39;m always interested in new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just want to say hello, 
              I&#39;d love to hear from you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTACT_INFO.map((info, index) => (
              <ContactInfoCard key={info.title} info={info} index={index} isVisible={isIntersecting} />
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-8 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${isIntersecting ? 'animate-contact-additional' : 'opacity-0 translate-y-8 scale-95'}`} style={{ animationDelay: '1000ms' }}>
            <h4 className="text-lg font-semibold text-white/90 mb-3">
              💡 Quick Response
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              I typically respond to messages within 24 hours. For urgent matters, 
              feel free to reach out via phone or LinkedIn for faster communication.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`transition-all duration-1000 ${isIntersecting ? 'animate-contact-form' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '600ms' }}>
          <div className="relative">
            {/* Form background with glassmorphism */}
            <div
              className="p-8 rounded-2xl backdrop-blur-md border"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                borderColor: `rgba(255,255,255,0.2)`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`
              }}
            >
              <div className="mb-6">
                <h3 className={`text-2xl md:text-3xl font-semibold text-[#E7F6F2] mb-2 transition-all duration-1000 ${isIntersecting ? 'animate-form-title' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '700ms' }}>
                  Send a Message
                </h3>
                <p className={`text-white/70 transition-all duration-1000 ${isIntersecting ? 'animate-form-subtitle' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '800ms' }}>
                  Fill out the form below and I&#39;ll get back to you as soon as possible.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Decorative elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-[#A5C9CA]/10 rounded-full blur-xl transition-all duration-1000 ${isIntersecting ? 'animate-contact-decorative-1' : 'opacity-0 scale-0 rotate-180'}`} style={{ animationDelay: '900ms' }}></div>
            <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-[#A5C9CA]/5 rounded-full blur-xl transition-all duration-1000 ${isIntersecting ? 'animate-contact-decorative-2' : 'opacity-0 scale-0 -rotate-180'}`} style={{ animationDelay: '1000ms' }}></div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
