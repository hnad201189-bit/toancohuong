export default function ProgressBar({ value, size = 'md', tone = 'primary' }) {
  return (
    <div className={`progress progress--${size} progress--${tone}`}>
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${value}%` }} />
      </div>
      <span className="progress__label">{value}%</span>
    </div>
  )
}
