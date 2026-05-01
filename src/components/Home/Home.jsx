import { useState, useEffect } from 'react'
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
    href: 'https://www.hackerrank.com/profile/nethuTharuka',
    icon: <SiHackerrank />,
    label: 'HackerRank',
  },
]

export default function Home() {
  const titles = ['Full Stack Developer', 'UI/UX Designer', 'QA Engineer']
  const [titleIndex, setTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentTitle = titles[titleIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        // Pause at the end before deleting
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && currentText === '') {
        // Move to the next word after deleting
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
      } else {
        // Typing or deleting
        setCurrentText(
          isDeleting
            ? currentTitle.substring(0, currentText.length - 1)
            : currentTitle.substring(0, currentText.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, titleIndex])

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
          className="text-2xl md:text-3xl lg:text-4xl my-4 min-h-[40px] md:min-h-[48px]"
        >
          I am a <span className="text-main">{currentText}<span className="animate-pulse">|</span></span>
        </h3>

        <p
          ref={pRef}
          className="text-sm md:text-base font-medium leading-relaxed max-w-xl"
        >
          I'm passionate about building responsive, user-friendly,
          and visually engaging digital experiences.
          I focus on combining creativity with functionality
          to develop solutions that are both effective and intuitive.
          Continuously learning and adapting
          to new technologies,
          I strive to deliver high-quality and impactful results.
          I enjoy solving real-world problems
          and creating seamless experiences
          that bring ideas to life.
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
