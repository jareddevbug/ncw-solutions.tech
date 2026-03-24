function GlowButton({ children, href = '#', variant = 'primary', className = '' }) {
  const styles =
    variant === 'secondary'
      ? 'ghost-button'
      : 'neon-button'

  return (
    <a href={href} className={`${styles} ${className}`.trim()}>
      {children}
    </a>
  )
}

export default GlowButton
