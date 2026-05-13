import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-white/95 border-b border-slate-200 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between max-w-6xl">
        <a href="#home" className="text-xl font-bold text-slate-900 tracking-tight">
          Vikki B.
        </a>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-slate-700">
          <a href="#home" className="transition-all duration-200 hover:text-slate-900 hover:scale-105">Home</a>
          <a href="#about" className="transition-all duration-200 hover:text-slate-900 hover:scale-105">About</a>
          <a href="#skills" className="transition-all duration-200 hover:text-slate-900 hover:scale-105">Skills</a>
          <a href="#projects" className="transition-all duration-200 hover:text-slate-900 hover:scale-105">Projects</a>
          <a href="#contact" className="transition-all duration-200 hover:text-slate-900 hover:scale-105">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar