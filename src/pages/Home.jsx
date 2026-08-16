import React from 'react'
import Viki_Bembade from '../assets/Viki_Bembade.pdf'
import ProfileImg from '../assets/profile.png'
import Linkes from '../componant/Linkes'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex items-center justify-center w-[400px] h-[400px]">
                <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(#00f5ff,#3b82f6,#8b5cf6,#ff00aa,#00f5ff)] blur-md"></div>
                <div className="absolute w-[390px] h-[390px] rounded-full bg-slate-900"></div>
                <div className="absolute w-[382px] h-[382px] rounded-full bg-white"></div>
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="relative z-10 w-[370px] h-[370px] rounded-full object-cover"
                />
              </div>
            </div>

            <h6 style={{ color: 'var(--text-primary)' }} className="text-2xl md:text-4xl font-bold leading-tight">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2500,
                  'Java Full Stack Developer',
                  2500,
                  'Backend Developer',
                  2500,
                ]}
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </h6>

            <p style={{ color: 'var(--text-secondary)' }} className="max-w-2xl text-lg leading-8">
              BCA graduate and currently working as a Trainee Software Developer at Ecartes Technology Pvt. Ltd. I build with Java, Spring Boot, REST APIs, React, and database-driven applications while continuously strengthening my practical software engineering skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={Viki_Bembade}
                download
                style={{ backgroundColor: 'var(--button-bg)' }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:opacity-75"
              >
                View Projects
              </a>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="w-full max-w-xl rounded-[2rem] border p-8 shadow-xl">
            <p style={{ color: 'var(--text-tertiary)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">
              About
            </p>

            <h2 style={{ color: 'var(--text-primary)' }} className="mt-4 text-3xl font-bold">
              Java full-stack developer in progress
            </h2>

            <p style={{ color: 'var(--text-secondary)' }} className="mt-4 leading-7">
              I focus on building backend and full-stack applications with Java, Spring Boot, REST APIs, databases, and modern frontend interfaces using React. My goal is to become a strong software developer by combining practical project work with continuous learning.
            </p>

            <div className="mt-8 grid gap-4">
              <div style={{ backgroundColor: 'var(--bg-tertiary)' }} className="rounded-3xl p-5">
                <p style={{ color: 'var(--text-primary)' }} className="text-sm font-semibold">
                  Core strengths
                </p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">
                  Java, Spring Boot, REST APIs, React, SQL, Full-Stack Development
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-tertiary)' }} className="rounded-3xl p-5">
                <p style={{ color: 'var(--text-primary)' }} className="text-sm font-semibold">Tools</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">
                  Git, GitHub, Maven, Postman, Swagger, Docker, Kubernetes
                </p>
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