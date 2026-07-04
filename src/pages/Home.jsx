import React from "react";
import Viki_Bembade from "../assets/Viki_Bembade.pdf";
import ProfileImg from "../assets/profile.png";
import Linkes from "../componant/Linkes";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-center">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Animated Profile */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative flex items-center justify-center w-[400px] h-[400px]">
                {/* Rotating Glow Ring */}
                <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(#00f5ff,#3b82f6,#8b5cf6,#ff00aa,#00f5ff)] blur-md"></div>

                {/* Inner Background */}
                <div className="absolute w-[390px] h-[390px] rounded-full bg-slate-900"></div>

                {/* White Border */}
                <div className="absolute w-[382px] h-[382px] rounded-full bg-white"></div>

                {/* Profile Image */}
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="relative z-10 w-[370px] h-[370px] rounded-full object-cover"
                />
              </div>
            </div>

            {/* Typing Animation */}
            <h6 style={{ color: 'var(--text-primary)' }} className="text-2xl md:text-4xl font-bold leading-tight">
              <TypeAnimation
                sequence={[
                  "Hi, I'm Vikki",
                  3000,
                  "Hi, I'm Backend Developer",
                  3000,
                  "Hi, I'm Frontend Developer",
                  3000,
                  "Hi, I'm Full Stack Developer",
                  3000,
                ]}
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </h6>

            <p style={{ color: 'var(--text-secondary)' }} className="max-w-2xl text-lg leading-8">
              I build attractive, user-friendly applications using modern
              tools. My focus is on clean design, solid performance, and
              polished user experiences.
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

          {/* Right Section */}
          <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }} className="w-full max-w-xl rounded-[2rem] border p-8 shadow-xl">
            <p style={{ color: 'var(--text-tertiary)' }} className="text-sm uppercase tracking-[0.3em] font-semibold">
              About
            </p>

            <h2 style={{ color: 'var(--text-primary)' }} className="mt-4 text-3xl font-bold">
              A thoughtful full-stack developer
            </h2>

            <p style={{ color: 'var(--text-secondary)' }} className="mt-4 leading-7">
              I create responsive, accessible applications with clean structure
              and consistent spacing. My goal is to make each application feel
              modern and easy to use.
            </p>

            <div className="mt-8 grid gap-4">
              <div style={{ backgroundColor: 'var(--bg-tertiary)' }} className="rounded-3xl p-5">
                <p style={{ color: 'var(--text-primary)' }} className="text-sm font-semibold">
                  Core strengths
                </p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">
                  React, Tailwind, Java, HTML, CSS, JavaScript
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--bg-tertiary)' }} className="rounded-3xl p-5">
                <p style={{ color: 'var(--text-primary)' }} className="text-sm font-semibold">Tools</p>
                <p style={{ color: 'var(--text-secondary)' }} className="mt-2 text-sm">
                  Git, GitHub, VS Code, Vite
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
  );
};

export default Home;