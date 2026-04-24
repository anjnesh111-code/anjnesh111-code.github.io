import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StoryModeSection from './components/StoryModeSection'
import MissionsSection from './components/MissionsSection'
import SkillTreeSection from './components/SkillTreeSection'
import BadgesSection from './components/BadgesSection'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <StoryModeSection />
          <MissionsSection />
          <SkillTreeSection />
          <BadgesSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
