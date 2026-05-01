import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import OtherProjects from './components/Projects/OtherProjects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [showOtherProjects, setShowOtherProjects] = useState(false)

  const handleBackToProjects = () => {
    setShowOtherProjects(false)
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'instant' })
      }
    }, 10)
  }

  if (showOtherProjects) {
    return (
      <div className="font-poppins bg-bg-primary text-white min-h-screen overflow-x-hidden">
        <OtherProjects onBack={handleBackToProjects} />
        <Footer />
      </div>
    )
  }
  return (
    <div className="font-poppins bg-bg-primary text-white min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects onSeeMore={() => setShowOtherProjects(true)} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
