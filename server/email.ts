import nodemailer from 'nodemailer';
import { log } from './vite.js';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isConfigured = false;

  constructor() {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    try {
      // Get environment variables
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT;

      // Check if all required environment variables are present
      if (!emailUser || !emailPass || !smtpHost || !smtpPort) {
        log('SMTP configuration incomplete. Missing environment variables:', 'email');
        log(`Required: EMAIL_USER, EMAIL_PASS, SMTP_HOST, SMTP_PORT`, 'email');
        log(`Current: EMAIL_USER=${!!emailUser}, EMAIL_PASS=${!!emailPass}, SMTP_HOST=${!!smtpHost}, SMTP_PORT=${!!smtpPort}`, 'email');
        this.isConfigured = false;
        return;
      }

      // Create transporter with environment variables
      this.transporter = nodemailer.createTransporter({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: parseInt(smtpPort) === 465, // true for 465 (SSL), false for other ports like 587 (TLS)
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        // Additional configuration for Gmail and other providers
        tls: {
          rejectUnauthorized: false, // For development/testing
        },
      });

      this.isConfigured = true;
      log('SMTP transporter configured successfully', 'email');
    } catch (error) {
      log(`Error initializing email transporter: ${error}`, 'email');
      this.isConfigured = false;
    }
  }

  async verifyConnection(): Promise<boolean> {
    if (!this.transporter || !this.isConfigured) {
      return false;
    }

    try {
      await this.transporter.verify();
      log('SMTP connection verified successfully', 'email');
      return true;
    } catch (error) {
      log(`SMTP connection verification failed: ${error}`, 'email');
      return false;
    }
  }

  async sendContactEmail(data: EmailData): Promise<EmailResponse> {
    // Check if email service is configured
    if (!this.isConfigured || !this.transporter) {
      return {
        success: false,
        message: 'Email service not configured. Please check environment variables.',
      };
    }

    try {
      // Validate email data
      if (!data.name || !data.email || !data.subject || !data.message) {
        return {
          success: false,
          message: 'Missing required fields. Please fill out all form fields.',
        };
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return {
          success: false,
          message: 'Invalid email address format.',
        };
      }

      const recipientEmail = process.env.EMAIL_TO;
      if (!recipientEmail) {
        return {
          success: false,
          message: 'Recipient email not configured.',
        };
      }

      // Create email content
      const mailOptions = {
        from: `"${data.name}" <${process.env.EMAIL_USER}>`, // Sender address
        to: recipientEmail, // Recipient address from environment variable
        replyTo: data.email, // Set reply-to as the form submitter's email
        subject: `Contact Form: ${data.subject}`, // Subject with prefix
        html: this.generateEmailHTML(data),
        text: this.generateEmailText(data), // Fallback plain text
      };

      // Send email
      const info = await this.transporter.sendMail(mailOptions);
      
      log(`Email sent successfully. Message ID: ${info.messageId}`, 'email');
      
      return {
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        messageId: info.messageId,
      };
    } catch (error) {
      log(`Error sending email: ${error}`, 'email');
      
      // Provide user-friendly error messages
      let errorMessage = 'Failed to send email. Please try again later.';
      
      if (error instanceof Error) {
        if (error.message.includes('authentication')) {
          errorMessage = 'Email authentication failed. Please contact support.';
        } else if (error.message.includes('connection')) {
          errorMessage = 'Unable to connect to email server. Please try again later.';
        } else if (error.message.includes('timeout')) {
          errorMessage = 'Email sending timed out. Please try again.';
        }
      }

      return {
        success: false,
        message: errorMessage,
      };
    }
  }

  private generateEmailHTML(data: EmailData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0f172a; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f8f9fa; padding: 20px; border: 1px solid #dee2e6; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #495057; }
          .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
          .footer { background-color: #6c757d; color: white; padding: 15px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>West Wind Marine Electronics Ltd</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${this.escapeHtml(data.name)}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${this.escapeHtml(data.email)}</div>
            </div>
            
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${this.escapeHtml(data.subject)}</div>
            </div>
            
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${this.escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from the West Wind Marine Electronics Ltd contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateEmailText(data: EmailData): string {
    return `
New Contact Form Submission - West Wind Marine Electronics Ltd

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from the West Wind Marine Electronics Ltd contact form.
Submitted on: ${new Date().toLocaleString()}
    `;
  }

  private escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}

// Create singleton instance
export const emailService = new EmailService();