"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { CONTACT_FORM_FIELDS } from "@/data/contact";
import { EMAIL_CONFIG, EMAIL_TEMPLATE_PARAMS } from "@/config/emailjs";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Check if EmailJS is configured
    if (EMAIL_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY_HERE" || 
        EMAIL_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID_HERE" || 
        EMAIL_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID_HERE") {
      setSubmitError("EmailJS is not configured yet. Please check the setup instructions.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: EMAIL_TEMPLATE_PARAMS.to_name,
        to_email: EMAIL_TEMPLATE_PARAMS.to_email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitError(
        error instanceof Error 
          ? `Failed to send message: ${error.message}` 
          : "Failed to send message. Please try again or contact directly via email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#A5C9CA] mb-2">Message Sent!</h3>
        <p className="text-white/80 mb-4">
          Thank you for reaching out. I&#39;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-[#A5C9CA] hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
          {CONTACT_FORM_FIELDS.name.label}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder={CONTACT_FORM_FIELDS.name.placeholder}
          className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A5C9CA]/50 ${
            errors.name 
              ? "border-red-400 focus:border-red-400" 
              : "border-white/20 focus:border-[#A5C9CA]/50"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
          {CONTACT_FORM_FIELDS.email.label}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder={CONTACT_FORM_FIELDS.email.placeholder}
          className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A5C9CA]/50 ${
            errors.email 
              ? "border-red-400 focus:border-red-400" 
              : "border-white/20 focus:border-[#A5C9CA]/50"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
          {CONTACT_FORM_FIELDS.subject.label}
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          placeholder={CONTACT_FORM_FIELDS.subject.placeholder}
          className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A5C9CA]/50 ${
            errors.subject 
              ? "border-red-400 focus:border-red-400" 
              : "border-white/20 focus:border-[#A5C9CA]/50"
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
          {CONTACT_FORM_FIELDS.message.label}
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder={CONTACT_FORM_FIELDS.message.placeholder}
          className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#A5C9CA]/50 resize-none ${
            errors.message 
              ? "border-red-400 focus:border-red-400" 
              : "border-white/20 focus:border-[#A5C9CA]/50"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
        style={{
          background: `linear-gradient(135deg, rgba(165,201,202,0.2), rgba(165,201,202,0.1))`,
          border: `1px solid rgba(165,201,202,0.4)`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)`,
          backdropFilter: 'blur(16px)'
        }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg bg-[#A5C9CA]" />
        
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? (
            <>
              <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </span>

        {/* Inner glow effect */}
        <div className="absolute inset-1 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[#A5C9CA]" />
      </button>
    </form>
  );
}
