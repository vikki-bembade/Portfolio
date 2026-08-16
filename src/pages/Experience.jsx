import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: 'Trainee – Software Developer',
      company: 'Ecartes Technology Pvt. Ltd.',
      type: 'Full-time / Trainee',
      location: 'Mahape, Navi Mumbai, Maharashtra, India',
      date: '1 August 2026 – Present',
      current: 'CURRENT POSITION',
      description:
        'Currently working as a Trainee Software Developer at Ecartes Technology Pvt. Ltd., gaining hands-on experience in professional software development, application development workflows, debugging, and software engineering practices.'
    }
  ]

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-600"></div>

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <div key={index} className="relative pl-14">
                <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-md"></div>
                <div
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  className="rounded-3xl border p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p style={{ color: 'var(--text-tertiary)' }} className="text-xs font-semibold uppercase tracking-[0.3em]">
                        {job.current}
                      </p>
                      <h3 style={{ color: 'var(--text-primary)' }} className="mt-2 text-2xl font-bold">
                        {job.title}
                      </h3>
                    </div>
                    <span
                      style={{ backgroundColor: 'var(--highlight-bg)', color: 'var(--accent)' }}
                      className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {job.type}
                    </span>
                  </div>

                  <div style={{ color: 'var(--text-primary)' }} className="mt-4 text-lg font-semibold">
                    {job.company}
                  </div>

                  <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-base leading-7">
                    {job.description}
                  </p>

                  <div className="mt-5 flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between">
                    <span style={{ color: 'var(--text-secondary)' }}>{job.date}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{job.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
