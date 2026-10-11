import type { ProjectItem, ContactFormData, ApiResponse } from '../types'
import { projectsData } from '../data'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export const apiService = {
  async getHealth(): Promise<{ status: string; uptime: number; timestamp: string }> {
    const res = await fetch(`${API_BASE_URL}/health`)
    if (!res.ok) throw new Error('Health check failed')
    return res.json()
  },

  async getProjects(): Promise<ProjectItem[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/projects`)
      if (!res.ok) {
        throw new Error(`Failed to fetch projects: ${res.statusText}`)
      }
      const data: ApiResponse<ProjectItem[]> = await res.json()
      return data.data && data.data.length > 0 ? data.data : projectsData
    } catch (err) {
      console.warn('Backend unavailable, using local project records:', err)
      return projectsData
    }
  },

  async getProjectBySlug(slug: string): Promise<ProjectItem | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/projects/${slug}`)
      if (!res.ok) {
        throw new Error(`Failed to fetch project ${slug}`)
      }
      const data: ApiResponse<ProjectItem> = await res.json()
      return data.data || null
    } catch {
      const local = projectsData.find((p) => p.slug === slug)
      return local || null
    }
  },

  async submitInquiry(formData: ContactFormData): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await res.json().catch(() => null)

    if (!res.ok) {
      throw new Error(result?.message || `Server returned ${res.status}`)
    }

    return result || { success: true, message: 'Inquiry received successfully!' }
  },
}
