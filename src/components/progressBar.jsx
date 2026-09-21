function ProgressBar({ value, className = "" }) {
  return (
    <div className={`progress-bar ${className}`} aria-label={`${value}% klart`}>
      <div className="progress" style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  )
}

export default ProgressBar
