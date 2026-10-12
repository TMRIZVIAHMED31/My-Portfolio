/**
 * All portfolio content lives here. Edit this file to update the site.
 *
 * ⚠️  TODO: replace every value marked "REPLACE" below with your real URLs.
 */

export const profile = {
  name: "T. M. Rizvi Ahmed",
  firstName: "Rizvi",
  role: "Full-Stack Developer",
  tagline: "MERN stack · REST APIs · Real-time apps",
  location: "Dhaka, Bangladesh",
  email: "tmrizviahmed@gmail.com",
  phone: "+880 1771-232859",
  resume: "/Rizvi_Ahmed_CV.pdf",
  intro:
    "Computer Science graduate with strong foundations in software development, databases, and system design. I build scalable, reliable web applications end to end — from React interfaces to Node.js APIs and MongoDB.",
  about: [
    "I'm a Computer Science and Engineering graduate (Information Systems major) from American International University-Bangladesh, and I recently completed a remote Full-Stack Development internship at Codveda Technologies.",
    "I enjoy turning ideas into production-ready products: designing REST APIs, securing them with JWT authentication and role-based access, building responsive React front ends, and deploying them on Vercel and Render.",
    "I'm now looking for an entry-level software engineering role where I can apply my problem-solving skills and hands-on project experience on a collaborative team.",
  ],
}

export const socials = {
  // Verified from the CV
  linkedin: "https://linkedin.com/in/t-m-rizvi-ahmed",
  whatsapp: "https://wa.me/8801771232859",
  email: "mailto:tmrizviahmed@gmail.com",
  // REPLACE with your GitHub profile URL
  github: "https://github.com/TMRIZVIAHMED31",
}

export const education = {
  school: "American International University-Bangladesh (AIUB)",
  degree: "B.Sc. in Computer Science and Engineering (Major: Information Systems)",
  period: "Feb 2022 – Feb 2026",
  place: "Dhaka, Bangladesh",
}

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "C", "C++", "C#", "PHP", "SQL", "R"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML5"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "RESTful APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "SQLite", "Redis", "Oracle Database"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Render", "Cloudinary", "VS Code", "Trello"],
  },
]

export type Project = {
  title: string
  subtitle: string
  description: string
  highlights: string[]
  stack: string[]
  live: string
  github: string
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    subtitle: "MERN Stack",
    description:
      "A full-stack marketplace with separate User, Seller, and Admin roles, covering everything from product browsing to order management.",
    highlights: [
      "JWT authentication with role-based access control for users and sellers",
      "Seller product management backed by MongoDB",
      "Product browsing, cart, checkout, and order management",
      "Frontend on Vercel, backend on Render, with production env config and CORS handling",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel", "Render"],
    // REPLACE with your deployed URL and repository
    live: "https://e-commerce-git-main-rizvi5.vercel.app",
    github: "https://github.com/TMRIZVIAHMED31/E-Commerce",
  },
  {
    title: "Real-Time Chat Application",
    subtitle: "MERN Stack",
    description:
      "A secure, interactive chat app that delivers messages instantly over WebSockets, with persistent user and conversation data.",
    highlights: [
      "User authentication and JWT-based authorization",
      "Instant message delivery using WebSocket technology",
      "RESTful APIs with Node.js and Express.js, data stored in MongoDB",
      "Responsive React.js frontend deployed on Vercel and Render",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "WebSocket", "JWT", "Vercel", "Render"],
    // REPLACE with your deployed URL and repository
    live: "https://real-time-chat-phi-one.vercel.app",
    github: "https://github.com/TMRIZVIAHMED31/Real_time-Chat",
  },
]

export const experience = {
  company: "Codveda Technologies",
  role: "Full-Stack Development Intern",
  mode: "Remote",
  period: "Feb 2026 – Apr 2026",
  points: [
    "Developed and integrated front-end and back-end components for modern web applications.",
    "Built and integrated RESTful APIs to support application functionality and communication between frontend and backend systems.",
    "Worked with databases for data management and helped improve database performance, reliability, and application efficiency.",
    "Implemented, tested, and debugged web application features to keep them reliable with a consistent user experience.",
    "Applied full-stack practices to build scalable, maintainable, and user-friendly solutions.",
    "Collaborated on development tasks involving modern web technologies, version control, and API development.",
  ],
}

export const certification = {
  title: "IT Essentials – PC Hardware and Software",
  issuer: "Cisco Networking Academy",
  issued: "June 2022",
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]
