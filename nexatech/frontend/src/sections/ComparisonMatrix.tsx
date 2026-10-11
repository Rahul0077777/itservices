import React from 'react'
import { motion } from 'motion/react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ShieldCheck, ArrowRight, Zap, Code2, Users } from 'lucide-react'

interface ComparisonMatrixProps {
  onStartProjectClick: () => void
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ onStartProjectClick }) => {
  return (
    <section id="comparison" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-[#f8fafc] border-t border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-4 sm:mb-6"
        >
          <Badge variant="blue">TRANSPARENT COMPARISON</Badge>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#00285e] tracking-tight mt-1.5">
            Why Choose{' '}
            <span className="text-[#0055ff] relative inline-block">
              NexaTech
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#fed000]/45 -z-10 rounded-sm" />
            </span>{' '}
            Over Alternatives?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            See how our dedicated engineering pod model compares directly against cheap freelancers and overpriced traditional agencies.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto no-scrollbar -mx-3 sm:mx-0 px-3 sm:px-0"
        >
          <div className="min-w-[620px] rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[#00285e] font-bold">
                  <th className="p-2.5 sm:p-3 w-1/4">Key Factor</th>
                  <th className="p-2.5 sm:p-3 w-1/4 text-slate-500 font-semibold">Typical Freelancers</th>
                  <th className="p-2.5 sm:p-3 w-1/4 text-slate-500 font-semibold">Big Agencies</th>
                  <th className="p-2.5 sm:p-3 w-1/4 bg-blue-50/70 text-[#0055ff] font-bold border-l border-blue-200">
                    NexaTech IT Solutions ⭐
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-2 sm:p-2.5 font-semibold text-[#00285e]">Communication</td>
                  <td className="p-2 sm:p-2.5 text-rose-600">❌ High risk of ghosting & delays</td>
                  <td className="p-2 sm:p-2.5 text-slate-500">⚠️ Slow junior account managers</td>
                  <td className="p-2 sm:p-2.5 bg-blue-50/30 text-emerald-700 font-bold border-l border-blue-100">
                    ✅ Direct Founder WhatsApp (+91 7870391245)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-2 sm:p-2.5 font-semibold text-[#00285e]">Code Architecture</td>
                  <td className="p-2 sm:p-2.5 text-rose-600">❌ Spaghetti code, fragile plugins</td>
                  <td className="p-2 sm:p-2.5 text-slate-500">⚠️ Outdated template frameworks</td>
                  <td className="p-2 sm:p-2.5 bg-blue-50/30 text-emerald-700 font-bold border-l border-blue-100">
                    ✅ Clean TypeScript, MVC & Lighthouse 95+
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-2 sm:p-2.5 font-semibold text-[#00285e]">Pricing Model</td>
                  <td className="p-2 sm:p-2.5 text-slate-500">⚠️ Hidden hourly inflation</td>
                  <td className="p-2 sm:p-2.5 text-rose-600">❌ Expensive ₹3 Lakh+ overhead</td>
                  <td className="p-2 sm:p-2.5 bg-blue-50/30 text-emerald-700 font-bold border-l border-blue-100">
                    ✅ Fixed Milestone Pricing (From ₹9,999)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-2 sm:p-2.5 font-semibold text-[#00285e]">Source Code Rights</td>
                  <td className="p-2 sm:p-2.5 text-rose-600">❌ Hostage code / Vendor lock-in</td>
                  <td className="p-2 sm:p-2.5 text-slate-500">⚠️ Proprietary platform lock</td>
                  <td className="p-2 sm:p-2.5 bg-blue-50/30 text-emerald-700 font-bold border-l border-blue-100">
                    ✅ 100% Full GitHub & IP Handover
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-2 sm:p-2.5 font-semibold text-[#00285e]">Post-Launch Warranty</td>
                  <td className="p-2 sm:p-2.5 text-rose-600">❌ Disappears after payment</td>
                  <td className="p-2 sm:p-2.5 text-slate-500">⚠️ Expensive ₹25,000/mo retainer</td>
                  <td className="p-2 sm:p-2.5 bg-blue-50/30 text-emerald-700 font-bold border-l border-blue-100">
                    ✅ 30-Day Free Bug Fixing Warranty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Trust Row & CTA */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Mutual NDA Included
            </span>
            <span className="flex items-center gap-1.5 text-[#0055ff] font-semibold">
              <Zap className="w-4 h-4" /> 2-Hour Estimate Turnaround
            </span>
            <span className="flex items-center gap-1.5 text-slate-700">
              <Code2 className="w-4 h-4 text-blue-500" /> 100% Code Ownership
            </span>
          </div>

          <Button
            variant="yellow"
            size="sm"
            onClick={onStartProjectClick}
            className="rounded-full px-5 py-2 text-xs font-bold shadow-sm hover:-translate-y-0.5 transition-all shrink-0"
            icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
          >
            Claim ₹9,999 Starter Plan
          </Button>
        </div>
      </div>
    </section>
  )
}
