import { FaGithub } from 'react-icons/fa'
import { useStaggerReveal } from '../../hooks/useScrollReveal'
import projectsData from './projectsData'

export default function Projects() {
  const containerRef = useStaggerReveal({
    origin: 'bottom',
    baseDelay: 400,
    interval: 200,
    childSelector: '.stagger-item',
  })

  return (
    <section
      id="projects"
      className="min-h-screen bg-bg-secondary px-[12%] py-24 pt-40"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-main underline decoration-white underline-offset-8 text-center">
        My Projects
      </h2>

      <div
        ref={containerRef}
        className="flex flex-wrap justify-center gap-8 lg:gap-10"
      >
        {projectsData.map((project) => (
          <div key={project.title} className="stagger-item">
            <div className="project-card rounded-xl">
              {/* Card Header */}
              <div className="text-center py-4 px-4 bg-bg-secondary">
                <h5 className="text-lg font-semibold text-main">
                  {project.title}
                </h5>
              </div>

              {/* Card Image */}
              <div className="flex justify-center items-center flex-grow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img"
                />
              </div>

              {/* Card Overlay (appears on hover) */}
              <div className="card-overlay rounded-xl">
                <p className="text-sm text-center mb-4 overflow-y-auto max-h-[200px] px-2">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
