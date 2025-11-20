import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-10 bg-black text-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
