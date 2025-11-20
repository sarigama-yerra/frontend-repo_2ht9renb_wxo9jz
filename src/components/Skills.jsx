import { motion } from 'framer-motion'
import { Code2, Cpu, Layers3, Atom, Cloud } from 'lucide-react'

const items = [
  { icon: Code2, label: 'React / Vite' },
  { icon: Atom, label: 'Framer Motion' },
  { icon: Layers3, label: 'Three / WebGL' },
  { icon: Cpu, label: 'TypeScript' },
  { icon: Cloud, label: 'Cloud / CI' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">Skills & Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.label}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md text-white overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-500/0 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <it.icon className="w-8 h-8 text-cyan-300 mb-4" />
              <div className="text-lg font-semibold">{it.label}</div>
              <div className="text-sm text-slate-300/80 mt-2">Motion-first UI, optimized and scalable.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
