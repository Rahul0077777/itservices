import { createApp } from './app.js'
import { env } from './config/env.js'
import { connectDatabase } from './config/database.js'
import { logger } from './utils/logger.js'

async function bootstrap() {
  const app = createApp()

  // Attempt database connection
  await connectDatabase()

  const server = app.listen(env.PORT, () => {
    logger.info(`NexaTech Backend API running on port ${env.PORT} [${env.NODE_ENV}]`)
    logger.info(`Health check available at http://localhost:${env.PORT}/api/health`)
  })

  // Graceful shutdown handling
  const shutdown = () => {
    logger.info('Shutting down server gracefully...')
    server.close(() => {
      logger.info('HTTP server closed.')
      process.exit(0)
    })
  }

  process.on('SIGTERM', shutdown)
  process.on('SIGINT', shutdown)
}

bootstrap().catch((err) => {
  logger.error('Failed to start server:', err)
  process.exit(1)
})
