import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Cinematic Web App',
    tag: '3D + Motion',
    description: 'A WebGL-enhanced app with cinematic transitions and multi-layer parallax.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Interactive Portfolio',
    tag: 'Spline + Framer',
    description: 'An immersive personal site using Spline scenes and physics-based motion.',
    image: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Data-Driven Dashboard',
    tag: 'Performance',
    description: 'High-FPS interactions and real-time charts for data exploration.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(p)}
              className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative w-full aspect-[4/3]">
                <img src={p.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-sm text-cyan-300">{p.tag}</div>
                <div className="text-xl font-semibold text-white">{p.title}</div>
                <div className="text-slate-300/90 mt-1">{p.description}</div>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div className="fixed inset-0 z-50 grid place-items-center p-6 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                layoutId={active.title}
                className="relative max-w-3xl w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-black/90"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              >
                <div className="w-full aspect-video">
                  <img src={active.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-cyan-300 text-sm">{active.tag}</div>
                  <h3 className="text-2xl font-bold text-white">{active.title}</h3>
                  <p className="text-slate-300 mt-2">{active.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
