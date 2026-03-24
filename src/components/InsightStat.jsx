import { motion } from 'framer-motion'

const MotionDiv = motion.div
const MotionParagraph = motion.p

function InsightStat({ item, variants, index }) {
  const trendTone = item.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
  const trendSymbol = item.trend === 'up' ? '▲' : '▼'

  return (
    <MotionDiv
      variants={variants}
      custom={index}
      className="rounded-2xl border border-white/8 bg-white/4 p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-text-muted">{item.label}</p>
          <MotionParagraph
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.45 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-white"
          >
            {item.value}
          </MotionParagraph>
        </div>
        <span className={`text-sm font-semibold ${trendTone}`}>
          {trendSymbol} {item.delta}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{item.note}</p>
    </MotionDiv>
  )
}

export default InsightStat
