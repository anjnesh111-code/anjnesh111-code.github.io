import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { floatingLoop, revealUp, useCursorTilt } from '../utils/animations'

function BadgeCard({ badge, index }) {
  const { tiltStyle, tiltHandlers } = useCursorTilt(6)

  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.05 }}
      {...tiltHandlers}
      style={tiltStyle}
      className="mission-card group glass-panel relative overflow-hidden p-6 hover:border-cyan-300/35 hover:shadow-[0_0_28px_rgba(34,211,238,0.24)]"
    >
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <motion.div animate={floatingLoop} className="relative">
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200">
          Unlocked
        </span>
        <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">{badge.title}</h3>
        <p className="mt-1 text-sm font-medium text-violet-200">{badge.subtitle}</p>
        <p className="mt-4 text-slate-300">{badge.detail}</p>
      </motion.div>
    </motion.article>
  )
}

BadgeCard.propTypes = {
  badge: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default BadgeCard
