import nodemailer from 'nodemailer'
import { env } from '../config/env.js'
import { logger } from '../utils/logger.js'
import type { InquiryInput } from '../validators/inquiry.validator.js'

let transporter: nodemailer.Transporter | null = null

if (env.EMAIL_HOST && env.EMAIL_USER && env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: env.EMAIL_PORT,
    secure: env.EMAIL_PORT === 465,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  })
}

export const emailService = {
  async sendInquiryNotification(inquiry: InquiryInput): Promise<boolean> {
    if (!transporter) {
      logger.info(
        `Email delivery skipped (credentials not configured). Logged inquiry notification for: ${inquiry.fullName} <${inquiry.email}>`
      )
      return false
    }

    try {
      await transporter.sendMail({
        from: `"NexaTech Notifications" <${env.EMAIL_USER}>`,
        to: env.CONTACT_TO_EMAIL,
        subject: `New NexaTech Project Inquiry: ${inquiry.fullName} [${inquiry.service}]`,
        text: `
New Project Inquiry Received:

Name: ${inquiry.fullName}
Email: ${inquiry.email}
Phone/WhatsApp: ${inquiry.phone || 'Not provided'}
Company: ${inquiry.company || 'Not provided'}
Service: ${inquiry.service}
Budget: ${inquiry.budget || 'Not specified'}

Message:
${inquiry.message}
        `,
        html: `
<div style="font-family: sans-serif; padding: 20px; color: #1e293b;">
  <h2 style="color: #00285e;">New NexaTech Project Inquiry</h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td>${inquiry.fullName}</td></tr>
    <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td><a href="mailto:${inquiry.email}">${inquiry.email}</a></td></tr>
    <tr><td style="padding: 8px; font-weight: bold;">Phone/WhatsApp:</td><td>${inquiry.phone || 'N/A'}</td></tr>
    <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td>${inquiry.company || 'N/A'}</td></tr>
    <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td>${inquiry.service}</td></tr>
    <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td>${inquiry.budget || 'N/A'}</td></tr>
  </table>
  <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <strong>Message:</strong>
    <p style="white-space: pre-wrap; margin-top: 8px;">${inquiry.message}</p>
  </div>
</div>
        `,
      })
      logger.info(`Inquiry email notification sent successfully to ${env.CONTACT_TO_EMAIL}`)
      return true
    } catch (err: unknown) {
      logger.error('Failed to send inquiry email notification:', err)
      return false
    }
  },
}
