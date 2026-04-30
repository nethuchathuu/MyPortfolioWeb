import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'

const socialLinks = [
  {
    href: 'https://github.com/nethuchathuu',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/nethmi-heshani-tharuka-6b06a92a9/',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.hackerrank.com/profile/chandrasiriniha1',
    icon: <SiHackerrank />,
    label: 'HackerRank',
  },
]

export default function Home() {
  const h1Ref = useScrollReveal({ origin: 'top', delay: 300 })
  const h3Ref = useScrollReveal({ origin: 'right', delay: 400 })
  const pRef = useScrollReveal({ origin: 'bottom', delay: 500 })
  const socialRef = useStaggerReveal({
    origin: 'bottom',
    baseDelay: 600,
    interval: 200,
    childSelector: '.stagger-item',
  })

  return (
    <section
      id="home"
      className="min-h-screen bg-bg-primary flex items-center justify-center gap-16 lg:gap-32 px-[12%] py-24 flex-col-reverse lg:flex-row"
    >
      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
        <h1
          ref={h1Ref}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mt-4 leading-none"
        >
          Hi, It's <span className="text-main">Nethmi</span>
        </h1>

        <h3
          ref={h3Ref}
          className="text-2xl md:text-3xl lg:text-4xl my-4"
        >
          I am a <span className="text-main">Full Stack Developer</span>
        </h3>

        <p
          ref={pRef}
          className="text-sm md:text-base font-medium leading-relaxed max-w-xl"
        >
          I specialize in creating responsive, visually appealing, and
          user-friendly websites that deliver seamless digital experiences. With
          expertise in both front-end and back-end development, I bring creative
          design and functionality together to build impactful web solutions.
          I'm dedicated to mastering the latest technologies and continuously
          enhancing my skills to provide innovative solutions for my clients.
          Let's build something incredible together!
        </p>

        {/* Social Icons */}
        <div ref={socialRef} className="flex gap-3 my-6">
          {socialLinks.map((link, index) => (
            <div key={link.label} className="stagger-item">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="flex gap-4">
          <a
            href="/mycv.pdf"
            download="Nethmi_Heshani_Tharuka"
            className="glow-btn"
            id="download-cv-btn"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/myPhoto.png"
          alt="Nethmi Heshani Tharuka"
          className="w-[52vw] lg:w-[20vw] profile-glow"
        />
      </div>
    </section>
  )
}
