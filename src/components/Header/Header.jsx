import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking a nav link
  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed w-full top-0 left-0 py-0 px-[12%] bg-black/30 backdrop-blur-[10px] flex justify-between items-center z-[100] transition-all duration-300 ${scrolled ? 'py-0 bg-black/60' : ''
        }`}
    >
      {/* Logo with 3D spin animation */}
      <a href="#home" id="header-logo">
        <img
          src="/images/images__1_-removebg-preview.png"
          alt="Nethmi Portfolio Logo"
          className="w-[80px] h-[80px] logo-spin animate-spin-3d"
        />
      </a>

      {/* Mobile menu toggle */}
      <button
        id="menu-icon"
        className="text-4xl text-white lg:hidden cursor-pointer bg-transparent"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <nav
        className={`
          lg:flex lg:items-center lg:gap-0
          ${menuOpen
            ? 'absolute top-full right-0 w-1/2 p-4 bg-black/80 border-l-2 border-b-2 border-main rounded-bl-3xl flex flex-col'
            : 'hidden lg:flex'
          }
        `}
        id="main-nav"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[1.8rem] lg:text-lg text-white font-medium ml-0 lg:ml-8 border-b-[3px] border-transparent hover:border-main hover:text-main transition-all duration-300 block lg:inline-block py-3 lg:py-0 no-underline"
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
