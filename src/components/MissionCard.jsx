import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { floatingLoop, revealUp, useCursorTilt } from '../utils/animations'

const difficultyStyles = {
  Easy: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
  Medium: 'border-amber-400/35 bg-amber-500/15 text-amber-200',
  Hard: 'border-rose-400/35 bg-rose-500/15 text-rose-200',
}

function MissionCard({ mission, index }) {
  const { tiltStyle, tiltHandlers } = useCursorTilt(7)

  return (
    <motion.a
      href={mission.link}
      target="_blank"
      rel="noreferrer"
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -10, scale: 1.05 }}
      {...tiltHandlers}
      style={tiltStyle}
      className="mission-card group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-300/35 hover:shadow-[0_0_34px_rgba(139,92,246,0.3)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-400/0 opacity-80 transition-all duration-500 group-hover:from-violet-500/15 group-hover:via-fuchsia-500/10 group-hover:to-cyan-400/15" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-cyan-300/25" />

      <motion.div animate={floatingLoop} className="relative flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between">
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${difficultyStyles[mission.difficulty]}`}>
            {mission.difficulty}
          </span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08 }}
            className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200"
          >
            +{mission.xpReward} XP
          </motion.span>
        </div>

        <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">{mission.title}</h3>
        <p className="mt-3 text-slate-300">{mission.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {mission.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 text-sm font-semibold text-violet-200 transition-colors group-hover:text-cyan-100">
          Mission Unlocked {'->'}
        </div>
      </motion.div>
    </motion.a>
  )
}

MissionCard.propTypes = {
  mission: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    difficulty: PropTypes.oneOf(['Easy', 'Medium', 'Hard']).isRequired,
    xpReward: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

export default MissionCard
