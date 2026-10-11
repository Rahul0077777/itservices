import type { Request, Response } from 'express'
import { isDbConnected } from '../config/database.js'

export const getHealth = (_req: Request, res: Response): void => {
  res.status(200).json({
    status: 'ok',
    service: 'NexaTech IT Solutions API',
    database: isDbConnected() ? 'connected' : 'in-memory-mode',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  })
}
