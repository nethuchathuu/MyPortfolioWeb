const projectsData = [
  {
    title: 'BudgetBee - Automated Expense Tracker Using Smart Receipt Recognition',
    image: '/images/budgetbee.png',
    techstack: 'React.js, Vite,Tailwind CSS, Node.js, Express.js, MySQL, Python, Tesseract OCR, Firebase, JWT, Recharts, jsPDF',
    description:
      'A full-stack expense management application with OCR-powered receipt digitization, auto-categorization, and a React dashboard featuring real-time analytics, budget alerts, and spending summaries. Secured with Firebase and JWT, with PDF reports and email notifications.',
    github: 'https://github.com/nethuchathuu/BudgetBee.git',
  },
  {
    title: 'GrocyPro - Full-Stack POS & Inventory Management System',
    image: '/images/grocypro.png',
    techstack: 'React, TypeScript, Vite, | Tailwind CSS,  Node.js , Express , Firebase Firestore , Recharts , Netlify , Render',
    description:
      'A full-stack grocery store management system with real-time inventory tracking, sales processing, and analytics. Features a dashboard with sales trend charts, low-stock alerts, and a discount code engine, deployed to production with a complete CI/CD pipeline.',
    github: 'https://github.com/nethuchathuu/GrocyProBackend.git',
  },
  {
    title: 'NeuroRelief Sri Lanka – Migraine Expert System',
    image: '/images/neuro.png',
    techstack: 'GNU Prolog, React.js, Logic Programming, Expert Systems',
    description:
      'An AI-driven migraine diagnosis expert system with dynamic question generation and confidence-scored results. Features personalized recommendations covering medication, lifestyle, and dietary guidance through an accessible interface built on clinical logic programming.',
    github: 'https://github.com/nethuchathuu/NeuroRelief_Migraine.git',
  },
  {
    title: 'Talko – Personal Virtual Assistant',
    image: '/images/talko.png',
    techstack: ' React ,  Web Speech API ,  Gemini AI ,  JavaScript',
    description:
      'A browser-based voice assistant with real-time speech recognition, AI-generated responses, and speech synthesis. Features smart command handling for time, date, and browser actions, with full interaction control via a responsive stop mechanism.',
    github: 'https://github.com/nethuchathuu/virtual_assistant.git',
  },
  {
    title: 'Snapchat UI/UX Redesign – HCI Exhibition Project',
    image: '/images/snapchat.png',
    techstack: 'Figma ',
    description:
      'A collaborative HCI project redesigning Snapchat\'s UI, addressing usability issues in icon clarity, onboarding, navigation, and accessibility through heuristic evaluation and real user feedback. Delivered as a high-fidelity Figma prototype, presented at a university exhibition.',
    github: 'https://github.com/nethuchathuu/SnapchatRedesign.git',
  },
  {
    title: 'ChatChefs - AI-Powered Cooking Assistant',
    image: '/images/chef.png',
    techstack: 'React.js, Tailwind CSS, Vite, Gemini API, Spoonacular API, Framer Motion , Web Speech API',
    description:
      'An AI-powered cooking assistant that generates recipe suggestions through natural conversation, with nutrition data and voice input support. Features a responsive, mobile-friendly UI with smooth animations and typewriter effects.',
    github: 'https://github.com/nethuchathuu/chatChefs.git',
  },
  {
    title: 'Arcade Runner Game',
    image: '/images/arcade.png',
    techstack: 'Python, Pygame',
    description:
      'A fast-paced arcade-style runner game featuring smooth running, jumping, and rolling animations with variable jump height, realistic physics, and dynamic obstacles. Includes a creative intro and game over UI with animations and audio for a complete arcade experience.',
    github: 'https://github.com/nethuchathuu/Arcade_Runner_python_game.git',
  },
  {
    title: 'GlobalTech PriceBook – Professional IT Services Pricing Calculator',
    image: '/images/pricebook.png',
    techstack: 'React, jsPDF',
    description:
      'An intelligent IT services pricing calculator that delivers real-time, localized cost estimates across global markets. Supports flexible configurations for service level, working hours, and travel distance, with downloadable PDF quotes and direct client sharing for streamlined professional pricing.',
    github: 'https://github.com/nethuchathuu/GlobalTech_PriceBook.git',
  },
  {
    title: 'Save the Sea - UI/UX design',
    image: '/images/AquaNet.png',
    techstack: 'Figma',
    description:
      'A mobile-first community platform designed to protect oceans and inspire eco-friendly action, combining awareness, gamification, and marine learning. Features a social wave feed, eco events, a marine learning hub, a fun mini-game, and a leaderboard — built for the Cre8X 2.0 hackathon.',
    github: 'https://github.com/nethuchathuu/AquaNet.git',
  },
  {
    title: 'AquaQuest - UI/UX design',
    image: '/images/quest.png',
    techstack: 'Figma',
    description:
      'A marine life quiz app designed for the Cre8X 2.0 competition, featuring engaging onboarding, a pre-survey, interactive quiz screens, results summary, and an AI-powered guide — focused on usability, accessibility, and creative design.',
    github: 'https://github.com/nethuchathuu/AquaQuest.git',
  },
  {
    title: 'Weather App',
    image: '/images/weather.png',
    techstack: 'Node.js, Express, Weather API, IP Geolocation API, HTML, CSS, JavaScript',
    description:
      'A weather app that automatically detects your location via IP and displays real-time weather updates through a sleek, animated UI with a clean and intuitive layout.',
    github: 'https://github.com/nethuchathuu/weatherApp.git',
  },
  {
    title: 'Quote Generator',
    image: '/images/quote.png',
    techstack: 'HTML, CSS, JavaScript',
    description:
      'A clean and simple quote generator that displays random inspirational quotes with their authors, designed to motivate and uplift users with smooth functionality.',
    github: 'https://github.com/nethuchathuu/QuoteGenerater.git',
  },
  {
    title: 'Facebook Retro Login Page',
    image: '/images/fb.png',
    techstack: 'HTML, CSS, JavaScript',
    description:
      'A retro-styled Facebook login page reimagined with pixel-art aesthetics, featuring the Press Start 2P font, nostalgic color palette, floating reaction icons, and smooth retro animations — built as part of the Codédex Holiday Hackathon 2024.',
  },
  {
    title: 'GPA Calculator ',
    image: '/images/gpa.png',
    techstack: 'HTML, CSS, JavaScript',
    description:
      'A university-focused GPA calculator that simplifies semester-wise GPA calculations with easy course and credit hour inputs, delivering instant GPA results and classification display through a clean, user-friendly interface.',
    github: 'https://github.com/nethuchathuu/GPA_Calculator.git',
  },
  {
    title: 'To-do list app',
    image: '/images/project1.png',
    techstack: 'HTML, CSS, JavaScript',
    description:
      'A dynamic and user-friendly to-do list application built with HTML, CSS, and JavaScript. It allows users to efficiently manage tasks by adding, editing, and deleting them. With a sleek design and intuitive interface, this app enhances productivity and task organization.',
    github: 'https://github.com/nethuchathuu/Todo-List',
  },
  {
    title: 'Interactive Piano',
    image: '/images/project3.png',
    techstack: 'HTML, CSS, JavaScript',
    description:
      'A dynamic virtual piano built with HTML, CSS, and JavaScript. Users can play piano keys using either mouse clicks or keyboard inputs, with realistic piano sounds enhancing the experience. This project blends interactivity with sound, offering a fun and musical web development application.',
    github: 'https://github.com/nethuchathuu/Piano',
  },
  {
    title: 'Switch Between Day and Night Animation',
    image: '/images/project4.png',
    techstack: 'HTML, CSS',
    description:
      'An engaging animation built with HTML and CSS that simulates a smooth transition between day and night. This project creatively uses CSS animations and transitions to showcase dynamic changes in scenery, from bright daylight to a starry night sky.',
    github: 'https://github.com/nethuchathuu/switch_between_day_-_night',
  },
  {
    title: "Pascal's Triangle Generator",
    image: '/images/project5.png',
    techstack: 'HTML, CSS, JavaScript, PHP',
    description:
      "A dynamic Pascal's Triangle generator built using HTML, CSS, JavaScript, and PHP. This tool allows users to generate the triangle based on input, with a responsive design. PHP handles the logic, while JavaScript provides real-time interactivity for smooth calculations and visual updates.",
    github: 'https://github.com/nethuchathuu/pascal-sTriangle',
  },
]

export default projectsData
