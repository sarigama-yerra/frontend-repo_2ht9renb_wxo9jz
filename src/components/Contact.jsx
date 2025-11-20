import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_500px_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-12">Contact</h2>

        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="p-8 md:p-10 text-center space-y-6">
            <p className="text-slate-300 text-lg">Let’s create something extraordinary. Reach out and say hi.</p>

            <div className="flex items-center justify-center gap-4">
              <motion.a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
                whileHover={{ y: -2 }}
              >
                <Mail size={18} /> Email
              </motion.a>
              <motion.a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
                whileHover={{ y: -2 }}
              >
                <Github size={18} /> GitHub
              </motion.a>
              <motion.a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10"
                whileHover={{ y: -2 }}
              >
                <Linkedin size={18} /> LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
