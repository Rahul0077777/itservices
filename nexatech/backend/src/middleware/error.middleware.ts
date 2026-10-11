import type { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger.js'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Unhandled server error:', err)

  res.status(500).json({
    success: false,
    message: 'An internal server error occurred. Please try again later or reach out directly.',
  })
}

export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    message: `Resource not found: ${req.method} ${req.originalUrl}`,
  })
}
