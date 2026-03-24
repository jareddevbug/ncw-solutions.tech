import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FeatureCard from '../components/FeatureCard'
import FaqItem from '../components/FaqItem'
import InsightStat from '../components/InsightStat'
import ProcessStepCard from '../components/ProcessStepCard'
import SiteHeader from '../components/SiteHeader'
import SolutionCard from '../components/SolutionCard'
import TeamMemberCard from '../components/TeamMemberCard'
import TestimonialCard from '../components/TestimonialCard'
import GlowButton from '../components/ui/GlowButton'
import SectionIntro from '../components/ui/SectionIntro'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const MotionDiv = motion.div
const MotionP = motion.p
const MotionH1 = motion.h1
const MotionButton = motion.button

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const features = [
  {
    icon: '01',
    title: 'Web application development',
    description:
      'We build custom web apps for operations, sales, HR, and customer-facing workflows with clean architecture and scalable frontends.',
    tags: ['Custom web apps', 'Admin dashboards', 'Business systems'],
  },
  {
    icon: '02',
    title: 'Mobile app development',
    description:
      'Launch responsive mobile experiences for Android and iOS that help teams and customers stay productive on the go.',
    tags: ['Cross-platform apps', 'Mobile UX', 'API integration'],
  },
  {
    icon: '03',
    title: 'Business software solutions',
    description:
      'From HRIS and POS platforms to inventory, booking, and reporting systems, we tailor software around your actual workflow.',
    tags: ['HRIS', 'POS systems', 'Process digitization'],
  },
  {
    icon: '04',
    title: 'Brand and launch websites',
    description:
      'Create landing pages, personal websites, and marketing sites that look premium, load fast, and convert better.',
    tags: ['Landing pages', 'Personal websites', 'Modern UI'],
  },
]

const metrics = [
  {
    label: 'Projects delivered',
    value: '120+',
    delta: '+18 this year',
    trend: 'up',
    note: 'We help businesses launch practical software, internal tools, and customer-facing platforms faster.',
  },
  {
    label: 'Average launch cycle',
    value: '4-8 wks',
    delta: 'faster delivery',
    trend: 'up',
    note: 'Focused MVPs, landing pages, and custom modules move from planning to production on a clear timeline.',
  },
  {
    label: 'Support response',
    value: '24 hrs',
    delta: '-35%',
    trend: 'down',
    note: 'Active projects get responsive communication, iteration support, and practical technical guidance.',
  },
]

const trendRows = [
  { label: 'HRIS rollout readiness', value: '92%', tone: 'text-emerald-400' },
  { label: 'POS transaction uptime', value: '99.9%', tone: 'text-emerald-400' },
  { label: 'Manual admin workload', value: '-37%', tone: 'text-emerald-400' },
]

const throughputBars = [
  'h-[30%]',
  'h-[42%]',
  'h-[36%]',
  'h-[54%]',
  'h-[63%]',
  'h-[58%]',
  'h-[74%]',
  'h-[66%]',
]

const industries = ['Retail', 'HR and Admin', 'Startups', 'Professional Services', 'Education', 'Healthcare']

const solutions = [
  {
    code: '01',
    eyebrow: 'HRIS Solutions',
    title: 'Human resource and employee management systems',
    description:
      'Digitize employee records, leave tracking, attendance, onboarding, and internal approvals with a secure and structured HR workflow.',
    points: ['Employee profiles and records', 'Attendance and leave modules', 'Admin approvals and reporting'],
  },
  {
    code: '02',
    eyebrow: 'Point of Sale',
    title: 'POS and sales operation platforms',
    description:
      'Centralize transactions, inventory, product listings, cashier workflows, and reporting into a POS system tailored to your business.',
    points: ['Sales and inventory tracking', 'Branch-level reporting', 'Receipt and transaction modules'],
  },
  {
    code: '03',
    eyebrow: 'Custom Platforms',
    title: 'Custom web apps and internal tools',
    description:
      'Build admin panels, client portals, booking systems, order management tools, or any workflow-specific platform your team needs.',
    points: ['Role-based dashboards', 'Workflow automation', 'Integration-ready architecture'],
  },
  {
    code: '04',
    eyebrow: 'Web Presence',
    title: 'Landing pages and personal websites',
    description:
      'Launch high-quality digital presence pages for founders, professionals, brands, and campaigns with strong UI and responsive performance.',
    points: ['Responsive frontend design', 'Conversion-focused layouts', 'Fast-loading launch pages'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery and planning',
    description:
      'We clarify your goals, user flow, feature priorities, and technical requirements before development begins.',
  },
  {
    number: '02',
    title: 'UI/UX and prototype design',
    description:
      'We shape the product structure, screens, and interactions so you can validate direction early and reduce rework.',
  },
  {
    number: '03',
    title: 'Development and iteration',
    description:
      'We build in phases, share progress consistently, and adapt features based on practical feedback and business needs.',
  },
  {
    number: '04',
    title: 'Launch and support',
    description:
      'After deployment, we help with fixes, enhancements, and next-step improvements so the product keeps moving forward.',
  },
]

const testimonials = [
  {
    quote:
      'They turned our manual HR process into a clean internal system that saved our team hours every week.',
    name: 'Angela Reyes',
    role: 'Operations Manager',
    company: 'BrightCore Retail',
  },
  {
    quote:
      'Our POS dashboard became much easier to use, and the reporting workflow finally matched how our branches actually operate.',
    name: 'Mark Villanueva',
    role: 'Business Owner',
    company: 'Northpoint Stores',
  },
  {
    quote:
      'From design to delivery, the process felt organized, collaborative, and focused on solving the right business problem.',
    name: 'Claire Santos',
    role: 'Founder',
    company: 'Launchline Studio',
  },
]

const faqs = [
  {
    question: 'What types of projects do you usually handle?',
    answer:
      'We work on web apps, mobile apps, HRIS systems, POS software, admin dashboards, landing pages, personal websites, and other custom business tools.',
  },
  {
    question: 'Can you build systems tailored to our internal workflow?',
    answer:
      'Yes. Custom workflow design is one of the main reasons businesses work with us. We scope the process first, then build around your actual operations.',
  },
  {
    question: 'Do you handle both design and development?',
    answer:
      'Yes. We can support planning, UI/UX design, frontend development, and the overall build process so you have one coordinated delivery path.',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. We can stay involved for post-launch fixes, feature updates, optimization, and long-term product improvements depending on your needs.',
  },
]

const teamMembers = [
  {
    initials: 'JS',
    name: 'Jared San Fernando',
    role: 'Software Developer',
    description:
      'Leads architecture, core implementation, and delivery planning for custom web applications, business platforms, and internal systems.',
    focus: ['System architecture', 'Custom web apps', 'API integration'],
  },
  {
    initials: 'AA',
    name: 'Alex Aquino',
    role: 'Software Developer',
    description:
      'Leads architecture, core implementation, and delivery planning for custom web applications, business platforms, and internal systems.',
    focus: ['System architecture', 'Custom web apps', 'API integration'],
  },
]

function HeroIllustration() {
  return (
    <div
      role="img"
      aria-label="Custom software services dashboard illustration placeholder"
      className="relative overflow-hidden rounded-4xl border border-cyan-300/15 bg-linear-to-br from-white/8 to-white/4 p-6 shadow-[0_0_0_1px_rgba(0,240,255,0.08),0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true"></div>
      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Active delivery board</p>
            <p className="mt-2 text-lg font-semibold text-white">Custom Software Pipeline</p>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            In Progress
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/8 bg-white/6 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-300">Delivery velocity</p>
              <p className="text-sm font-medium text-cyan-200">6 active sprints</p>
            </div>
              <div className="mt-6 flex h-36 items-end gap-2">
              {throughputBars.map((barClass) => (
                <span
                  key={barClass}
                  className={`flex-1 rounded-t-full bg-linear-to-t from-accent-blue to-accent-cyan opacity-85 ${barClass}`}
                ></span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/8 bg-white/6 p-4">
              <p className="text-sm text-slate-300">Project fit review</p>
              <p className="mt-3 text-3xl font-semibold text-white">15 apps</p>
              <p className="mt-2 text-sm text-emerald-300">Across web and mobile delivery</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/6 p-4">
              <p className="text-sm text-slate-300">Current solutions</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-center justify-between">
                  <span>HRIS platform</span>
                  <span className="text-cyan-200">Build phase</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>POS dashboard</span>
                  <span className="text-emerald-300">QA ready</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Landing page launch</span>
                  <span className="text-cyan-200">Design review</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 480)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="shell" id="top">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-140 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.14),transparent_38%)]"
      ></div>

      <SiteHeader />

      <main>
        <section className="section-frame py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <MotionDiv
              initial="hidden"
              animate="visible"
              variants={container}
              className="max-w-2xl"
            >
              <MotionP
                variants={fadeUp}
                className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200"
              >
                IT Solutions and Software Development
              </MotionP>
              <MotionH1
                variants={fadeUp}
                className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                Web and mobile apps built for <span className="gradient-text">real business needs</span>
              </MotionH1>
              <MotionP
                variants={fadeUp}
                className="mt-8 max-w-xl text-lg leading-8 text-text-muted"
              >
                We design and develop IT solutions such as HRIS, POS systems, custom web
                applications, personal websites, landing pages, and mobile apps that help
                businesses operate better and launch faster.
              </MotionP>
              <MotionDiv variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                <GlowButton href="#cta">Start Your Project</GlowButton>
                <GlowButton href="#dashboard" variant="secondary">
                  View Solution Types
                </GlowButton>
              </MotionDiv>
              <MotionDiv variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['HRIS', 'employee and admin systems'],
                  ['POS', 'sales and inventory platforms'],
                  ['Custom', 'web and mobile builds'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-2 text-sm text-text-muted">{label}</p>
                  </div>
                ))}
              </MotionDiv>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              <HeroIllustration />
            </MotionDiv>
          </div>
        </section>

        <section id="features" className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="Core Services"
            title="Software solutions tailored to the way your business actually works"
            description="From internal systems to customer-facing platforms, we build practical digital products that are fast, modern, and easier for teams to maintain as they grow."
          />

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                variants={fadeUp}
              />
            ))}
          </MotionDiv>
        </section>

        <section className="section-frame py-16 md:py-24">
          <div className="neon-card rounded-4xl p-6 md:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionIntro
                eyebrow="Why Businesses Work With Us"
                title="Built to look credible, work reliably, and scale with your operations"
                description="An IT solutions website usually needs trust-building content, not just a service list. These are the qualities clients typically care about before they inquire."
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:max-w-xl">
                {[
                  'Responsive web and mobile delivery',
                  'Custom workflows for real operations',
                  'Clean UI with modern frontend standards',
                  'Support after launch and iteration',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-cyan-300/14 bg-cyan-300/8 px-4 py-2 text-sm font-medium text-cyan-100"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="section-frame py-16 md:py-24">
          <div className="neon-card overflow-hidden rounded-4xl p-6 md:p-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
              >
                <SectionIntro
                  eyebrow="Solution Preview"
                  title="A quick look at the kind of systems we help businesses launch"
                  description="Whether you need HR tools, point-of-sale software, a booking system, a landing page, or a custom admin dashboard, we focus on clean UX, reliable delivery, and real operational value."
                />

                <div className="mt-8 space-y-4">
                  {trendRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-4"
                    >
                      <span className="text-sm text-slate-300">{row.label}</span>
                      <span className={`text-sm font-semibold ${row.tone}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </MotionDiv>

              <MotionDiv
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                className="grid gap-4 md:grid-cols-2"
              >
                {metrics.map((item, index) => (
                  <InsightStat
                    key={item.label}
                    item={item}
                    index={index}
                    variants={fadeUp}
                  />
                ))}

                <MotionDiv
                  variants={fadeUp}
                  custom={3}
                  className="rounded-2xl border border-cyan-300/18 bg-linear-to-br from-cyan-300/12 to-blue-500/10 p-5 md:col-span-2"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Recommended engagement</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        Start with a focused discovery session, scope the core workflow, then launch in phases
                      </h3>
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-background/40 px-4 py-2 text-sm font-semibold text-cyan-200">
                      Best for SMEs and startups
                    </span>
                  </div>
                </MotionDiv>
              </MotionDiv>
            </div>
          </div>
        </section>

        <section className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="Solution Types"
            title="Common systems and websites we build for growing businesses"
            description="This section helps visitors quickly understand the breadth of your IT services, especially if they are comparing agencies or freelancers."
          />

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.code}
                solution={solution}
                index={index}
                variants={fadeUp}
              />
            ))}
          </MotionDiv>
        </section>

        <section className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="Development Process"
            title="A simple delivery process that keeps projects clear and moving"
            description="For IT solutions websites, a visible process reduces uncertainty. It shows potential clients how work moves from idea to launch."
          />

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {processSteps.map((step, index) => (
              <ProcessStepCard key={step.number} step={step} index={index} variants={fadeUp} />
            ))}
          </MotionDiv>
        </section>

        <section className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="Client Feedback"
            title="The kind of outcomes clients usually want from an IT partner"
            description="Testimonials help visitors trust your capability before they reach out, especially when selling custom development services."
          />

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.company}`}
                testimonial={testimonial}
                index={index}
                variants={fadeUp}
              />
            ))}
          </MotionDiv>
        </section>

        <section id="team" className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="Our Team"
            title="A small, focused team building practical software for modern businesses"
            description="Adding a team section helps visitors connect your services to real people. It builds credibility and makes the business feel more established and approachable."
          />

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                variants={fadeUp}
              />
            ))}
          </MotionDiv>
        </section>

        <section className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions businesses often ask before starting a software project"
            description="FAQs are a practical section for IT service websites because they remove common hesitation around scope, workflow, and support."
          />

          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="mt-10 grid gap-4"
          >
            {faqs.map((item, index) => (
              <FaqItem key={item.question} item={item} index={index} variants={fadeUp} />
            ))}
          </MotionDiv>
        </section>

        <section id="location" className="section-frame py-16 md:py-24">
          <SectionIntro
            eyebrow="Location"
            title="Serving clients from Metro Manila and beyond"
            description="A location section gives the site a stronger business presence. This map uses OpenStreetMap and can be updated later with your exact office address."
          />

          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="neon-card rounded-4xlp-6">
              <h3 className="text-xl font-semibold text-white">NCW Solutions</h3>
              <div className="mt-5 space-y-4 text-sm leading-7 text-text-muted">
                <p>Makati City, Metro Manila, Philippines</p>
                <p>ncw-solutions.tech@gmail.com</p>
                <p>+63 917 555 0123</p>
                <p>
                  We collaborate with startups, SMEs, and growing companies that need
                  custom websites, mobile apps, HRIS systems, POS platforms, and internal
                  tools.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-cyan-300/14 bg-white/4 shadow-[0_0_0_1px_rgba(0,240,255,0.08),0_30px_80px_rgba(2,6,23,0.42)]">
              <iframe
                title="OpenStreetMap location of NCW Solutions in Makati City"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.008%2C14.547%2C121.040%2C14.567&layer=mapnik&marker=14.5577%2C121.0244"
                className="h-90 w-full border-0 md:h-105"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </MotionDiv>
        </section>

        <section id="cta" className="section-frame py-16 md:py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[36px] border border-cyan-300/14 bg-linear-to-br from-white/8 to-blue-500/8 px-6 py-10 shadow-[0_0_0_1px_rgba(0,240,255,0.08),0_30px_80px_rgba(2,6,23,0.42)] md:px-10 md:py-14"
          >
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30"></div>
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Build With Us
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Let&apos;s build your next web, mobile, or business software solution.
                </h2>
                <p className="mt-5 text-base leading-7 text-text-muted">
                  If you need an HRIS, POS system, landing page, personal website, custom
                  web app, or a tailored internal tool, we can help turn the idea into a
                  polished, launch-ready product.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <GlowButton href="#top">Request a Quote</GlowButton>
                <GlowButton href="#features" variant="secondary">
                  Explore Services
                </GlowButton>
              </div>
            </div>
          </MotionDiv>
        </section>
      </main>

      <AnimatePresence>
        {showBackToTop ? (
          <MotionButton
            type="button"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="fixed right-5 bottom-5 z-50 inline-flex h-13 w-13 items-center justify-center rounded-full border border-cyan-300/30 bg-linear-to-r from-accent-cyan to-accent-blue text-lg font-bold text-slate-950 shadow-[0_10px_30px_rgba(0,85,255,0.35)] transition hover:scale-105 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:right-8 md:bottom-8"
            aria-label="Back to top"
          >
            ↑
          </MotionButton>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default HomePage
