import React, { useState } from 'react'
import { motion } from 'motion/react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'
import { projectsData } from '../data'
import { CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react'
import type { ProjectItem } from '../types'

interface FeaturedProjectsProps {
  onInquireProject: (projectTitle: string) => void
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onInquireProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [showAllModal, setShowAllModal] = useState<boolean>(false)

  return (
    <section id="projects" className="relative py-8 sm:py-12 lg:py-6 lg:min-h-[calc(100vh-4.5rem)] flex flex-col justify-center bg-[#f8fafc] border-t border-slate-200/80 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="OUR WORK"
          badgeVariant="blue"
          title="Real Projects."
          highlightedText="Practical Solutions."
          subtitle="Explore reference systems and real-world architectures built with production standards, clean TypeScript code, and strict security."
          actionLink={{
            label: 'View All Projects',
            href: '#projects',
            onClick: () => setShowAllModal(true),
          }}
        />

        {/* 4 Projects Grid on Standard 4-Cols with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: 'easeOut' }}
            >
              <ProjectCard
                project={project}
                onViewDetails={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal for Deep Architecture Review */}
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
          >
            <div className="space-y-5 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0055ff]">
                  {selectedProject.category}
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {selectedProject.projectType}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed font-normal">{selectedProject.summary}</p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-[#00285e] mb-1 text-xs uppercase tracking-wide">
                  Problem Solved:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">{selectedProject.problemSolved}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#00285e] mb-2.5 text-xs uppercase tracking-wide">
                  Key Technical Features:
                </h4>
                <div className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-[#00285e] mb-2 text-xs uppercase tracking-wide">
                  Architecture Highlights:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 font-normal">
                  {selectedProject.architectureHighlights.map((arch, idx) => (
                    <li key={idx}>{arch}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {selectedProject.liveDemoUrl && (
                    <a
                      href={selectedProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-[#0055ff] border border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Spec</span>
                    </a>
                  )}

                  <Button
                    variant="yellow"
                    size="sm"
                    onClick={() => {
                      const title = selectedProject.title
                      setSelectedProject(null)
                      onInquireProject(title)
                    }}
                    icon={<ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
                  >
                    Build Similar Solution
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        )}

        {/* View All Projects Modal */}
        {showAllModal && (
          <Modal
            isOpen={showAllModal}
            onClose={() => setShowAllModal(false)}
            title="Portfolio & Reference Projects"
          >
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Explore our full spectrum of enterprise web platforms, mobile apps, and automated workflows. Each build follows strict TypeScript, modular components, and database normalization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectsData.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-md transition-all cursor-pointer text-left"
                    onClick={() => {
                      setShowAllModal(false)
                      setSelectedProject(p)
                    }}
                  >
                    <div className="font-bold text-[#00285e] text-sm">{p.title}</div>
                    <div className="text-xs text-[#0055ff] font-semibold mb-1">{p.category}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-2 font-normal">{p.summary}</div>
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  )
}
