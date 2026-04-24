import { motion } from 'framer-motion'
import profileImage from '../assets/my_photo.jpeg'
import { floatingLoop, useCursorTilt } from '../utils/animations'

const orbitNodes = Array.from({ length: 8 }, (_, index) => index)

function AvatarProfile() {
  const { tiltStyle, tiltHandlers } = useCursorTilt(6)

  return (
    <motion.div
      animate={floatingLoop}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="relative mx-auto w-fit"
    >
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-[-18%] rounded-full bg-gradient-to-br from-violet-500/35 via-indigo-500/25 to-cyan-400/35 blur-3xl"
      />

      <motion.div
        {...tiltHandlers}
        whileHover={{ scale: 1.08 }}
        style={tiltStyle}
        className="relative rounded-[2rem] border border-violet-300/35 bg-white/[0.07] p-5 shadow-[0_28px_55px_rgba(2,6,23,0.62)] backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_34px_70px_rgba(76,29,149,0.45)]"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/15 via-transparent to-cyan-300/10" />

        <motion.div
          animate={{ opacity: [0.4, 0.95, 0.4], scale: [1, 1.12, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-5 rounded-full bg-violet-500/35 blur-2xl"
        />

        <motion.div
          animate={{ opacity: [0.25, 0.7, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-4 rounded-full bg-cyan-400/25 blur-3xl"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-1 rounded-full bg-gradient-to-r from-violet-500 via-blue-400 to-fuchsia-500 p-[2px]"
        >
          <div className="h-full w-full rounded-full bg-slate-950/80" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-[-3px] rounded-full border border-cyan-300/35"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-[-22px]"
        >
          {orbitNodes.map((node) => (
            <motion.span
              key={node}
              animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.25, 1] }}
              transition={{ duration: 2.4 + (node % 3), repeat: Infinity, delay: node * 0.15, ease: 'easeInOut' }}
              className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.95)]"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${node * 45}deg) translateY(-132px) translateX(-50%)`,
              }}
            />
          ))}
        </motion.div>

        <motion.img
          src={profileImage}
          alt="Anjnesh Singh Tomar profile avatar"
          animate={{
            y: [0, -3, 0],
            scale: [1, 1.015, 1],
            boxShadow: [
              '0 0 30px rgba(139,92,246,0.45)',
              '0 0 44px rgba(34,211,238,0.58)',
              '0 0 30px rgba(139,92,246,0.45)',
            ],
          }}
          whileHover={{ boxShadow: '0 0 70px rgba(99,102,241,0.78)' }}
          transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 h-40 w-40 rounded-full border-2 border-white/35 object-cover sm:h-56 sm:w-56"
        />
      </motion.div>
    </motion.div>
  )
}

export default AvatarProfile
