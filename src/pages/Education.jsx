import React from 'react'

const Education = () => {
  const education = [
    {
      year: '2020',
      title: '10th Standard — 80.60%',
      school: 'Saraswathi Vidhyamandhir, Peth',
      summary: '10th Standard'
    },
    {
      year: '2022',
      title: '12th — Commerce — 62.50%',
      school: 'Dayanand College of Commerce, Latur',
      summary: 'Commerce'
    },
    {
      year: '2025',
      title: 'Bachelor of Computer Applications (BCA)',
      school: 'Dayanand College of Commerce, Sr. Latur',
      summary: 'Swami Ramanand Teerth Marathwada University, Nanded • 73.97% | 8.51 CGPA',
      featured: true
    }
  ]

  return (
    <section id="education" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-600"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-14">
                <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-4 border-white bg-sky-500 shadow-md"></div>
                <div
                  style={{
                    backgroundColor: item.featured ? 'var(--highlight-bg)' : 'var(--bg-secondary)',
                    borderColor: item.featured ? 'var(--accent)' : 'var(--border-color)'
                  }}
                  className="rounded-3xl border p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p style={{ color: 'var(--text-tertiary)' }} className="text-xs font-semibold uppercase tracking-[0.3em]">
                      {item.year}
                    </p>
                    {item.featured && (
                      <span
                        style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
                        className="inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        Highest Qualification
                      </span>
                    )}
                  </div>

                  <h3
                    style={{ color: item.featured ? 'var(--text-primary)' : 'var(--text-primary)' }}
                    className={`mt-4 text-xl md:text-2xl font-bold ${item.featured ? 'text-2xl md:text-3xl' : ''}`}
                  >
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--text-primary)' }} className="mt-3 text-base font-medium">
                    {item.school}
                  </p>

                  <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm leading-6">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
