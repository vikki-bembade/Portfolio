import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full max-w-[340px] flex-none overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex h-full flex-col">
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.4em] text-sky-600 font-semibold mb-3">Project</p>
          <h4 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">{project.name}</h4>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <img
              src={project.img}
              alt={project.name}
              className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
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
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
            >
              View Project
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-2xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-600">
              Coming Soon
            </span>
          )}
        </div>

        <div className="min-h-[120px] max-h-40 overflow-y-auto rounded-3xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          {project.description}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard