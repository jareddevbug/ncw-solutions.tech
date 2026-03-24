import { motion } from 'framer-motion'
import GlowButton from './ui/GlowButton'

const MotionHeader = motion.header

function SiteHeader() {
  return (
    <MotionHeader
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-40 border-b border-white/8 bg-background/70 backdrop-blur-xl"
    >
      <div className="section-frame py-6">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-accent-cyan/30 to-accent-blue/40 shadow-[0_0_28px_rgba(0,240,255,0.16)]">
              <span className="text-sm font-bold tracking-[0.16em] text-white">IT</span>
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-white">NCW Solutions</span>
              <span className="block text-xs uppercase tracking-[0.24em] text-text-muted">
                Web and Mobile Development
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white" href="#features">
              Services
            </a>
            <a className="text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white" href="#dashboard">
              Solutions
            </a>
            <a className="text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white" href="#cta">
              Contact
            </a>
          </nav>

          <GlowButton href="#cta" className="hidden md:inline-flex">
            Book a Discovery Call
          </GlowButton>
        </div>
      </div>
    </MotionHeader>
  )
}

export default SiteHeader
