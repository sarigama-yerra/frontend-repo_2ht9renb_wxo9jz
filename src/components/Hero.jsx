import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'

function useTypewriter(text = '', speed = 40) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setOut(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return out
}

export default function Hero() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const parallax1 = useTransform(smoothX, [0, 1], ['-10px', '10px'])
  const parallax2 = useTransform(smoothY, [0, 1], ['-10px', '10px'])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      mouseX.set(x)
      mouseY.set(y)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  const title = 'Your Name — Creative Developer'
  const typed = useTypewriter('Futuristic experiences. Elegant code. Cinematic web.', 24)

  const [soundOn, setSoundOn] = useState(false)
  const audioRef = useRef(null)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (soundOn) {
      const play = async () => {
        try { await audio.play() } catch {}
      }
      play()
    } else {
      audio.pause()
    }
  }, [soundOn])

  const gradientMask = useMemo(() => (
    'radial-gradient(1200px 600px at 50% 60%, rgba(59,130,246,0.25), transparent 60%)'
  ), [])

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic gradient overlays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: gradientMask, x: parallax1, y: parallax2 }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_70%_30%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_500px_at_30%_70%,rgba(20,184,166,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-blue-400 to-violet-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]"
            whileHover={{ textShadow: '0 0 24px rgba(56,189,248,0.6)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-blue-200/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {typed}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              Explore Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/80 to-violet-500/80 hover:from-cyan-400 hover:to-violet-400 text-white shadow-lg shadow-violet-500/20 transition-all">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="mx-auto w-px h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent" aria-hidden
            animate={{ scaleY: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>

        {/* Sound toggle */}
        <motion.button
          onClick={() => setSoundOn((s) => !s)}
          className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md"
          whileTap={{ scale: 0.95 }}
        >
          {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          <span className="text-sm">Ambient</span>
        </motion.button>
        <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2022/03/21/audio_6e6f4e3d5d.mp3?filename=cyber-ambient-110997.mp3" loop preload="none" volume="0.15" />

        {/* Floating sparkles reacting to cursor */}
        <motion.div
          className="absolute top-24 right-24 text-cyan-300/80"
          style={{ x: parallax1, y: parallax2 }}
          animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 3 }}
        >
          <Sparkles />
        </motion.div>
      </div>
    </section>
  )
}
