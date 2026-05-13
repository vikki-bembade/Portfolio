import React from 'react'
import skills from '../data/skills'
import SkillCard from '../componant/SkillCard'

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Skills</h2>
        <p className="max-w-3xl mx-auto text-center text-slate-600 mb-12">
          These are the languages and tools I work with daily to build projects with clean visuals and reliable functionality.
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