import React from 'react'

const Courses = () => {
  return (
    <section id="courses" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-12">Courses & Certifications</h2>

        <div className="mx-auto max-w-3xl">
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="rounded-3xl border p-8 shadow-sm">
            <p style={{ color: 'var(--text-tertiary)' }} className="text-xs font-semibold uppercase tracking-[0.3em]">
              Certificate
            </p>

            <h3 style={{ color: 'var(--text-primary)' }} className="mt-4 text-2xl md:text-3xl font-bold">
              Advanced Java Full Stack
            </h3>

            <p style={{ color: 'var(--text-primary)' }} className="mt-4 text-lg font-medium">
              UpGrad Learning Institute, Kothrud, Pune
            </p>

            <p style={{ color: 'var(--text-secondary)' }} className="mt-3 text-base">
              Completed / Certificate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
