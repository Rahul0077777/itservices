import type { Request, Response } from 'express'
import { inquiryService } from '../services/inquiry.service.js'
import type { InquiryInput } from '../validators/inquiry.validator.js'

export const submitInquiry = async (req: Request, res: Response): Promise<void> => {
  const input = req.body as InquiryInput
  const clientIp = req.ip || req.socket.remoteAddress

  const saved = await inquiryService.createInquiry(input, clientIp)

  res.status(201).json({
    success: true,
    message: 'Thank you! Your project inquiry has been received. Our engineering lead will review it and reply within 12 hours.',
    data: {
      fullName: input.fullName,
      email: input.email,
      service: input.service,
    },
  })
}
