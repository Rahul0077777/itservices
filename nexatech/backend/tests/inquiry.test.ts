import { describe, it, expect } from 'vitest'
import request from 'supertest'
import { createApp } from '../src/app.js'

describe('Inquiry Submission Endpoints', () => {
  const app = createApp()

  it('POST /api/inquiries should accept valid inquiry and return 201 Created', async () => {
    const payload = {
      fullName: 'Vikram Malhotra',
      email: 'vikram@example.com',
      company: 'Tech Solutions Pvt Ltd',
      service: 'MERN Stack Applications',
      budget: '₹50,000 - ₹1,50,000',
      message: 'Looking for a full stack dashboard with React and Node.js for inventory management.',
    }

    const res = await request(app).post('/api/inquiries').send(payload)

    expect(res.status).toBe(201)
    expect(res.body.success).toBe(true)
    expect(res.body.data.fullName).toBe('Vikram Malhotra')
    expect(res.body.data.email).toBe('vikram@example.com')
  })

  it('POST /api/inquiries should reject invalid email and return 400 Bad Request', async () => {
    const payload = {
      fullName: 'Anita Roy',
      email: 'not-an-email',
      service: 'Web Development',
      message: 'Need a corporate website for our logistics firm.',
    }

    const res = await request(app).post('/api/inquiries').send(payload)

    expect(res.status).toBe(400)
    expect(res.body.success).toBe(false)
    expect(res.body.errors).toHaveProperty('email')
  })

  it('POST /api/inquiries should reject short name and return 400 Bad Request', async () => {
    const payload = {
      fullName: 'A',
      email: 'anita@example.com',
      service: 'Web Development',
      message: 'Need a corporate website for our logistics firm.',
    }

    const res = await request(app).post('/api/inquiries').send(payload)

    expect(res.status).toBe(400)
    expect(res.body.success).toBe(false)
    expect(res.body.errors).toHaveProperty('fullName')
  })

  it('POST /api/inquiries should reject short message and return 400 Bad Request', async () => {
    const payload = {
      fullName: 'Anita Roy',
      email: 'anita@example.com',
      service: 'Web Development',
      message: 'Short',
    }

    const res = await request(app).post('/api/inquiries').send(payload)

    expect(res.status).toBe(400)
    expect(res.body.success).toBe(false)
    expect(res.body.errors).toHaveProperty('message')
  })

  it('GET /api/unknown-route should return 404 Not Found', async () => {
    const res = await request(app).get('/api/unknown-route')

    expect(res.status).toBe(404)
    expect(res.body.success).toBe(false)
  })
})
