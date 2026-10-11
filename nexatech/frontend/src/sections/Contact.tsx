import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Clock,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  User,
  Layers,
  FileText,
  DollarSign,
} from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { apiService } from '../services/api'
import type { ContactFormData } from '../types'

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(80),
  email: z.string().email({ message: 'Please enter a valid business email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, { message: 'Please select a service' }),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Please describe your project (at least 10 characters)' })
    .max(2000),
})

interface ContactProps {
  selectedServicePreset?: string
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [serverMessage, setServerMessage] = useState<string | null>(null)
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: selectedServicePreset || 'Web Development',
      budget: '₹9,999 - ₹25,000 (Festive Starter Special)',
      message: '',
    },
  })

  useEffect(() => {
    if (selectedServicePreset) {
      setValue('service', selectedServicePreset)
    }
  }, [selectedServicePreset, setValue])

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('loading')
    setServerMessage(null)

    try {
      const response = await apiService.submitInquiry(data)
      setSubmissionStatus('success')
      setServerMessage(response.message || 'Inquiry received successfully!')
      setSubmittedData(data)
      reset()
    } catch (err: unknown) {
      setSubmissionStatus('error')
      setServerMessage(
        err instanceof Error
          ? err.message
          : 'Unable to connect to the inquiry server. Please WhatsApp or email hello@nexatech.in directly.'
      )
    }
  }

  return (
    <section
      id="contact"
      className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-white text-slate-800 overflow-hidden scroll-mt-20 border-t border-slate-200/80"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-br from-[#eef5fc] via-[#f4f9fd] to-[#f8fbfe] border border-blue-200/90 p-3.5 sm:p-5 lg:p-6 shadow-xl overflow-hidden"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">
            {/* Left Column: Dedicated Tech Consultant Cutout & Direct Contacts */}
            <div className="lg:col-span-5 text-left space-y-4 sm:space-y-5">
              <div>
                <div className="mb-1.5">
                  <Badge variant="blue">DIRECT FOUNDER CONSULTATION</Badge>
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#00285e] tracking-tight leading-tight">
                  Have a Project in Mind?{' '}
                  <span className="text-[#0055ff] relative inline-block">
                    Let's Talk.
                    <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#fed000]/45 -z-10 rounded-sm" />
                  </span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Speak directly with our technical leadership. No middle-agents, no sales fluff. We review your requirements, design the tech architecture, and deliver fixed milestone pricing within 2 hours.
                </p>
              </div>

              {/* Authentic Indian Founder Card (Aman Sharma) */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-blue-200/80 bg-white p-3 sm:p-4 flex items-start gap-3 sm:gap-3.5">
                <div className="relative shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                    alt="Aman Sharma - Founder & Lead Solutions Architect"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover object-top border-2 border-blue-100 shadow-2xs"
                  />
                  {/* Active Online Indicator */}
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                    <div className="flex items-center gap-1.5 text-[#0055ff] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#fed000] fill-current" />
                      <span>Aman Sharma</span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Active on WhatsApp
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-700 mb-0.5 truncate">
                    Founder & Lead Solutions Architect
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                    "Chat with me directly on WhatsApp (<strong className="text-[#00285e] font-bold">+91 7870391245</strong>). We provide technical estimates & roadmap in 2 hours."
                  </p>
                </div>
              </div>

              {/* Direct Quick Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <a
                  href="https://wa.me/917870391245?text=Hello%20Aman%2C%20I%20want%20to%20discuss%20an%20IT%20project%20or%20the%20%E2%82%B99%2C999%20website%20offer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-400 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold text-slate-500 uppercase block tracking-wider">
                      WhatsApp Founder Line
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#00285e] group-hover:text-emerald-700 truncate block">
                      +91 7870391245
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold block">
                      1-Click Instant Chat
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:hello@nexatech.in"
                  className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0055ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-bold text-slate-500 uppercase block tracking-wider">
                      Official Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#00285e] group-hover:text-[#0055ff] truncate block">
                      hello@nexatech.in
                    </span>
                    <span className="text-[10px] text-blue-600 font-semibold block">
                      Direct Tech Inbox
                    </span>
                  </div>
                </a>
              </div>

              {/* Trust Pillars */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs text-slate-600 font-medium pt-0.5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0055ff]" />
                  <span>Avg Response: &lt; 2 Hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mutual NDA Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>20+ Apps Delivered</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Inquiry Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl p-3.5 sm:p-6 md:p-7 shadow-lg text-left border border-slate-200/90 bg-white relative">
                {submissionStatus === 'success' ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#00285e] tracking-tight">Inquiry Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                      Thank you, <span className="font-bold text-[#00285e]">{submittedData?.fullName}</span>. Our lead developer has received your inquiry for <span className="font-bold text-[#0055ff]">{submittedData?.service}</span> and will review it shortly.
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      A copy has been recorded. We will reply to {submittedData?.email}
                      {submittedData?.phone && ` / WhatsApp ${submittedData.phone}`}.
                    </p>
                    <div className="pt-1.5">
                      <Button
                        variant="yellow"
                        size="sm"
                        onClick={() => setSubmissionStatus('idle')}
                        className="rounded-full px-5 font-bold shadow-sm hover:-translate-y-0.5 transition-all text-xs"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
                    <div className="border-b border-slate-100 pb-3 mb-2.5 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#00285e] tracking-tight">
                          Project Discovery Inquiry
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5 font-normal">
                          Share your requirements to receive an architecture roadmap and cost breakdown.
                        </p>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0055ff] border border-blue-200 shadow-2xs">
                        <Sparkles className="w-3 h-3 text-[#fed000] fill-current" /> Fast Track
                      </span>
                    </div>

                    {/* Free Discovery Blueprint Lead Magnet Callout */}
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-amber-50/80 border border-blue-200/90 text-left">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-[#fed000] text-[#00285e] font-bold text-[10px] uppercase shadow-2xs">
                          🎁 100% Free Deliverable
                        </span>
                        <span className="text-xs font-bold text-[#00285e]">
                          Architecture Blueprint & Fixed Milestone Plan (Value: ₹4,999)
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        Submit your details below. Within 2 hours, our Lead Architect reviews your requirements and sends a full system blueprint, recommended tech stack, and transparent pricing — 100% free with zero commitment.
                      </p>
                    </div>

                    {submissionStatus === 'error' && (
                      <div
                        role="alert"
                        className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-start gap-2 text-xs"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                        <div>
                          <strong className="block font-bold">Submission failed</strong>
                          <span>{serverMessage}</span>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="flex items-center gap-1.5 text-xs font-bold text-[#00285e] mb-1"
                        >
                          <User className="w-3 h-3 text-slate-500" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          {...register('fullName')}
                          className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                            errors.fullName
                              ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                              : 'border-slate-200 focus:border-[#0055ff] focus:ring-4 focus:ring-blue-500/10'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-rose-600 text-[11px] mt-0.5 font-medium">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="flex items-center gap-1.5 text-xs font-bold text-[#00285e] mb-1"
                        >
                          <Mail className="w-3 h-3 text-slate-500" />
                          <span>Work Email *</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          {...register('email')}
                          className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:outline-none transition-all ${
                            errors.email
                              ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                              : 'border-slate-200 focus:border-[#0055ff] focus:ring-4 focus:ring-blue-500/10'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-rose-600 text-[11px] mt-0.5 font-medium">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* WhatsApp / Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="flex items-center gap-1.5 text-xs font-bold text-[#00285e] mb-1"
                        >
                          <Phone className="w-3 h-3 text-slate-500" />
                          <span>WhatsApp / Phone Number</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...register('phone')}
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:border-[#0055ff] focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label
                          htmlFor="service"
                          className="flex items-center gap-1.5 text-xs font-bold text-[#00285e] mb-1"
                        >
                          <Layers className="w-3 h-3 text-slate-500" />
                          <span>Service Needed *</span>
                        </label>
                        <select
                          id="service"
                          {...register('service')}
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:bg-white focus:border-[#0055ff] focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all"
                        >
                          <option value="Web Development">Web Development (Website / Landing)</option>
                          <option value="MERN Stack Applications">MERN Stack Applications (Full-Stack)</option>
                          <option value="AI Automation">AI Automation & Workflows</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="SaaS / CRM Development">SaaS / CRM Development</option>
                          <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                          <option value="API Integration">API Integration & Microservices</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div>
                      <label
                        htmlFor="budget"
                        className="flex items-center gap-1.5 text-xs font-bold text-[#00285e] mb-1"
                      >
                        <DollarSign className="w-3 h-3 text-slate-500" />
                        <span>Estimated Budget</span>
                      </label>
                      <select
                        id="budget"
                        {...register('budget')}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:bg-white focus:border-[#0055ff] focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all"
                      >
                        <option value="₹9,999 - ₹25,000 (Festive Starter Special)">
                          ₹9,999 - ₹25,000 (Festive Starter Website Special)
                        </option>
                        <option value="₹25,000 - ₹60,000 (Custom Business Web Portal)">
                          ₹25,000 - ₹60,000 (Custom Business Web Portal)
                        </option>
                        <option value="₹60,000 - ₹1,50,000 (Full MERN Application / MVP)">
                          ₹60,000 - ₹1,50,000 (Full MERN Application / MVP)
                        </option>
                        <option value="₹1,50,000 - ₹3,50,000 (Enterprise Cloud Platform)">
                          ₹1,50,000 - ₹3,50,000 (Enterprise Cloud Platform)
                        </option>
                        <option value="₹3,50,000+ (High-Scale Custom / AI System)">
                          ₹3,50,000+ (High-Scale Custom / AI System)
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="flex items-center gap-1.5 text-xs font-bold text-[#00285e] mb-1"
                      >
                        <FileText className="w-3 h-3 text-slate-500" />
                        <span>Project Details & Requirements *</span>
                      </label>
                      <textarea
                        id="message"
                        rows={2}
                        placeholder="Briefly describe your project, key features, target timeline, or reference websites..."
                        {...register('message')}
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-slate-800 text-xs sm:text-sm placeholder-slate-400 focus:bg-white focus:outline-none transition-all resize-none ${
                          errors.message
                            ? 'border-rose-400 focus:border-rose-500 ring-2 ring-rose-100'
                            : 'border-slate-200 focus:border-[#0055ff] focus:ring-4 focus:ring-blue-500/10'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-rose-600 text-[11px] mt-0.5 font-medium">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button in Aayush Yellow with refined font-bold */}
                    <button
                      type="submit"
                      disabled={submissionStatus === 'loading'}
                      className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-[#fed000] hover:bg-[#e6bc00] text-[#00285e] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                    >
                      {submissionStatus === 'loading' ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-[#00285e]" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 stroke-[2.5] text-[#00285e] group-hover/btn:translate-x-1 transition-transform" />
                          <span>Claim Free Architecture Blueprint & Estimate</span>
                        </>
                      )}
                    </button>

                    <div className="pt-1 text-center text-[10px] sm:text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero Spam • Protected by Mutual NDA • Direct Founder Technical Scoping</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
