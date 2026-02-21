import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Pushpendra Meena",
  initials: "PM",
  url: "https://Garry400.github.io",
  location: "Kota, Rajasthan",
  locationLink: "https://www.google.com/maps/place/Kota, Rajasthan",
  description:
    "Computer Science student exploring Machine Learning and full-stack systems that solve real problems.",
  summary:
    "I'm currently pursuing my engineering degree and gradually shaping myself into a well-rounded software engineer. Over time, I've realized that I enjoy building complete products, where code, design, and usability come together. I started with core programming and DSA, which helped me develop strong problem-solving skills. As I explored further, I became interested in full-stack development and UI/UX, understanding how users interact with systems and how good design can simplify complex functionality. I've worked on projects like CodeNova, a competitive programming platform with real-time code execution, role-based access, and ML-based cheat detection. Along with backend and system design, I focused on interface structure, user flow, and visual clarity to make the platform easy and enjoyable to use. I'm also exploring machine learning and computer vision, applying them where they add real value rather than just as buzzwords. When I'm not coding, you'll usually find me refining designs, experimenting with layouts, or learning how to create better user experiences through thoughtful design and clean implementation.",
  avatarUrl: "/me.jpeg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/case-studies", icon: NotebookIcon, label: "Case Studies" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
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
        url: "https://linkedin.com/in/pushpendra-meena400/",
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
      href: "https://www.nationalfertilizers.com",
      badges: [],
      location: "On Site",
      title: "Vocational Trainee",
      logoUrl: "/NFL.jpg",
      start: "June 2025",
      end: "July 2025",
      bullets: [
        "Engineered and deployed a Urea Requisition Management System using Java EE (JSP, Servlets), Oracle DB, and Apache Tomcat, digitizing end-to-end requisition and approval workflows for enterprise use.",
        "Designed and implemented role-based modules for customer registration, requisition submission, HR validation, and finance approval/rejection, improving process transparency and reducing manual handling.",
        "Developed a structured Oracle database schema and integrated it with an MVC-based backend, ensuring data integrity, scalability, and maintainable enterprise deployment.",
        "Contributed to UI/UX design and frontend logic using JavaScript and JSP, focusing on usability, clear workflows, and responsive user interactions across roles."
      ],
    },
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
      dates: "2025",
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
