import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} className="w-full max-w-[180px] rounded-full border bg-white shadow-sm flex flex-col items-center justify-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div style={{ backgroundColor: 'var(--bg-tertiary)' }} className="flex h-14 w-14 items-center justify-center rounded-full">
        <img src={skill.logo} alt={skill.name} className="h-10 w-10 object-contain" />
      </div>
      <h3 style={{ color: 'var(--text-primary)' }} className="justify-items-center text-lg font-semibold">{skill.name}</h3>
    </div>
  )
}

export default SkillCard