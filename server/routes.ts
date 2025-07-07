import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService, type EmailData } from "./email.js";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Email configuration status endpoint
  app.get('/api/email/status', async (req, res) => {
    try {
      const isConnected = await emailService.verifyConnection();
      res.json({
        configured: isConnected,
        message: isConnected 
          ? 'SMTP configuration is valid and connected'
          : 'SMTP configuration is missing or invalid'
      });
    } catch (error) {
      res.status(500).json({
        configured: false,
        message: 'Error checking email configuration',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Contact form submission endpoint (both /api/contact and /contact)
  const handleContactSubmission = async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission
      console.log('Contact form submission received:', {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString()
      });
      
      // Send email using the email service
      const emailResult = await emailService.sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      });
      
      if (emailResult.success) {
        console.log('Email sent successfully:', emailResult.messageId);
        res.json({
          success: true,
          message: emailResult.message
        });
      } else {
        console.error('Email sending failed:', emailResult.message);
        res.status(500).json({
          success: false,
          message: emailResult.message
        });
      }
      
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Failed to submit form. Please try again."
      });
    }
  };

  // Register both endpoints
  app.post('/api/contact', handleContactSubmission);
  app.post('/contact', handleContactSubmission);

  const httpServer = createServer(app);

  return httpServer;
}
