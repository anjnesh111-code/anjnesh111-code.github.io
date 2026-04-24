import { motion } from 'framer-motion'
import { playerProfile } from '../data/portfolioData'
import XPBar from './XPBar'
import AvatarProfile from './AvatarProfile'
import { floatingLoop, revealSoft, sectionStagger, useCursorTilt } from '../utils/animations'

const xpPercent = Math.round((playerProfile.xp.current / playerProfile.xp.target) * 100)
const particles = Array.from({ length: 16 }, (_, index) => index)

function HeroSection() {
  const { tiltStyle, tiltHandlers } = useCursorTilt(5)

  return (
    <motion.section
      id="home"
      className="section-shell pt-24 sm:pt-28"
      variants={sectionStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        variants={revealSoft}
        animate={floatingLoop}
        {...tiltHandlers}
        style={tiltStyle}
        className="hero-dashboard relative overflow-hidden rounded-[2rem] border border-violet-300/30 bg-slate-950/55 p-8 shadow-neon backdrop-blur-2xl sm:p-12"
      >
        <div className="pointer-events-none absolute -top-20 right-0 h-60 w-60 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.span
              key={particle}
              className="absolute rounded-full bg-gradient-to-r from-cyan-300/75 to-violet-400/65 shadow-[0_0_12px_rgba(139,92,246,0.7)]"
              style={{
                width: `${(particle % 4) + 4}px`,
                height: `${(particle % 4) + 4}px`,
                left: `${(particle * 13) % 95}%`,
                top: `${(particle * 17) % 92}%`,
              }}
              animate={{
                y: [0, -14 - (particle % 6) * 2, 0],
                x: [0, particle % 2 === 0 ? 8 : -8, 0],
                opacity: [0.25, 0.85, 0.25],
              }}
              transition={{
                duration: 4 + (particle % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle * 0.12,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <motion.div variants={revealSoft} className="order-1 mx-auto lg:order-2 lg:mx-0">
            <AvatarProfile />
          </motion.div>

          <div className="order-2 lg:order-1">
            <motion.p
              variants={revealSoft}
              className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200"
            >
              System Role: {playerProfile.roleTag}
            </motion.p>

            <motion.h1
              variants={revealSoft}
              className="mt-6 max-w-5xl font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white sm:text-6xl"
            >
              Welcome to my <span className="gradient-journey-text heading-pulse">Data Science Journey</span>
            </motion.h1>

            <motion.p
              variants={revealSoft}
              className="mt-5 max-w-2xl text-lg text-slate-300"
            >
              {playerProfile.tagline}
            </motion.p>

            <motion.div
              variants={revealSoft}
              className="mt-10 rounded-2xl border border-violet-400/35 bg-slate-900/65 p-5"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-white">{playerProfile.title}</p>
                <div className="flex items-center gap-3 text-sm text-violet-200">
                  <span className="rounded-full border border-violet-400/35 bg-violet-500/15 px-3 py-1">Level 12 Data Scientist</span>
                  <span>{xpPercent}% XP</span>
                </div>
              </div>
              <XPBar currentXP={playerProfile.xp.current} nextLevelXP={playerProfile.xp.target} />

              <motion.div
                animate={{ y: [0, -5, 0], opacity: [0.78, 1, 0.78] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-5 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4"
              >
                <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-cyan-100">Mode: Live Ops</div>
                <div className="rounded-xl border border-violet-400/25 bg-violet-400/10 px-3 py-2 text-violet-100">Status: Online</div>
                <div className="rounded-xl border border-fuchsia-400/25 bg-fuchsia-400/10 px-3 py-2 text-fuchsia-100">Core: ML</div>
                <div className="rounded-xl border border-sky-400/25 bg-sky-400/10 px-3 py-2 text-sky-100">Pipeline: Active</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
