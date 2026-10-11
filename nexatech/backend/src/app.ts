import express, { type Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { env } from './config/env.js'
import { apiLimiter } from './middleware/rateLimiter.middleware.js'
import { notFoundHandler, errorHandler } from './middleware/error.middleware.js'
import apiRoutes from './routes/index.js'

export const createApp = (): Application => {
  const app = express()

  // Security headers with Helmet
  app.use(helmet())

  // CORS restriction
  app.use(
    cors({
      origin: [env.FRONTEND_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  )

  // Body parser with size limits
  app.use(express.json({ limit: '1mb' }))
  app.use(express.urlencoded({ extended: true, limit: '1mb' }))

  // Global API rate limiting
  app.use('/api', apiLimiter)

  // Mount API endpoints
  app.use('/api', apiRoutes)

  // 404 handler
  app.use(notFoundHandler)

  // Centralized Error handler
  app.use(errorHandler)

  return app
}
