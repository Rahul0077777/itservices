import type { Request, Response, NextFunction } from 'express'
import type { AnyZodObject } from 'zod'

export const validateBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      const formattedErrors: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const path = issue.path.join('.')
        formattedErrors[path] = issue.message
      }

      res.status(400).json({
        success: false,
        message: 'Validation failed. Please verify your submitted information.',
        errors: formattedErrors,
      })
      return
    }

    req.body = result.data
    next()
  }
}
