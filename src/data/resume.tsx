import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Pushpendra Meena",
  initials: "HC",
  url: "https://garry400.github.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "A B.Tech student with interests in software development, UI/UX design, and AI/ML. I enjoy building applications that are technically solid, visually clean, and intuitive to use. I focus on creating meaningful products by combining problem solving, modern web technologies, and thoughtful design.",
  summary:
    "I'm a B.Tech student from India, currently shaping myself into a well rounded software engineer with a strong focus on problem solving and real-world application development.\n\nI started my journey with core programming and DSA, which helped me build a solid foundation in algorithms and logical thinking. Over time, I discovered my interest in full-stack development, where I could work across backend systems, APIs, and user-facing interfaces.\n\nAlongside development, I developed a strong appreciation for UI/UX and design. I enjoy thinking about layouts, user flows, and small details that make applications easier and more enjoyable to use, not just functional.\n\nI’ve worked on projects like CodeNova, a competitive programming platform featuring real-time code execution, role-based access, and ML-based cheat detection. While building it, I focused on both system architecture and interface clarity to ensure a smooth user experience.\n\nI’m also exploring machine learning and computer vision, applying them where they add real value rather than as buzzwords.\n\nWhen I’m not coding, you’ll usually find me learning new tools, refining designs, or thinking about how to build faster, cleaner, and more user-friendly systems.",
  avatarUrl: "/me.jpeg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "meenapushpendra400@gmail.com",
    tel: "+91-XXX-XXX-XXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Garry400",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/pushpendra-meena400",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:meenapushpendra400@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "National Fertilizers Limited",
      href: "",
      badges: [],
      location: "On Site",
      title: "Vocational Trainee",
      logoUrl: "/nfl.jpg",
      start: "June 2025",
      end: "July 2025",
      bullets: [
        "Engineered and deployed a Urea Requisition Management System using Java EE (JSP, Servlets), Oracle DB, and Apache Tomcat, digitizing end-to-end requisition and approval workflows for enterprise use.",
        "Designed and implemented role-based modules for customer registration, requisition submission, HR validation, and finance approval/rejection, improving process transparency and reducing manual handling.",
        "Developed a structured Oracle database schema and integrated it with an MVC-based backend, ensuring data integrity, scalability, and maintainable enterprise deployment.",
        "Contributed to UI/UX design and frontend logic using JavaScript and JSP, focusing on usability, clear workflows, and responsive user interactions across roles."
      ],
    }
  ],
  education: [
    {
      school: "Jaypee University of Engineering and Technology",
      href: "",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/juet.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "Emmanuel Mission Sr. Sec. School",
      href: "",
      degree: "12th Grade, Physics, Chemistry, Mathematics",
      logoUrl: "/ems.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Delhi Public School",
      href: "",
      degree: "10th Grade, Physics, Chemistry, Mathematics",
      logoUrl: "/dps.jpg",
      start: "2009",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "CodeNova",
      href: "https://github.com/Garry400/CodeNova",
      dates: "2025 - Present",
      active: true,
      description:
        "A competitive programming platform enabling real-time code execution and intelligent contest management with ML-driven recommendations and computer-vision-based cheat detection.",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Machine Learning",
        "Computer Vision",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Garry400/CodeNova",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    // {
    //   title: "Gemma Benchmark Suite",
    //   href: "https://github.com/heilcheng/gemma-benchmark",
    //   dates: "2024 - Present",
    //   active: true,
    //   description:
    //     "An evaluation suite for Google's Gemma models across academic LLM benchmarks, with quantization support and efficiency profiling.",
    //   technologies: [
    //     "Python",
    //     "LLM",
    //     "Benchmarking",
    //     "Quantization",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/heilcheng/gemma-benchmark",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "",
    // },
    // {
    //   title: "Craftscape HK",
    //   href: "https://i.imgur.com/8z4eENj.gif",
    //   dates: "2025",
    //   active: true,
    //   description:
    //     "AI-powered platform preserving Hong Kong's disappearing traditional crafts through AR experiences, and AI-assisted custom design creation with real-world artisans to bring ideas to life.",
    //   technologies: [
    //     "React",
    //     "NestJS",
    //     "Google Gemini",
    //     "AR",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/gracetyy/CraftscapeHK",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "https://i.imgur.com/8z4eENj.gif",
    //   video: "",
    // },
    // {
    //   title: "Truth or Dare (Cantonese)",
    //   href: "https://i.imgur.com/GVjLPbi.gif",
    //   dates: "2024 - Present",
    //   active: true,
    //   description:
    //     "A Truth or Dare question generator web app built in Cantonese, using React for webapp and React Native for Apps.",
    //   technologies: [
    //     "React",
    //     "React Native",
    //     "JavaScript",
    //     "Cantonese",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/heilcheng/Truth-or-Dare-Canto",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "https://i.imgur.com/GVjLPbi.gif",
    //   video: "",
    // },
  ],
  books: [
    {
      theme: "Political Philosophy & Social Theory",
      books: [
        {
          title: "The Social Contract",
          author: "Jean-Jacques Rousseau",
          number: 1,
        },
        {
          title: "On Liberty",
          author: "John Stuart Mill",
          number: 2,
        },
        {
          title: "Distinction: A Social Critique of the Judgement of Taste",
          author: "Pierre Bourdieu",
          number: 3,
        },
        {
          title: "The Spirit of the Laws",
          author: "Montesquieu",
          number: 4,
        },
      ],
    },
    {
      theme: "Contemporary Philosophy",
      books: [
        {
          title: "Agonie des Eros",
          author: "Byung-Chul Han",
          number: 5,
        },
        {
          title: "Thus Spoke Zarathustra",
          author: "Friedrich Nietzsche",
          number: 6,
        },
      ],
    },
    {
      theme: "History & Global Affairs",
      books: [
        {
          title: "A Concise History of Hong Kong",
          author: "John M. Carroll",
          number: 7,
        },
        {
          title: "Understanding Global Conflict and Cooperation",
          author: "David A. Welch and Joseph S. Nye, Jr.",
          number: 8,
        },
      ],
    },
    {
      theme: "Digital Life & Privacy",
      books: [
        {
          title: "The Art of Invisibility",
          author: "Kevin Mitnick",
          number: 9,
        },
        {
          title: "Digital Minimalism",
          author: "Cal Newport",
          number: 10,
        },
      ],
    },
    {
      theme: "Memoir & Personal Reflections",
      books: [
        {
          title: "The Watching Brief",
          author: "Margaret Ng Ngoi Yee",
          number: 11,
        },
      ],
    },
  ],
} as const;
