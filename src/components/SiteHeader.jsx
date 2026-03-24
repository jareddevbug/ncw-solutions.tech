import { useState } from 'react'
import { motion } from 'framer-motion'
import GlowButton from './ui/GlowButton'

const MotionHeader = motion.header
const navItems = [
  { href: '#features', label: 'Services' },
  { href: '#dashboard', label: 'Solutions' },
  { href: '#team', label: 'Team' },
  { href: '#location', label: 'Location' },
  { href: '#cta', label: 'Contact' },
]

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

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
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <GlowButton href="#cta" className="hidden md:inline-flex">
            Book a Discovery Call
          </GlowButton>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-300/30 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              ></span>
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden ${
            isOpen ? 'mt-5 max-h-96 opacity-100' : 'mt-0 max-h-0 opacity-0'
          }`}
        >
          <nav aria-label="Mobile navigation" className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/8 hover:text-white focus:outline-none focus-visible:bg-white/8"
                >
                  {item.label}
                </a>
              ))}
              <GlowButton href="#cta" className="mt-3 w-full" onClick={handleNavClick}>
                Book a Discovery Call
              </GlowButton>
            </div>
          </nav>
        </div>
      </div>
    </MotionHeader>
  )
}

export default SiteHeader
