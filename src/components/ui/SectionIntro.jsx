function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`.trim()}>
      <p className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="section-title mt-6">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}

export default SectionIntro
