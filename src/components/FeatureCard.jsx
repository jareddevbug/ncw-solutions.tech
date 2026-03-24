import { motion } from 'framer-motion'

const MotionArticle = motion.article

function FeatureCard({ feature, index, variants }) {
  return (
    <MotionArticle
      variants={variants}
      custom={index}
      className="neon-card group flex h-full flex-col rounded-3xl p-6"
    >
      <div
        role="img"
        aria-label={`${feature.title} feature icon placeholder`}
        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/18 to-blue-500/12 text-xl text-cyan-200 shadow-[0_0_32px_rgba(0,240,255,0.12)]"
      >
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-7 text-text-muted">{feature.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {feature.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </MotionArticle>
  )
}

export default FeatureCard
