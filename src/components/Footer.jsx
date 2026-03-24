function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="section-frame py-12">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:col-span-2">
            <a href="#top" className="inline-flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-linear-to-br from-accent-cyan/30 to-accent-blue/40 text-sm font-bold tracking-[0.16em] text-white shadow-[0_0_28px_rgba(0,240,255,0.16)]">
                IT
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">NCW Solutions</span>
                <span className="block text-xs uppercase tracking-[0.24em] text-text-muted">
                  Web and Mobile Development
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-text-muted">
              We build practical IT solutions for businesses that need modern websites,
              mobile apps, HRIS platforms, POS systems, and custom software tailored to
              real workflows.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><a className="transition hover:text-white" href="#features">Services</a></li>
              <li><a className="transition hover:text-white" href="#dashboard">Solutions</a></li>
              <li><a className="transition hover:text-white" href="#team">Team</a></li>
              <li><a className="transition hover:text-white" href="#location">Location</a></li>
              <li><a className="transition hover:text-white" href="#cta">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>ncw-solutions@ncwsolutions.tech</li>
              <li>+63 917 555 0123</li>
              <li>Makati City, Metro Manila</li>
              <li>Mon - Fri · 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-sm text-text-muted">
          Copyright {new Date().getFullYear()} NCW Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
