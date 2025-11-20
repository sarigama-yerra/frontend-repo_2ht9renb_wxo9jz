import { motion } from 'framer-motion'

const items = [
  { year: '2024', role: 'Senior Frontend Engineer', place: 'NeoTech Labs', desc: 'Led motion-first design system, 60 FPS interactions.' },
  { year: '2022', role: 'Creative Developer', place: 'Studio X', desc: 'Built immersive brand experiences with WebGL and Spline.' },
  { year: '2020', role: 'Frontend Engineer', place: 'Product Co.', desc: 'Shipped performant dashboards and microfrontends.' },
]

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">Experience</h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-violet-400/50 to-transparent" />

          <div className="space-y-12">
            {items.map((it, idx) => (
              <motion.div
                key={it.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className={`relative grid md:grid-cols-2 gap-6 ${idx % 2 ? 'md:text-left' : 'md:text-right'}`}
              >
                <div className={`${idx % 2 ? 'md:order-2' : ''}`}>
                  <div className="text-violet-300 font-semibold">{it.year}</div>
                  <div className="text-white text-xl font-bold">{it.role}</div>
                  <div className="text-slate-300">{it.place}</div>
                </div>
                <div className="text-slate-300/90">{it.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
