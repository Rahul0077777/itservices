import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  problemSolved: string
  keyFeatures: string[]
  technologies: string[]
  projectType: 'Portfolio' | 'Demo Project' | 'Client Project'
  image: string
  liveDemoUrl?: string
  githubUrl?: string
  architectureHighlights: string[]
  metrics?: { label: string; value: string }
}

const projectSchema = new Schema<IProject>(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    summary: { type: String, required: true },
    problemSolved: { type: String, required: true },
    keyFeatures: [{ type: String }],
    technologies: [{ type: String }],
    projectType: {
      type: String,
      enum: ['Portfolio', 'Demo Project', 'Client Project'],
      default: 'Portfolio',
    },
    image: { type: String, required: true },
    liveDemoUrl: { type: String },
    githubUrl: { type: String },
    architectureHighlights: [{ type: String }],
    metrics: {
      label: { type: String },
      value: { type: String },
    },
  },
  { timestamps: true }
)

export const ProjectModel = mongoose.model<IProject>('Project', projectSchema)
