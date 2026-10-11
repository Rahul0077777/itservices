import mongoose from 'mongoose'
import { env } from './env.js'
import { logger } from '../utils/logger.js'

let isConnected = false

export async function connectDatabase(): Promise<boolean> {
  if (isConnected) return true

  // In test environment or when URI is empty, skip external connection
  if (env.NODE_ENV === 'test') {
    return false
  }

  try {
    const conn = await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 2000,
    })
    isConnected = true
    logger.info(`MongoDB connected to host: ${conn.connection.host}`)
    return true
  } catch (err: unknown) {
    logger.warn(
      `MongoDB connection skipped or unavailable (${err instanceof Error ? err.message : 'timeout'}). Running with in-memory resilient storage mode.`
    )
    return false
  }
}

export function isDbConnected(): boolean {
  return isConnected
}
