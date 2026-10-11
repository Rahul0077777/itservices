import { InquiryModel, type IInquiry } from '../models/inquiry.model.js'
import { isDbConnected } from '../config/database.js'
import { emailService } from './email.service.js'
import { logger } from '../utils/logger.js'
import type { InquiryInput } from '../validators/inquiry.validator.js'

// In-memory store fallback when MongoDB is not running locally
const inMemoryInquiries: (InquiryInput & { id: string; createdAt: Date })[] = []

export const inquiryService = {
  async createInquiry(input: InquiryInput, ipAddress?: string) {
    let savedInquiry: unknown = null

    if (isDbConnected()) {
      try {
        const inquiryDoc = new InquiryModel({
          ...input,
          ipAddress,
        })
        savedInquiry = await inquiryDoc.save()
        logger.info(`Inquiry persisted to MongoDB: ${inquiryDoc._id}`)
      } catch (err) {
        logger.warn('Failed to save inquiry to MongoDB, falling back to memory store:', err)
      }
    }

    if (!savedInquiry) {
      const memDoc = {
        id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        ...input,
        ipAddress,
        createdAt: new Date(),
      }
      inMemoryInquiries.push(memDoc)
      savedInquiry = memDoc
      logger.info(`Inquiry stored in memory store: ${memDoc.id}`)
    }

    // Trigger email delivery
    await emailService.sendInquiryNotification(input)

    return savedInquiry
  },

  getInMemoryCount() {
    return inMemoryInquiries.length
  },
}
