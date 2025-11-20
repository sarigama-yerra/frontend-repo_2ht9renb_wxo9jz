import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_80%_20%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_500px_at_20%_80%,rgba(20,184,166,0.15),transparent_60%)]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1400&auto=format&fit=crop" alt="profile" className="w-full h-full object-cover" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-violet-500/20 mix-blend-screen"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I craft immersive, performant interfaces where design meets engineering. My focus is on cinematic user journeys, precise micro-interactions, and robust front-end architecture.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            From prototypes to production, I blend WebGL, motion, and modern frameworks to build next-generation web experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
