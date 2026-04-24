import { motion } from 'framer-motion'
import { missions } from '../data/portfolioData'
import MissionCard from './MissionCard'
import { revealSoft, sectionStagger } from '../utils/animations'

function MissionsSection() {
  return (
    <motion.section
      id="missions"
      className="section-shell"
      variants={sectionStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={revealSoft} className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="section-title heading-pulse">Missions</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            High-impact data science quests selected from real builds across ML, RAG, and engineering.
          </p>
        </div>
      </motion.div>

      <motion.div variants={sectionStagger} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {missions.map((mission, index) => (
          <MissionCard key={mission.title} mission={mission} index={index} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default MissionsSection
