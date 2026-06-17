import { Icons } from "@/components/icons";
import { HomeIcon, VideoIcon, FolderIcon, MegaphoneIcon } from "lucide-react";
import {
  faReact,
  faNodeJs,
  faGitAlt,
  faTypescript,
  faTailwindCss,
  faFigma,
  faGithub,
  faFirefoxBrowser,
  faBrave,
  faNotion,
  faPython,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLeaf,
  faPlug,
  faBolt,
  faTerminal,
  faRocket,
  faServer,
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export const DATA = {
  name: "Sanyi",
  initials: "S",
  url: "https://sanyi.dev",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addis+ababa",
  description: "",
  heroIntro: [
    "Currently freelancing and collaborating with new people on exciting projects.",
    "I love playing video games and share thoughts on tech here.",
    "Here's what I think about the future of computer science.",
    "I also enjoy touch typing in my free time, bullish on AI and future technologies.",
  ],
  summary:
    "I'm **Sanyi** — a 16-year-old developer and founder focused on turning ideas into real, impactful products. I'm driven by curiosity and a strong belief that technology can solve everyday problems at scale.\n\nI spend most of my time building, experimenting, and improving my skills — especially in AI, problem solving, and scalable systems. Beyond coding, I'm a tech content creator with a **40K+** audience on LinkedIn, YouTube, and X.\n\nCurrently building **Shiplog** and **YScroll**.",

  avatarUrl: "/sanyi.jpg",
  skills: [
    { name: "TypeScript", icon: faTypescript, category: "Languages" },
    { name: "JavaScript", icon: faJs, category: "Languages" },
    { name: "Python", icon: faPython, category: "Languages" },
    { name: "React", icon: faReact, category: "Frontend" },
    { name: "Next.js", customIcon: Icons.nextjs, category: "Frontend" },
    { name: "TailwindCSS", icon: faTailwindCss, category: "Frontend" },
    { name: "React Native", icon: faReact, category: "Mobile" },
    { name: "Node.js", icon: faNodeJs, category: "Backend" },
    { name: "FastAPI", icon: faBolt, category: "Backend" },
    { name: "PostgreSQL", icon: faDatabase, category: "Backend" },
    { name: "Groq AI", customIcon: Icons.claude, category: "AI" },
    { name: "Git", icon: faGitAlt, category: "Tools" },
    { name: "Figma", icon: faFigma, category: "Tools" },
    { name: "Cursor", customIcon: Icons.cursor, category: "Tools" },
    { name: "Claude", customIcon: Icons.claude, category: "Tools" },
  ],
  linkedInPosts: [
    "urn:li:ugcPost:7429205991805755392",
    "urn:li:ugcPost:7361024281008402436",
    "urn:li:activity:7433016280657543169",
  ],
  xPosts: [
    "2038632738677313792",
    "2023435106585837840",
    "2025944415227854909",
    "2027249562507747797",
  ],
  tools: [
    {
      name: "Cursor",
      description:
        "AI-powered code editor built on VS Code — my primary IDE for all projects.",
      href: "https://cursor.com/referral?code=63BS4MRLZQQV",
      customIcon: Icons.cursor,
    },
    {
      name: "VS Code",
      description:
        "The classic. I still use it for quick edits and when I need specific extensions.",
      href: "https://code.visualstudio.com",
      customIcon: Icons.vscode,
    },
    {
      name: "Git Bash",
      description:
        "My go-to terminal on Windows for all git operations and shell scripting.",
      href: "https://gitforwindows.org",
      icon: faTerminal,
    },
    {
      name: "Postman",
      description:
        "API testing and documentation — essential for building and debugging REST APIs.",
      href: "https://www.postman.com",
      icon: faRocket,
    },

    {
      name: "Hostinger",
      description:
        "Reliable and affordable hosting for my projects and client sites.",
      href: "https://www.hostinger.com/in?REFERRALCODE=NP4PRASENELF",
      icon: faServer,
    },
    {
      name: "Firefox",
      description:
        "Privacy-first browser I use for everyday browsing and web development.",
      href: "https://www.mozilla.org/firefox",
      icon: faFirefoxBrowser,
    },
    {
      name: "Brave",
      description:
        "Fast, ad-free browser — my secondary pick for a clean browsing experience.",
      href: "https://brave.com",
      icon: faBrave,
    },
    {
      name: "Figma",
      description:
        "Design tool for UI mockups, prototyping, and collaborating on layouts.",
      href: "https://www.figma.com",
      icon: faFigma,
    },
    {
      name: "GitHub",
      description:
        "Where all my code lives — version control, CI/CD, and open source contributions.",
      href: "https://github.com",
      icon: faGithub,
    },
    {
      name: "Vercel",
      description:
        "One-click deploys for all my Next.js apps with instant previews.",
      href: "https://vercel.com",
      icon: faRocket,
    },
    {
      name: "Notion",
      description:
        "Notes, task management, and documentation — my second brain.",
      href: "https://www.notion.so",
      icon: faNotion,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/videos", icon: VideoIcon, label: "Videos" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/promote", icon: MegaphoneIcon, label: "Promote" },
  ],
  partnerships: {
    intro:
      "If you want to place your product directly in front of an engaged, 40K high-trust B2B and tech audience, let's work together.",
    packages: [
      {
        name: "The Creator Demo Pack",
        emoji: "📦",
        description:
          "Best for brands looking to tap directly into a premium B2B network.",
        price: "$399",
        platforms: "LinkedIn Only (30K+ Followers)",
        platformList: ["LinkedIn"],
        featured: false,
        includes: [
          "1× LinkedIn native post featuring either a personal photo of me using your software or a 30-to-60-second screen-share demo walkthrough.",
          "Direct product link tagging.",
        ],
      },
      {
        name: "The Full-Stack Ecosystem",
        emoji: "💎",
        description:
          "The ultimate multi-platform blitz to maximize reach and search visibility.",
        price: "$699",
        platforms: "LinkedIn, X, & YouTube (42K+ Total Audience)",
        platformList: ["LinkedIn", "X", "YouTube"],
        featured: true,
        includes: [
          "LinkedIn (30K+): 1× walkthrough demo video or personal photo post.",
          "X / Twitter (5.7K): 1× narrative post or thread contextually linking to your product.",
          "YouTube (6.6K): 1× 30-to-60-second mid-roll video integration embedded inside a long-form tech video or tutorial.",
        ],
      },
    ],
    guidelines: [
      {
        title: "Niche Alignment Only",
        description:
          "I only accept tech-focused products. This includes B2B SaaS, B2C software, developer tools, and mobile/desktop apps.",
      },
      {
        title: "Strict Exclusions",
        description:
          "I do not accept sponsorships for crypto, web3, personal finance, betting, gambling, or dating platforms.",
      },
      {
        title: "Hands-On Testing",
        description:
          "I require a working account, demo login, or free trial access to your tool before finalizing the contract. I must test and genuinely approve of the product myself before recommending it to my audience.",
      },
      {
        title: "YouTube Revision Policy",
        description:
          "For the $699 package, the YouTube integration includes one (1) round of script/video edits before the video goes live.",
      },
      {
        title: "Integration vs. Dedicated",
        description:
          "YouTube placements are structured as seamless mid-roll video integrations (30–60 seconds) within my standard high-quality content, not fully dedicated videos.",
      },
    ],
    paymentTerms: [
      {
        title: "50/50 Model",
        description:
          "All campaigns follow a 50/50 payment split — 50% due upfront upon contract signing, and 50% due upon publication of all deliverables.",
      },
    ],
  },
  contact: {
    email: "hello@sanyi.dev",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mrsanyi123",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sanyi-diriba/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/imsanyidiriba",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@sanyi.dev",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Shiplog",
      badges: ["Founder"],
      location: "Remote",
      title: "Founder",
      logoUrl: "/shiplog.mov",
      start: "June 2026",
      end: "Present",
      description:
        "You ship the features, we write your changelog. Building a product that helps teams ship faster with automated, polished release notes.",
    },
    {
      company: "Go2Code",
      badges: ["Co-Founder"],
      location: "Remote",
      title: "Co-Founder",
      logoUrl: "/company.png",
      start: "2024",
      end: "Present",
      description:
        "Co-founded a tech education platform connecting learners with expert developers. Mentored and trained 700+ interns worldwide in full-stack web development, led 50+ live workshops, and helped 2,000+ learners across 25+ countries.",
    },
    {
      company: "Independent Developer",
      href: "https://github.com/mrsanyi123",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Full Stack Developer",
      logoUrl: "/freelance.webp",
      start: "2023",
      end: "Present",
      description:
        "Building and shipping products across web, mobile, and browser extensions — from AI study tools to apps that help people reclaim their time.",
    },
  ],
  projects: [
    {
      title: "Shiplog",
      href: "https://sanyi.vercel.app",
      dates: "June 2026 - Present",
      active: true,
      description:
        "A changelog platform for modern teams — you ship the features, Shiplog writes the release notes. Built to help founders and developers communicate product updates clearly.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Vercel",
      ],
      video: "/shiplog.mov",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "YScroll",
      href: "https://sanyi.vercel.app",
      dates: "2025 - Present",
      active: true,
      description:
        "An app designed to help people reduce time spent on short-form content like TikTok, YouTube Shorts, Instagram Reels, and X. Reached 3,000+ installs within the first two weeks of launch.",
      technologies: ["React", "TypeScript", "Mobile", "Product Design"],
      image: "/portfolio.png",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "YScroll Mobile",
      href: "https://sanyi.vercel.app",
      dates: "2026 - Present",
      active: true,
      description:
        "Native-feel mobile experience for YScroll: smooth scrolling, saved sessions, and offline-friendly reading flows.",
      technologies: ["React Native", "TypeScript", "Mobile", "YScroll"],
      image: "/sanyi.jpg",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "YScroll Chrome Extension",
      href: "https://sanyi.vercel.app",
      dates: "2026 - Present",
      active: true,
      description:
        "Browser extension that brings YScroll features into any tab — quick capture, sync with the app, and a lightweight UI.",
      technologies: [
        "Chrome Extension",
        "JavaScript",
        "Web Extensions",
        "YScroll",
      ],
      image: "/freelance.webp",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "AI Study Assistant",
      href: "https://sanyi.vercel.app",
      dates: "2025 - Present",
      active: true,
      description:
        "Intelligent platform generating study notes, quizzes, and flashcards from user materials using AI.",
      technologies: ["React", "Python", "FastAPI", "Groq AI", "Tailwind"],
      image: "/company.png",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "PinShot",
      href: "https://sanyi.vercel.app",
      dates: "2025",
      active: false,
      description:
        "A visual feedback tool for teams and creators. Scaled to 900+ users and generated 1,400+ comments within two weeks of launch.",
      technologies: ["React", "TypeScript", "UI/UX", "Product"],
      image: "/freelance.webp",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Go2Code Platform",
      href: "https://go2cod.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Tech education platform connecting learners with expert developers and courses.",
      technologies: ["Next.js", "JavaScript", "UI/UX", "Figma", "Performance"],
      image: "/company.png",
      links: [
        {
          type: "Website",
          href: "https://go2cod.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  achievements: [
    {
      title: "ALX Addis Teen Code Hackathon Winner",
      dates: "2025",
      location: "Addis Ababa, Ethiopia",
      description:
        "Won the ALX Addis Teen Code Hackathon — recognized for building innovative solutions under pressure.",
      image: "/company.png",
      href: "/achievements",
      links: [],
    },
    {
      title: "YScroll — 3,000+ Installs in 2 Weeks",
      dates: "2025",
      location: "Product Launch",
      description:
        "After struggling with short-form content overload myself, I built YScroll — it reached 3,000+ installs in less than two weeks and keeps growing.",
      image: "/yscrollE.png",
      href: "https://chromewebstore.google.com/detail/yscroll-stop-the-endless/hlnhamlgmoijbfhilkanhifompndjaho",
      links: [],
    },
    {
      title: "PinShot — 900+ Users in 2 Weeks",
      dates: "2025",
      location: "Product Launch",
      description:
        "Built PinShot, a visual feedback tool that scaled to 900+ users and 1,400+ comments within two weeks of launch.",
      image: "/freelance.webp",
      href: "#projects",
      links: [],
    },
    {
      title: "Mentored 700+ Interns at Go2Code",
      dates: "2024 - Present",
      location: "Go2Code",
      description:
        "Co-founded Go2Code and mentored 700+ interns worldwide in full-stack web development, live workshops, and real-world projects.",
      image: "/company.png",
      links: [],
    },
    {
      title: "40K+ Tech Content Creator",
      dates: "2024 - Present",
      location: "LinkedIn, X & YouTube",
      description:
        "Built a 40K+ high-trust audience creating tech content across LinkedIn (30K+), YouTube (6.6K), and X (5.7K).",
      image: "/sanyi.jpg",
      href: "/promote",
      links: [],
    },
    {
      title: "Responsive Web Design Certification",
      dates: "2024",
      location: "freeCodeCamp",
      description:
        "Earned the Responsive Web Design certification — solidifying fundamentals in HTML, CSS, and accessible layout patterns.",
      image: "/shiplog.png",
      href: "https://www.freecodecamp.org",
      links: [],
    },
  ],
} as const;
