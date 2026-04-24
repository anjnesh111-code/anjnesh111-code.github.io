import { motion } from 'framer-motion'
import { storyMilestones } from '../data/portfolioData'

function StoryModeSection() {
  return (
    <section id="story-mode" className="section-shell">
      <div className="mb-10">
        <h2 className="section-title">Story Mode</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Every model, dataset, and deployment is a new chapter in a long-form adventure toward intelligent products.
        </p>
      </div>

      <div className="space-y-5">
        {storyMilestones.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-panel flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">{step.era}</p>
              <h3 className="mt-2 font-['Space_Grotesk'] text-2xl font-semibold text-white">{step.title}</h3>
            </div>
            <p className="max-w-2xl text-slate-300">{step.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default StoryModeSection
