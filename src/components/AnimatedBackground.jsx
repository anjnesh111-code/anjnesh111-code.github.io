import { motion, useScroll, useTransform } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 2 + (index % 4),
  left: `${(index * 17) % 100}%`,
  top: `${(index * 23) % 100}%`,
  duration: 14 + (index % 6) * 2,
  delay: index * 0.35,
}))

function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const slowParallax = useTransform(scrollYProgress, [0, 1], [0, -120])
  const slowerParallax = useTransform(scrollYProgress, [0, 1], [0, -70])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: slowParallax }} className="cosmic-radial-layer absolute inset-0" />

      <motion.div
        className="corner-orb corner-orb-top-left"
        style={{ y: slowerParallax }}
        animate={{ x: [0, 12, 0], opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="corner-orb corner-orb-top-right"
        style={{ y: slowerParallax }}
        animate={{ x: [0, -10, 0], opacity: [0.24, 0.38, 0.24] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="corner-orb corner-orb-bottom-left"
        style={{ y: slowerParallax }}
        animate={{ x: [0, 8, 0], opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div style={{ y: slowParallax }} className="absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="bg-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -18 - particle.size * 2, 0],
              x: [0, particle.id % 2 === 0 ? 6 : -6, 0],
              opacity: [0.2, 0.75, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default AnimatedBackground
