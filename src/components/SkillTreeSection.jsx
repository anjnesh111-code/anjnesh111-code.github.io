import { motion } from 'framer-motion'
import { skillTree } from '../data/portfolioData'

function SkillTreeSection() {
  return (
    <section id="skill-tree" className="section-shell">
      <h2 className="section-title">Skill Tree</h2>
      <p className="mt-3 max-w-2xl text-slate-300">
        Progression nodes that power my current gameplay loop: build, evaluate, optimize, and ship.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {skillTree.map((skill, index) => (
          <motion.article
            key={skill.category}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-panel p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">{skill.category}</h3>
              <span className="text-sm font-medium text-violet-200">{skill.level}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.12, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
              />
            </div>
            <p className="mt-4 text-slate-300">{skill.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default SkillTreeSection
