import {
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaGitAlt,
  FaNode, FaBootstrap, FaFigma, FaPhp, FaDatabase, FaFire
} from 'react-icons/fa'
import {
  SiCplusplus, SiPython, SiTailwindcss, SiSass, SiExpress,
  SiMongodb, SiMysql, SiPostman, SiVite
} from 'react-icons/si'

const skillsData = [
  {
    category: 'Programming Languages',
    color: '#a78bfa',
    skills: [
      { name: 'JavaScript', icon: FaJs },
      { name: 'Java',       icon: FaJava },
      { name: 'Python',     icon: SiPython },
      { name: 'C++',        icon: SiCplusplus },
      { name: 'PHP',        icon: FaPhp },
    ],
  },
  {
    category: 'Frontend Development',
    color: '#f97316',
    skills: [
      { name: 'HTML',        icon: FaHtml5 },
      { name: 'CSS',         icon: FaCss3Alt },
      { name: 'Tailwind CSS',icon: SiTailwindcss },
      { name: 'React',       icon: FaReact },
      { name: 'Bootstrap',   icon: FaBootstrap },
      { name: 'Sass',        icon: SiSass },
      { name: 'Figma',       icon: FaFigma },
    ],
  },
  {
    category: 'Backend Development',
    color: '#00ff51',
    skills: [
      { name: 'Node.js',    icon: FaNode },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs',  icon: FaDatabase },
      { name: 'PHP',        icon: FaPhp },
    ],
  },
  {
    category: 'Databases',
    color: '#38bdf8',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL',   icon: SiMysql },
    ],
  },
  {
    category: 'Tools & Platforms',
    color: '#fb923c',
    skills: [
      { name: 'Git',      icon: FaGitAlt },
      { name: 'Postman',  icon: SiPostman },
      { name: 'Vite',     icon: SiVite },
      { name: 'Firebase', icon: FaFire },
    ],
  },
  {
    category: 'UI/UX Design',
    color: '#f472b6',
    skills: [
      { name: 'Figma', icon: FaFigma },
    ],
  },
]

export default skillsData
