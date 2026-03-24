import { motion } from 'framer-motion'

const MotionArticle = motion.article

function ProcessStepCard({ step, index, variants }) {
  return (
    <MotionArticle variants={variants} custom={index} className="neon-card rounded-3xl p-6">
      <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
        Step {step.number}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
      <p className="mt-4 text-sm leading-7 text-text-muted">{step.description}</p>
    </MotionArticle>
  )
}

export default ProcessStepCard
