import { useState } from 'react'
import { FaGithub, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import projectsData from './projectsData'

export default function Projects({ onSeeMore }) {
  const displayedProjects = projectsData.slice(0, 6)
  const items = [...displayedProjects, { isSeeMore: true }]
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }
  }

  return (
    <section id="projects" className="text-white w-full min-h-screen bg-bg-secondary relative pt-24 pb-12 overflow-hidden flex flex-col justify-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-center text-main underline decoration-white underline-offset-8 z-20 relative">
        My Projects
      </h2>

      <div className="flex flex-col items-center justify-center px-4 md:px-8 max-w-5xl mx-auto w-full relative z-10 flex-grow">

        {/* Interactive Stack Container */}
        <div className="relative w-full max-w-[95vw] md:max-w-3xl lg:max-w-4xl h-[520px] md:h-[360px] lg:h-[400px]">
          {items.map((item, index) => {
            const relativeIndex = index - activeIndex

            const isSwiped = relativeIndex < 0
            const isTop = relativeIndex === 0
            const isSecond = relativeIndex === 1
            const isThird = relativeIndex === 2

            let scale = 1
            let translateY = 0
            let translateX = 0
            let rotate = 0
            let opacity = 1
            let zIndex = items.length - index

            if (isSwiped) {
              scale = 0.9
              translateX = -500 // Fly out to the left
              translateY = 50
              rotate = -15
              opacity = 0
            } else if (isTop) {
              scale = 1
              translateY = 0
              translateX = 0
              rotate = 0
              opacity = 1
            } else if (isSecond) {
              scale = 0.95
              translateY = 25
              translateX = 0
              rotate = 0
              opacity = 0.8
            } else if (isThird) {
              scale = 0.90
              translateY = 50
              translateX = 0
              rotate = 0
              opacity = 0.4
            } else {
              scale = 0.85
              translateY = 75
              translateX = 0
              rotate = 0
              opacity = 0
            }

            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out"
                style={{
                  transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: isTop ? 'auto' : 'none'
                }}
              >
                {item.isSeeMore ? (
                  /* See More Card - Premium & Creative */
                  <article
                    className="relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 w-full h-full rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(0,255,81,0.15)] transition-all duration-500 cursor-pointer group overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSeeMore();
                    }}
                  >
                    {/* Animated Neon Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,81,0.1)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                    <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-[#00ff51]/20 to-[#00ff51]/5 border border-[#00ff51]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 group-hover:border-[#00ff51]">
                      {/* Pulse effect ring */}
                      <div className="absolute inset-0 rounded-full border border-[#00ff51] animate-ping opacity-20 group-hover:opacity-40"></div>
                      <FaArrowRight className="text-4xl md:text-5xl text-[#00ff51] group-hover:translate-x-3 transition-transform duration-500" />
                    </div>

                    <div className="text-center relative z-10">
                      <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-[#00ff51] group-hover:to-white transition-all duration-500 mb-3 tracking-tight">
                        Explore All Projects
                      </h1>
                      <p className="text-gray-500 text-sm md:text-base font-medium uppercase tracking-widest group-hover:text-[#00ff51]/70 transition-colors duration-500">
                        View Other Projects
                      </p>
                    </div>

                    {/* Inner glowing border */}
                    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[#00ff51]/20 pointer-events-none transition-colors duration-500"></div>
                  </article>
                ) : (
                  /* Project Card - Premium & Creative */
                  <article
                    className="relative bg-[#0d0d0d] border border-white/5 w-full h-full rounded-[2.5rem] flex flex-col md:flex-row overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer group"
                    onClick={isTop ? handleNext : undefined}
                  >
                    {/* Left Side: Content */}
                    <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col justify-between order-2 md:order-1 relative z-10 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md">
                      <div className="flex-grow flex flex-col overflow-hidden max-h-[60%] md:max-h-[70%]">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff51] to-emerald-300 mb-4 tracking-tight flex-shrink-0">
                          {item.title}
                        </h1>

                        {/* Scrollable Description (Fixes cut-off text) */}
                        <div className="overflow-y-auto pr-3 custom-scrollbar flex-grow">
                          <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-col gap-4 pt-4 border-t border-white/10 flex-shrink-0">
                        {/* Tech Stack Pills instead of plain text */}
                        <div className="flex flex-wrap gap-2 max-h-[50px] overflow-y-auto custom-scrollbar">
                          {item.techstack.split(',').map((tech, i) => (
                            <span key={i} className="bg-[#00ff51]/10 text-[#00ff51] border border-[#00ff51]/20 px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium tracking-wide whitespace-nowrap">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>

                        {item.github && (
                          <div className="flex">
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking GitHub link
                              className="group/btn relative overflow-hidden bg-white/5 text-white hover:text-black transition-all duration-500 px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold flex items-center gap-2 border border-white/10 hover:border-[#00ff51]"
                            >
                              <span className="absolute inset-0 bg-[#00ff51] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                              <FaGithub className="text-base md:text-lg relative z-10" />
                              <span className="relative z-10">Source Code</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side: Image with creative floating effect */}
                    <div className="w-full md:w-[45%] h-[40%] md:h-full relative overflow-hidden order-1 md:order-2 flex items-center justify-center bg-[#050505]">
                      {/* Decorative background glow behind image */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(0,255,81,0.1)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                    </div>

                    {/* Inner glowing neon border (appears on hover) */}
                    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[#00ff51]/30 pointer-events-none transition-colors duration-500 z-20"></div>
                  </article>
                )}
              </div>
            )
          })}
        </div>

        {/* Controls Container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-10 md:mt-12 z-20">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`p-2.5 md:p-3 rounded-full border transition-all duration-300 transform ${activeIndex === 0
                ? 'bg-black/50 border-gray-600 text-gray-600 cursor-not-allowed'
                : 'bg-black border-[#00ff51]/50 text-[#00ff51] hover:bg-[#00ff51] hover:text-black hover:-translate-x-1 shadow-[0_0_15px_rgba(0,255,81,0.2)]'
              }`}
          >
            <FaArrowLeft className="text-lg md:text-xl" />
          </button>

          <div className="text-main font-bold text-lg md:text-xl tracking-widest bg-black/50 px-4 py-1 rounded-full border border-main/20">
            {activeIndex + 1} <span className="text-white/50 text-base">/ {items.length}</span>
          </div>

          <button
            onClick={handleNext}
            disabled={activeIndex === items.length - 1}
            className={`p-2.5 md:p-3 rounded-full border transition-all duration-300 transform ${activeIndex === items.length - 1
                ? 'bg-black/50 border-gray-600 text-gray-600 cursor-not-allowed'
                : 'bg-black border-[#00ff51]/50 text-[#00ff51] hover:bg-[#00ff51] hover:text-black hover:translate-x-1 shadow-[0_0_15px_rgba(0,255,81,0.2)]'
              }`}
          >
            <FaArrowRight className="text-lg md:text-xl" />
          </button>
        </div>

      </div>
    </section>
  )
}
