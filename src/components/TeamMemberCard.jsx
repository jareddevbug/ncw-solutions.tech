import { motion } from 'framer-motion'

const MotionArticle = motion.article

function TeamMemberCard({ member, index, variants }) {
  return (
    <MotionArticle variants={variants} custom={index} className="neon-card rounded-3xl p-6">
      <div className="flex items-center gap-4">
        <div
          role="img"
          aria-label={`${member.name} profile placeholder`}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-linear-to-br from-accent-cyan/18 to-accent-blue/18 text-lg font-semibold text-white"
        >
          {member.initials}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
          <p className="mt-1 text-sm text-cyan-200">{member.role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-text-muted">{member.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {member.focus.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </MotionArticle>
  )
}

export default TeamMemberCard
