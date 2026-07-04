import React from 'react'
import ProjectCard from '../componant/ProjectCard'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-items-center pb-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects