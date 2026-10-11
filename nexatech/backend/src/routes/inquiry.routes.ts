import { Router } from 'express'
import { submitInquiry } from '../controllers/inquiry.controller.js'
import { validateBody } from '../middleware/validate.middleware.js'
import { inquirySchema } from '../validators/inquiry.validator.js'
import { inquiryLimiter } from '../middleware/rateLimiter.middleware.js'

const router = Router()

router.post('/', inquiryLimiter, validateBody(inquirySchema), submitInquiry)

export default router
