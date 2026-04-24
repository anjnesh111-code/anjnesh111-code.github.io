import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

function XPBar({ currentXP, nextLevelXP, className = '' }) {
  const safeNextLevelXP = Math.max(nextLevelXP, 1)
  const progress = Math.min((currentXP / safeNextLevelXP) * 100, 100)

  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-violet-200">XP Progress</p>
        <p className="text-sm text-slate-300">
          {currentXP.toLocaleString()} / {nextLevelXP.toLocaleString()}
        </p>
      </div>

      <div className="relative h-3 overflow-hidden rounded-full border border-white/10 bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400 shadow-[0_0_16px_rgba(99,102,241,0.75)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.85, 0.3], scaleX: [1, 1.03, 1] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 to-blue-400/40 blur-[3px]"
        />
      </div>
    </div>
  )
}

export default XPBar

XPBar.propTypes = {
  currentXP: PropTypes.number.isRequired,
  nextLevelXP: PropTypes.number.isRequired,
  className: PropTypes.string,
}
