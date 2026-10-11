import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { createApp } from '../src/app.js'

describe('Projects Endpoints', () => {
  const app = createApp()

  it('GET /api/projects should return 200 with all portfolio projects', async () => {
    const res = await request(app).get('/api/projects')

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(Array.isArray(res.body.data)).toBe(true)
    expect(res.body.data.length).toBeGreaterThanOrEqual(4)

    const slugs = res.body.data.map((p: { slug: string }) => p.slug)
    expect(slugs).toContain('zaya-travels')
    expect(slugs).toContain('crm-platform')
    expect(slugs).toContain('goyafly-travel')
    expect(slugs).toContain('taskflow-mobile')
  })

  it('GET /api/projects/:slug should return 200 for an existing project', async () => {
    const res = await request(app).get('/api/projects/zaya-travels')

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.title).toBe('Zaya Travels')
    expect(res.body.data.category).toBe('Travel Booking Platform')
  })

  it('GET /api/projects/:slug should return 404 for a non-existent project', async () => {
    const res = await request(app).get('/api/projects/non-existent-project-xyz')

    expect(res.status).toBe(404)
    expect(res.body.success).toBe(false)
    expect(res.body.message).toContain('not found')
  })
})
