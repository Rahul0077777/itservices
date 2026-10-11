import React from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from './ui/Icons'
import type { ProjectItem } from '../types'

interface ProjectCardProps {
  project: ProjectItem
  onViewDetails: (project: ProjectItem) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div className="aayush-card group flex flex-col justify-between text-left overflow-hidden border border-slate-200/90 hover:border-blue-400 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      <div>
        {/* Project Thumbnail Image with Aayush aspect & overlay */}
        <div
          onClick={() => onViewDetails(project)}
          className="relative h-32 sm:h-36 w-full bg-slate-100 overflow-hidden cursor-pointer"
        >
          <img
            src={project.image}
            alt={`${project.title} software preview`}
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00285e]/80 via-transparent to-transparent" />

          {/* Project Type Badge */}
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0055ff] border border-blue-200 shadow-sm">
              {project.projectType}
            </span>
          </div>

          {project.metrics && (
            <div className="absolute top-2.5 right-2.5">
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#fed000] text-[#00285e] shadow-sm border border-amber-300">
                {project.metrics.value}
              </span>
            </div>
          )}

          <div className="absolute bottom-2.5 left-3 right-3">
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight drop-shadow-md group-hover:text-[#fed000] transition-colors">
              {project.title}
            </h4>
            <p className="text-[10px] text-blue-100 font-medium truncate mt-0.5">{project.category}</p>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-3 sm:p-4">
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-2.5 font-normal">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1 mb-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Links in Aayush pill button style */}
      <div className="px-3 pb-3 sm:px-4 sm:pb-4 pt-0">
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="font-bold text-[#0055ff] hover:text-[#00285e] inline-flex items-center gap-1 group/btn transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-500 hover:text-[#0055ff] inline-flex items-center gap-1 text-[11px] transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Live</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 text-[11px] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
