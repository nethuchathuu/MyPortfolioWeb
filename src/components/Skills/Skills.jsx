import { useStaggerReveal } from '../../hooks/useScrollReveal'
import skillsData from './skillsData'

export default function Skills() {
  const containerRef = useStaggerReveal({
    origin: 'bottom',
    baseDelay: 400,
    interval: 200,
    childSelector: '.stagger-item',
  })

  return (
    <section
      id="skills"
      className="min-h-screen bg-bg-primary flex flex-col items-center justify-center px-[12%] py-24"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-main underline decoration-white underline-offset-8">
        My Skills
      </h2>

      <div
        ref={containerRef}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl w-full"
      >
        {skillsData.map((skill) => {
          const IconComponent = skill.icon
          return (
            <div key={skill.name} className="stagger-item">
              <div className="skill-box">
                <IconComponent className="skill-icon" />
                <h3 className="text-lg text-white font-medium">{skill.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
