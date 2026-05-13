import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-10">About Me</h2>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="space-y-6 p-8">
            
            <ul className="grid gap-4 text-slate-600">
              <li className="rounded-3xl bg-slate-50 p-4">
              I am a BCA graduate (2025) and a dedicated fresher building a strong career as a Full Stack Java Developer. I work with Java, React, JavaScript, HTML, CSS, MySQL, and DSA, and I enjoy solving real problems with clean code.
            </li>
              <li className="rounded-3xl bg-slate-50 p-4">150+ DSA problems solved to strengthen problem solving and logical thinking.</li>
              <li className="rounded-3xl bg-slate-50 p-4">Hands-on experience with version control using Git and GitHub.</li>
              <li className="rounded-3xl bg-slate-50 p-4">Focused on consistency, learning, and building production-friendly UIs.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleShowResume}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Show Resume
              </button>
              <a
                href={Viki_Bembade}
                download
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="w-full max-w-xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400 font-semibold">Career highlights</p>
            <div className="mt-6 space-y-5">
              <div className="p-5">
                <p className="font-semibold text-slate-100">Front-end development</p>
                <p className="mt-2 text-sm text-slate-300">Building responsive interfaces with React and Tailwind CSS.</p>
              </div>
              <div className=" p-5">
                <p className="font-semibold text-slate-100">Problem solving</p>
                <p className="mt-2 text-sm text-slate-300">Applying DSA skills to create stable and efficient solutions.</p>
              </div>
              <div className=" p-5">
                <p className="font-semibold text-slate-100">Learning mindset</p>
                <p className="mt-2 text-sm text-slate-300">Continuously improving through practice and real project work.</p>
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