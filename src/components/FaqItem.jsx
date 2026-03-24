import { motion } from 'framer-motion'

const MotionDetails = motion.details

function FaqItem({ item, index, variants }) {
  return (
    <MotionDetails
      variants={variants}
      custom={index}
      className="group neon-card rounded-3xl p-5 open:border-cyan-300/25"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white marker:content-none">
        <span>{item.question}</span>
        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-semibold text-cyan-200 transition group-open:rotate-180">
          +
        </span>
      </summary>
      <p className="mt-4 pr-10 text-sm leading-7 text-text-muted">{item.answer}</p>
    </MotionDetails>
  )
}

export default FaqItem
