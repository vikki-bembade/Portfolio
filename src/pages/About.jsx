import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6 p-8">
            <div style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="rounded-3xl p-5 leading-8">
              I am a BCA graduate and currently working as a Trainee Software Developer at Ecartes Technology Pvt. Ltd., with a strong interest in Java, backend, and full-stack application development. My technical background includes Java, Spring Boot, REST APIs, React, databases, and modern development tools. I have developed practical experience through academic and personal projects and completed an Advanced Java Full Stack course through UpGrad Learning Institute, Kothrud, Pune. I am focused on continuously improving my software engineering skills and gaining deeper experience through real-world development.
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleShowResume}
                style={{ backgroundColor: 'var(--button-bg)' }}
                className="rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Show Resume
              </button>
              <a
                href={Viki_Bembade}
                download
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition hover:opacity-75"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="w-full max-w-xl rounded-[2rem] p-8 shadow-xl ring-1">
            <p style={{ color: 'var(--accent)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">Career focus</p>
            <div className="mt-6 space-y-5">
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Backend & Java</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Strong foundation in Java, Spring Boot, REST APIs, and application architecture.</p>
              </div>
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Full-stack development</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Building responsive frontend experiences with React and integrating them with backend services.</p>
              </div>
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Database & integration</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Working with SQL, MySQL, PostgreSQL, and application integration through modern tools.</p>
              </div>
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Career goal</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Developing into a strong software developer through practical experience and continuous learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function handleShowResume() {
  window.open(Viki_Bembade, '_blank')
}

export default About