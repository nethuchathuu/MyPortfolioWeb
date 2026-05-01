import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function About() {
  const imgRef = useScrollReveal({ origin: 'left', delay: 500 })
  const contentRef = useScrollReveal({ origin: 'left', delay: 500 })

  return (
    <section
      id="about"
      className="min-h-screen bg-bg-secondary flex items-center justify-center gap-10 lg:gap-20 px-[12%] py-24 flex-col-reverse lg:flex-row"
    >
      {/* About Image */}
      <div ref={imgRef} className="flex-shrink-0">
        <img
          src="/images/my2.png"
          alt="Nethmi Heshani Tharuka"
          className="w-[52vw] lg:w-[32vw] profile-glow"
        />
      </div>

      {/* About Content */}
      <div ref={contentRef} className="text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
          About <span className="text-main">Me</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl">
          I am a passionate web developer and full stack developer with a
          strong interest in data analysis. Currently, I am pursuing my
          undergraduate degree in Computer Science at Trincomalee Campus,
          Eastern University, Sri Lanka. I enjoy creating innovative web
          solutions and continually expanding my skill set in both front-end and
          back-end development. My journey in technology is driven by a
          curiosity for how data shapes our world and a desire to solve complex
          problems with creative, efficient code.
        </p>
      </div>
    </section>
  )
}
