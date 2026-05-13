import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'
import Linkes from '../componant/Linkes'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id='home' className="min-h-[calc(100vh-80px)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-center">
          <div className="space-y-6">
            <h6 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Hi, I'm Vikki",
                  3000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Hi, I'm backend developer",
                  3000,
                  "Hi, I'm frontend developer",
                  3000,
                  "Hi, I'm full-stack developer",
                  3000
                ]}
                
                speed={150}
                deletionSpeed={150}
                repeat={Infinity}
              />
            </h6>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              I build attractive, user-friendly applications using modern tools. My focus is on clean design, solid performance, and polished user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={Viki_Bembade}
                download
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">About</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">A thoughtful full-stack developer</h2>
            <p className="mt-4 text-slate-600 leading-7">
              I create responsive, accessible applications with clean structure and consistent spacing. My goal is to make each application feel modern and easy to use.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Core strengths</p>
                <p className="mt-2 text-sm text-slate-600">React, Tailwind, Java, HTML, CSS, JavaScript</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Tools</p>
                <p className="mt-2 text-sm text-slate-600">Git, GitHub, VS Code, Vite</p>
              </div>
            </div>
            <div className="mt-8">
              <Linkes />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home