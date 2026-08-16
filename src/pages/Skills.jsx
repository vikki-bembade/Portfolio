import React from 'react'
import skills from '../data/skills'
import SkillCard from '../componant/SkillCard'

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-4">Skills</h2>
        <p style={{ color: 'var(--text-secondary)' }} className="max-w-3xl mx-auto text-center mb-12">
          Java, Spring Boot, REST APIs, SQL/databases, React, and full-stack development are the core areas I continue developing through projects and professional work.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {skills.map((skill) =>
            <SkillCard key={skill.name} skill={skill} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills