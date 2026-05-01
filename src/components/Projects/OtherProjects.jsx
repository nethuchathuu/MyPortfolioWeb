import { useState, useEffect } from 'react'
import { FaArrowLeft, FaGithub, FaArrowUp } from 'react-icons/fa'
import projectsData from './projectsData'

export default function OtherProjects({ onBack }) {
  const otherProjects = projectsData.slice(6)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-24 px-[5%] md:px-[10%] pb-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
          <button 
            onClick={onBack}
            className="md:absolute left-0 top-1/2 md:-translate-y-1/2 flex items-center gap-2 text-gray-400 hover:text-main transition-all duration-300 bg-bg-secondary/50 hover:bg-bg-secondary py-3 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,81,0.2)] mb-8 md:mb-0 w-fit"
          >
            <FaArrowLeft /> Back to Home
          </button>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main underline decoration-white underline-offset-8 mx-auto text-center">
            Other Projects
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-main/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_35px_rgba(0,255,81,0.15)] flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Overlay Tech Stack Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-black/60 backdrop-blur-md text-main text-xs font-semibold px-3 py-1.5 rounded-full border border-main/30 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    {project.techstack.split(',')[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-bg-secondary to-black/40">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-main transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <div className="text-xs text-gray-500 w-[70%] truncate" title={project.techstack}>
                    {project.techstack}
                  </div>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#111] text-white hover:bg-main hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,255,81,0.4)]"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-main text-black hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,81,0.5)] z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  )
}
