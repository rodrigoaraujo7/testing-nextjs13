'use client'
import React from 'react'
import { useTheme } from 'next-themes'

const Button = () => {
  const { theme, setTheme } = useTheme()
  // const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      className="bg-dark-background dark:bg-light-background transition-all duration-100 text-primary-text dark:text-dark-background px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32"
    >
      Change theme mode
    </button>
  )
}

export default Button
