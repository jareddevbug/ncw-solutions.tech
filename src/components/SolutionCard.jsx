import { motion } from 'framer-motion'

const MotionArticle = motion.article

function SolutionCard({ solution, index, variants }) {
  return (
    <MotionArticle variants={variants} custom={index} className="neon-card rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
            {solution.eyebrow}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-white">{solution.title}</h3>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
          {solution.code}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-text-muted">{solution.description}</p>
      <ul className="mt-6 space-y-3">
        {solution.points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-sm text-slate-200">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"></span>
            {point}
          </li>
        ))}
      </ul>
    </MotionArticle>
  )
}

export default SolutionCard
