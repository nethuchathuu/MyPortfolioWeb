import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'

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

const footerLinks = [
  { href: '#', label: 'FAQ' },
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-secondary py-6" id="footer">
      {/* Social Icons */}
      <div className="text-center">
        <div className="flex justify-center gap-3 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <ul className="flex justify-center gap-6 text-lg mb-4 list-none">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white no-underline border-b-[3px] border-transparent hover:border-main transition-all duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Copyright */}
      <p className="text-center text-base mt-6 text-gray-400">
        © Nethmi Heshani Tharuka | All Rights Reserved
      </p>
    </footer>
  )
}
