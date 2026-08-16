import React from 'react'
import { useTheme } from '../context/ThemeContext'

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }} className="border-b backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="mx-auto flex flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between max-w-6xl">
        <a href="#home" style={{ color: 'var(--text-primary)' }} className="text-xl font-bold tracking-tight">
          Vikki B.
        </a>
        <div style={{ color: 'var(--text-secondary)' }} className="flex flex-wrap justify-center items-center gap-4 text-sm font-medium">
          <a href="#home" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Home</a>
          <a href="#about" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">About</a>
          <a href="#experience" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Experience</a>
          <a href="#education" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Education</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Skills</a>
          <a href="#projects" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Projects</a>
          <a href="#courses" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Courses</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)' }} className="transition-all duration-200 hover:opacity-80 hover:scale-105">Contact</a>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: isDark ? 'rgb(51, 65, 85)' : 'rgb(226, 232, 240)',
              color: 'var(--text-primary)'
            }}
            className="ml-4 p-2 rounded-full hover:opacity-80 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.293 3.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L8 6.414V15a1 1 0 102 0V6.414l2.293 2.293a1 1 0 001.414-1.414l-4-4z"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar