import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export const smoothSpring = { type: 'spring', stiffness: 210, damping: 22 }

export const sectionStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
}

export const revealUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const revealSoft = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export const floatingLoop = {
  y: [0, -8, 0],
  transition: { duration: 7.5, repeat: Infinity, ease: 'easeInOut' },
}

export const glowPulseLoop = {
  opacity: [0.6, 1, 0.6],
  transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
}

export function useCursorTilt(maxTilt = 7) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [maxTilt, -maxTilt]), smoothSpring)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-maxTilt, maxTilt]), smoothSpring)

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    pointerX.set(x)
    pointerY.set(y)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return {
    tiltStyle: { rotateX, rotateY, transformPerspective: 1000 },
    tiltHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: resetTilt,
    },
  }
}
