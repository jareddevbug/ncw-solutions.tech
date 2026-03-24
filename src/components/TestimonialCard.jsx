import { motion } from 'framer-motion'

const MotionArticle = motion.article

function TestimonialCard({ testimonial, index, variants }) {
  return (
    <MotionArticle variants={variants} custom={index} className="neon-card rounded-3xl p-6">
      <p className="text-base leading-8 text-slate-200">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 border-t border-white/8 pt-5">
        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
        <p className="mt-1 text-sm text-text-muted">
          {testimonial.role} · {testimonial.company}
        </p>
      </div>
    </MotionArticle>
  )
}

export default TestimonialCard
