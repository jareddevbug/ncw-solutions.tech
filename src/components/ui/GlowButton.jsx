function GlowButton({ children, href = '#', variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'secondary'
      ? 'ghost-button'
      : 'neon-button'

  return (
    <a href={href} className={`${styles} ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}

export default GlowButton
