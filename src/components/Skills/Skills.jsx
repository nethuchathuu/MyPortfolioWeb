import { useState, useEffect } from 'react'
import skillsData from './skillsData'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useStaggerReveal } from '../../hooks/useScrollReveal'

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [animating, setAnimating] = useState(false)

  const containerRef = useStaggerReveal({
    origin: 'bottom',
    baseDelay: 200,
    interval: 100,
    childSelector: '.skills-carousel-container',
  })

  const total = skillsData.length
  const current = skillsData[activeIndex]

  function navigate(dir, targetIndex = null) {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      if (targetIndex !== null) {
        setActiveIndex(targetIndex)
      } else {
        setActiveIndex((prev) =>
          dir === 'right' ? (prev + 1) % total : (prev - 1 + total) % total
        )
      }
      setAnimating(false)
    }, 400) // matches CSS transition duration
  }

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') navigate('right')
      if (e.key === 'ArrowLeft') navigate('left')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [animating])

  const slideClass = animating
    ? direction === 'right'
      ? 'slide-exit-left'
      : 'slide-exit-right'
    : direction === 'right'
      ? 'slide-enter-right'
      : direction === 'left'
        ? 'slide-enter-left'
        : 'slide-enter'

  return (
    <section
      id="skills"
      className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-[8%] py-24 relative overflow-hidden"
    >
      {/* Background ambient glow based on category color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[150px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: current.color }}
      />

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-5 text-main underline decoration-white underline-offset-8 relative z-10">
        My Skills
      </h2>
      <p className="text-gray-400 text-lg mb-12 text-center relative z-10">
        Technologies & tools I work with
      </p>

      <div ref={containerRef} className="w-full max-w-5xl relative z-10 skills-carousel-container">
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-12 z-20">
          <button 
            onClick={() => navigate('left')}
            className="p-3 md:p-4 rounded-full bg-bg-secondary border-2 border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg group flex items-center justify-center"
            style={{ 
              borderColor: animating ? 'transparent' : current.color,
              boxShadow: !animating ? `0 0 15px ${current.color}40` : 'none'
            }}
            aria-label="Previous category"
          >
            <FiChevronLeft 
              className="text-2xl text-white transition-colors duration-300" 
              style={{ color: animating ? 'white' : current.color }} 
            />
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-12 z-20">
          <button 
            onClick={() => navigate('right')}
            className="p-3 md:p-4 rounded-full bg-bg-secondary border-2 border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg group flex items-center justify-center"
            style={{ 
              borderColor: animating ? 'transparent' : current.color,
              boxShadow: !animating ? `0 0 15px ${current.color}40` : 'none'
            }}
            aria-label="Next category"
          >
            <FiChevronRight 
              className="text-2xl text-white transition-colors duration-300" 
              style={{ color: animating ? 'white' : current.color }} 
            />
          </button>
        </div>

        {/* Carousel Content */}
        <div className="overflow-hidden px-8 md:px-16 py-8 min-h-[400px] flex flex-col justify-center">
          <div className={`${slideClass}`}>
            {/* Category Header */}
            <div className="flex flex-col items-center mb-10">
              <span 
                className="text-sm font-bold tracking-[0.2em] uppercase mb-2 transition-colors duration-500"
                style={{ color: current.color }}
              >
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                {current.category}
              </h3>
              <div 
                className="h-1 rounded-full transition-all duration-500 w-24" 
                style={{ backgroundColor: current.color, boxShadow: `0 0 10px ${current.color}` }} 
              />
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-5 md:gap-6">
              {current.skills.map((skill, idx) => {
                const IconComponent = skill.icon
                return (
                  <div
                    key={skill.name}
                    className="skill-carousel-card"
                    style={{
                      '--cat-color': current.color,
                      animationDelay: `${idx * 0.1}s`,
                    }}
                  >
                    <div className="skill-card-glow" />
                    <div className="skill-card-inner">
                      <IconComponent className="skill-card-icon" />
                      <span className="skill-card-name">{skill.name}</span>
                    </div>
                    <div className="skill-card-shine" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {skillsData.map((group, idx) => (
            <button
              key={group.category}
              onClick={() => {
                if (idx === activeIndex || animating) return
                navigate(idx > activeIndex ? 'right' : 'left', idx)
              }}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                idx === activeIndex ? 'w-10' : 'w-2.5 hover:scale-125 bg-gray-600'
              }`}
              style={{ 
                backgroundColor: idx === activeIndex ? group.color : undefined,
                boxShadow: idx === activeIndex ? `0 0 10px ${group.color}` : 'none'
              }}
              aria-label={`Go to ${group.category}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
