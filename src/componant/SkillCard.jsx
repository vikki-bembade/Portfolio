import React from 'react'

const SkillCard = ({ skill }) => {
  return (
    <div className="w-full max-w-[180px] rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100">
        <img src={skill.logo} alt={skill.name} className="h-10 w-10 object-contain" />
      </div>
      <h3 className="justify-items-center text-lg font-semibold text-slate-900">{skill.name}</h3>
    </div>
  )
}

export default SkillCard