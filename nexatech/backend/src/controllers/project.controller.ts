import type { Request, Response } from 'express'
import { projectService } from '../services/project.service.js'

export const getProjects = async (_req: Request, res: Response): Promise<void> => {
  const projects = await projectService.getAllProjects()
  res.status(200).json({
    success: true,
    message: 'Projects retrieved successfully',
    data: projects,
  })
}

export const getProjectBySlug = async (req: Request, res: Response): Promise<void> => {
  const { slug } = req.params
  const project = await projectService.getProjectBySlug(slug)

  if (!project) {
    res.status(404).json({
      success: false,
      message: `Project with slug '${slug}' not found`,
    })
    return
  }

  res.status(200).json({
    success: true,
    message: 'Project retrieved successfully',
    data: project,
  })
}
