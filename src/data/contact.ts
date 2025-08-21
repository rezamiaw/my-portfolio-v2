export type ContactInfo = {
  title: string;
  value: string;
  icon: string;
  href?: string;
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    title: "Email",
    value: "rezadwiandrianto@gmail.com",
    icon: "✉️",
    href: "mailto:rezadwiandrianto@gmail.com"
  },
  {
    title: "GitHub",
    value: "github.com/rezamiaw",
    icon: "💻",
    href: "https://github.com/rezamiaw"
  },
  {
    title: "Location",
    value: "Purwokerto, Indonesia",
    icon: "📍"
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/rezada",
    icon: "🔗",
    href: "https://linkedin.com/in/rezada"
  }
];

export const CONTACT_FORM_FIELDS = {
  name: {
    label: "Full Name",
    placeholder: "Your full name",
    type: "text",
    required: true
  },
  email: {
    label: "Email Address",
    placeholder: "your.email@example.com",
    type: "email",
    required: true
  },
  subject: {
    label: "Subject",
    placeholder: "Project inquiry, collaboration, etc.",
    type: "text",
    required: true
  },
  message: {
    label: "Message",
    placeholder: "Tell me about your project or how we can work together...",
    type: "textarea",
    required: true
  }
};
