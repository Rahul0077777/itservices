import mongoose, { Schema, Document } from 'mongoose'

export interface IInquiry extends Document {
  fullName: string
  email: string
  phone?: string
  company?: string
  service: string
  budget?: string
  message: string
  status: 'new' | 'contacted' | 'resolved'
  ipAddress?: string
  createdAt: Date
  updatedAt: Date
}

const inquirySchema = new Schema<IInquiry>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 30,
    },
    company: {
      type: String,
      trim: true,
      maxlength: 100,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
    budget: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'resolved'],
      default: 'new',
    },
    ipAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

// Index for email and creation time queries
inquirySchema.index({ email: 1, createdAt: -1 })

export const InquiryModel = mongoose.model<IInquiry>('Inquiry', inquirySchema)
