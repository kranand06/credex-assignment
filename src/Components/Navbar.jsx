import React from 'react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-background-light dark:bg-background-dark text-text1-light dark:text-text1-dark shadow-md">
          <div className="text-2xl font-bold">SoftSell</div>
          <div className="flex items-center gap-4">
            <a href="#how" className="hover:text-primary-light dark:hover:text-primary-dark">How It Works</a>
            <a href="#contact" className="hover:text-primary-light dark:hover:text-primary-dark">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
      );
    }

export default Navbar