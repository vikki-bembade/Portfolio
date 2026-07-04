import React from 'react'
import NavBar from './NavBar'
import Linkes from './Linkes'

const Header = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }} className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b">
      <NavBar />
    
    </div>
  )
}

export default Header