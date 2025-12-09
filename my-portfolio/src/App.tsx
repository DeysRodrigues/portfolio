import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import CodePlayground from './components/CodePlayground'
import Contact from './components/Contact'
import Certificates from './components/Certificates'
import FeaturedProject from './components/FeaturedProject'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-poppins transition-colors duration-300">
      {/* Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero isLoading={isLoading} />
        <About isLoading={isLoading} />
        <Skills isLoading={isLoading} />
        <FeaturedProject isLoading={isLoading} />
        <Certificates isLoading={isLoading} />
        {/* <Articles isLoading={isLoading} /> */}
        {/* <Projects isLoading={isLoading} /> */}
        {/* <Experience isLoading={isLoading} /> */}
        <CodePlayground isLoading={isLoading} />
        <Contact isLoading={isLoading} />

      </main>
    </div>
  )
}

export default App