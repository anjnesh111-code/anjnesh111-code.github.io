import { motion } from 'framer-motion'
import { badges } from '../data/portfolioData'
import BadgeCard from './BadgeCard'
import { revealSoft, sectionStagger } from '../utils/animations'

function BadgesSection() {
  return (
    <motion.section
      id="badges"
      className="section-shell pb-12"
      variants={sectionStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.h2 variants={revealSoft} className="section-title heading-pulse">
        Badges
      </motion.h2>
      <motion.p variants={revealSoft} className="mt-3 max-w-2xl text-slate-300">
        Achievement artifacts earned across research rigor, internship exposure, and system-level skills.
      </motion.p>

      <motion.div variants={sectionStagger} className="mt-8 grid gap-6 md:grid-cols-3">
        {badges.map((badge, index) => (
          <BadgeCard key={badge.title} badge={badge} index={index} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default BadgesSection
