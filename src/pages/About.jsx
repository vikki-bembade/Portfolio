import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 style={{ color: 'var(--text-primary)' }} className="text-3xl md:text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6 p-8">
            
            <ul className="grid gap-4">
              <li style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="rounded-3xl p-4">
              I am a BCA graduate (2025) and a dedicated fresher building a strong career as a Full Stack Java Developer. I work with Java, React, JavaScript, HTML, CSS, MySQL, and DSA, and I enjoy solving real problems with clean code.
            </li>
              <li style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="rounded-3xl p-4">150+ DSA problems solved to strengthen problem solving and logical thinking.</li>
              <li style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="rounded-3xl p-4">Hands-on experience with version control using Git and GitHub.</li>
              <li style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }} className="rounded-3xl p-4">Focused on consistency, learning, and building production-friendly UIs.</li>
            </ul>
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
            <p style={{ color: 'var(--accent)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">Career highlights</p>
            <div className="mt-6 space-y-5">
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Front-end development</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Building responsive interfaces with React and Tailwind CSS.</p>
              </div>
               <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Back-end development</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Building robust server-side applications with Java and Spring Boot.</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Building server-side applications with Node.js and express.js.</p>
              </div>
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Problem solving</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Applying DSA skills to create stable and efficient solutions.</p>
              </div>
              <div className="p-5">
                <p style={{ color: 'var(--text-primary)' }} className="font-semibold">Learning mindset</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">Continuously improving through practice and real project work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function handleShowResume(){
    window.open(Viki_Bembade, '_blank');
}

export default About