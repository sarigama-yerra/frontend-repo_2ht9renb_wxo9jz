import { useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 origin-left" style={{ scaleX }} />
  )
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-black text-white selection:bg-cyan-500/40">
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}
