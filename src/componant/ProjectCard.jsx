import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} className="w-full max-w-[340px] flex-none overflow-hidden rounded-3xl border p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-full flex-col">
        <div className="mb-5">
          <p style={{ color: 'var(--accent)' }} className="text-xs uppercase tracking-[0.4em] font-semibold mb-3">Project</p>
          <h4 style={{ color: 'var(--text-primary)' }} className="text-2xl font-semibold mb-4 leading-tight">{project.name}</h4>
          <div style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }} className="overflow-hidden rounded-3xl border">
            <img
              src={project.img}
              alt={project.name}
              className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="rounded-full px-3 py-1 text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: 'var(--accent)' }}
              className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90"
            >
              View Project
            </a>
          ) : (
            <span style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold">
              Coming Soon
            </span>
          )}
        </div>

        <div style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }} className="min-h-[120px] max-h-40 overflow-y-auto rounded-3xl border p-4 text-sm leading-6">
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard