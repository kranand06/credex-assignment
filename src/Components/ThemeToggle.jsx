import React from 'react'
import { useEffect, useState } from "react";


function ThemeToggle() {
    const [isDark, setIsDark] = useState(() =>
      document.documentElement.classList.contains("dark")
    );
  
    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDark]);
  
    return (
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 text-xl transition-colors rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    );
  }

export default ThemeToggle