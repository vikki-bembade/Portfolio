import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)', borderTopColor: 'var(--border-color)' }} className="py-6 border-t transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Vikki Bembade. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer