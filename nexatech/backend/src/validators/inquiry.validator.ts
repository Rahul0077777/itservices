import { z } from 'zod'

export const inquirySchema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(80, { message: 'Full name must be under 80 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'A valid email address is required' })
    .toLowerCase(),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(100).optional(),
  service: z
    .string({ required_error: 'Service selection is required' })
    .trim()
    .min(1, { message: 'Please select a service' }),
  budget: z.string().trim().optional(),
  message: z
    .string({ required_error: 'Project details message is required' })
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(2000, { message: 'Message must be under 2000 characters' }),
})

export type InquiryInput = z.infer<typeof inquirySchema>
