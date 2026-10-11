import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { createApp } from '../src/app.js'

describe('GET /api/health', () => {
  const app = createApp()

  it('should return 200 OK with status and service details', async () => {
    const res = await request(app).get('/api/health')

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('status', 'ok')
    expect(res.body).toHaveProperty('service', 'NexaTech IT Solutions API')
    expect(res.body).toHaveProperty('timestamp')
  })
})
