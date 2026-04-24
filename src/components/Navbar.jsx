import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { navItems, playerProfile } from '../data/portfolioData'
import { smoothSpring, useCursorTilt } from '../utils/animations'

function NavLinkItem({ item, isActive, onActivate }) {
  const { tiltStyle, tiltHandlers } = useCursorTilt(4)

  return (
    <motion.a
      href={item.href}
      whileHover={{ y: -2, scale: 1.05 }}
      transition={smoothSpring}
      onClick={onActivate}
      {...tiltHandlers}
      style={tiltStyle}
      className={`group relative whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
        isActive
          ? 'border-cyan-300/40 bg-cyan-400/10 text-white shadow-[0_0_22px_rgba(34,211,238,0.36)]'
          : 'border-transparent text-slate-200 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white hover:shadow-neon'
      }`}
    >
      {item.label}
      <span className="pointer-events-none absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-300 group-hover:w-3/4" />
      {isActive && (
        <>
          <motion.span
            layoutId="nav-active-underline"
            className="pointer-events-none absolute bottom-1 left-1/2 h-[2px] w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.65)]"
          />
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)]"
          />
        </>
      )}
    </motion.a>
  )
}

function Navbar() {
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace('#', '')), [])
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const updateActiveSection = () => {
      const scrollAnchor = window.scrollY + 150
      let currentSection = sectionIds[0] ?? 'home'

      sections.forEach((section) => {
        if (section.offsetTop <= scrollAnchor) {
          currentSection = section.id
        }
      })

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection))
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds])

  return (
    <header className="sticky top-0 z-50 border-b border-violet-300/10 bg-slate-950/50 backdrop-blur-2xl">
      <motion.nav
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="nav-control mx-auto mt-2 flex w-full max-w-7xl flex-col gap-2 rounded-2xl px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="flex h-10 items-center justify-between">
          <a
            href="#home"
            className="font-['Space_Grotesk'] text-sm font-bold tracking-wider text-white transition-colors hover:text-cyan-200 sm:text-base"
          >
            {playerProfile.name}
          </a>
          <motion.span
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="heading-pulse rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200"
          >
            Portfolio Quest
          </motion.span>
        </div>

        <ul className="flex items-center gap-2 overflow-x-auto pb-1 md:overflow-visible">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <li key={item.label}>
                <NavLinkItem item={item} isActive={isActive} onActivate={() => setActiveSection(sectionId)} />
              </li>
            )
          })}
        </ul>
      </motion.nav>
    </header>
  )
}

NavLinkItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onActivate: PropTypes.func.isRequired,
}

export default Navbar
