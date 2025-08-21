# 📧 EmailJS Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended)
   - **Outlook**
   - **Yahoo**
   - Or any SMTP service
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template content:

```
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
```

4. **Copy the Template ID** (you'll need this)

### 4. Get Your Public Key
1. Go to **Account** > **API Keys**
2. **Copy the Public Key** (you'll need this)

### 5. Update Configuration
Open `src/config/emailjs.ts` and replace:

```typescript
export const EMAIL_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key_here",
  SERVICE_ID: "your_actual_service_id_here", 
  TEMPLATE_ID: "your_actual_template_id_here",
};
```

## 🔧 Template Variables Used

The form sends these variables to your email template:

- `{{from_name}}` - User's name from form
- `{{from_email}}` - User's email from form  
- `{{subject}}` - Subject from form
- `{{message}}` - Message from form
- `{{to_name}}` - Your name (recipient)
- `{{to_email}}` - Your email

## ✅ Test Your Setup

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email inbox
4. You should receive an email with the form data

## 🆓 EmailJS Free Limits

- **200 emails/month** (free tier)
- **2 email services**
- **3 email templates**
- **No credit card required**

## 🚨 Security Notes

- Your EmailJS keys are safe to use in frontend code
- EmailJS handles all the email sending securely
- Rate limiting is built-in to prevent spam
- No sensitive data is exposed

## 📞 Need Help?

If you have issues:
1. Check EmailJS dashboard for error logs
2. Verify all IDs are copied correctly
3. Test your email service connection
4. Check browser console for errors

Happy emailing! 🎉
