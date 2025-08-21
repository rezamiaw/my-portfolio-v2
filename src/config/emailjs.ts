// EmailJS Configuration
// 🚨 IMPORTANT: Setup required at https://www.emailjs.com/
// 
// 1. Create account at emailjs.com
// 2. Add email service (Gmail/Outlook/etc.)
// 3. Create email template
// 4. Get your keys and replace values below

export const EMAIL_CONFIG = {
  // Your EmailJS Public Key (from Account > API Keys)
  PUBLIC_KEY: "j7g9QkNmVC0KMJCDX",
  
  // Your EmailJS Service ID (from Email Services)
  SERVICE_ID: "service_0cu1c2z",
  
  // Your EmailJS Template ID (from Email Templates)
  TEMPLATE_ID: "template_wuqooh8",
};

// Example email template variables that will be sent:
// {{from_name}} - User's name from form
// {{from_email}} - User's email from form
// {{subject}} - Subject from form
// {{message}} - Message from form
// {{to_name}} - Your name (recipient)

export const EMAIL_TEMPLATE_PARAMS = {
  to_name: "Reza Dwi Andrianto", // Your name as recipient
  to_email: "rezadwiandrianto@gmail.com", // Your email
};

// Email template example for EmailJS:
/*
Subject: New Portfolio Contact: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
*/
