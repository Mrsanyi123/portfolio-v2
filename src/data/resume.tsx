import { Icons } from "@/components/icons";
import {
  HomeIcon,
  VideoIcon,
  FolderIcon,
  MegaphoneIcon,
  ActivityIcon,
  TrophyIcon,
} from "lucide-react";
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
    "shipping products and new stuff while in High School.",
    "I am also a content creator with 50k audience sharing my journey and thoughts.",
    "besides coding and building, i like playing Basketball.",
    "I'm about 5'8, fun to speak with so i'm a cool guy.",
  ],
  summary:
    "I'm **Sanyi** — a 16-year-old developer and founder focused on turning ideas into real, impactful products. I'm driven by curiosity and a strong belief that technology can solve everyday problems at scale.\n\nI spend most of my time building, experimenting, and improving my skills — especially in AI, problem solving, and scalable systems. Beyond coding, I'm a tech content creator with a **40K+** audience on LinkedIn, YouTube, and X.\n\nCurrently building **Shiplog** and **YScroll**.",

  avatarUrl: "/sanyi.jpg",
  stackCategories: [
    {
      title: "Frontend",
      description:
        "Interfaces, design systems, and client-side performance.",
      skills: [
        { name: "React", icon: faReact },
        { name: "Next.js", customIcon: Icons.nextjs },
        { name: "TypeScript", icon: faTypescript },
        { name: "JavaScript", icon: faJs },
        { name: "Tailwind CSS", icon: faTailwindCss },
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
      ],
    },
    {
      title: "Backend",
      description: "APIs, services, and scalable application logic.",
      skills: [
        { name: "Node.js", icon: faNodeJs },
        { name: "Python", icon: faPython },
        { name: "FastAPI", customIcon: Icons.fastapi },
        { name: "Express", customIcon: Icons.express },
        { name: "REST & HTTP", customIcon: Icons.restapi },
      ],
    },
    {
      title: "Database & data",
      description: "Persistence, modeling, and data access layers.",
      skills: [
        { name: "PostgreSQL", customIcon: Icons.postgresql },
        { name: "MongoDB", customIcon: Icons.mongodb },
        { name: "Redis", customIcon: Icons.redis },
        { name: "Prisma", customIcon: Icons.prisma },
      ],
    },
    {
      title: "Tools & platforms",
      description: "Shipping, collaboration, and day-to-day workflow.",
      skills: [
        { name: "Git", icon: faGitAlt },
        { name: "Docker", customIcon: Icons.docker },
        { name: "GitHub Actions", customIcon: Icons.githubActions },
        { name: "Vercel", customIcon: Icons.vercel },
        { name: "Figma", icon: faFigma },
        { name: "VS Code", customIcon: Icons.vscode },
      ],
    },
  ],
  hackathons: [
    {
      title: "Young Changemaker of the Year Winner",
      organization: "Linkedin Ethiopia",
      description:
        "Won the Young Changemaker of the Year award in Ethiopia, recognized for my impact and leadership in the tech community.",
    },
    {
      title: "1st Place Winner",
      organization: "Addis Teen Code Hackathon by ALX",
      description:
        "Achieved first place with my team in this prestigious hackathon competition.",
    },
    {
      title: "2nd Place Winner",
      organization: "Cursor AI Hackathon",
      description:
        "Achieved second place with my team in the biggest hackathon in Ethiopia, Cursor AI Hackathon.",
    },
 
    {
      title: "3rd Place Winner",
      organization: "Tech Titans Hack Fest",
      description:
        "Secured third place in online hackathon with an innovative AI project.",
    },
    {
      title: "Best Beginner Project",
      organization: "FutureHacks 7",
      description:
        "Won Best Beginner Project from Senior Category, showcasing exceptional potential.",
    },
    {
      title: "Quarter Finals",
      organization: "A2SV AI For Impact Hackathon",
      description:
        "Reached quarter finals with my team, ranking in top 200 from 600 teams.",
    },
  ],
  certifications: [
    {
      title: "Web Development",
      issuer: "FreeCodeCamp",
    },
    {
      title: "Python Intermediate",
      issuer: "SoloLearn",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "A2SV",
    },
    {
      title: "Full-Stack Development",
      issuer: "Personal Projects",
    },
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
    { href: "/activity", icon: ActivityIcon, label: "Activity" },
    { href: "/achievements", icon: TrophyIcon, label: "Achievements" },
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
    email: "business.sanyi@gmail.com",
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
        url: "mailto:business.sanyi@gmail.com",
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
      company: "A2SV(African 2 Silcon Valley)",
      href: "https://a2sv.org",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Software Engineer Traine",
      logoUrl: "/freelance.webp",
      start: "2023",
      end: "Present",
      description:
        "Building and shipping products across web, mobile, and browser extensions — from AI study tools to apps that help people reclaim their time.",
    },
    {
      company: "YScroll",
      href: "https://yscroll.xyz",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Founder Developer",
      logoUrl: "/freelance.webp",
      start: "2023",
      end: "Present",
      description:
        "Building and shipping products across web, mobile, and browser extensions — from AI study tools to apps that help people reclaim their time.",
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
  ],
  projects: [
    {
      title: "Shiplog",
      href: "https://sanyi.vercel.app",
      dates: "June 2026 - Present",
      active: true,
      description:
        "A changelog platform for modern teams — you ship the features, Shiplog writes the release notes.",
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
      href: "https://yscroll.xyz",
      dates: "2025 - Present",
      active: true,
      description:
        "An app designed to help people reduce time spent on short-form content like TikTok, YouTube Shorts, Instagram Reels, and X.",
      technologies: ["React", "TypeScript", "Mobile", "Product Design"],
      video: "https://www.youtube.com/watch?v=JYcwCC1zIG0",
      links: [
        {
          type: "Website",
          href: "https://yscroll.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

    {
      title: "YScroll Chrome Extension",
      href: "https://yscroll.xyz",
      dates: "2026 - Present",
      active: true,
      description:
        "Browser extension that is built to reduce time spent on short form contents like Tiktok, Youtube Shorts, Linkedin and more platforms on Browser.",
      technologies: [
        "Chrome Extension",
        "JavaScript",
        "Web Extensions",
        "YScroll",
      ],
      banner: "extension",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Go2Cod Platform",
      href: "https://go2cod.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Co-Founded Go2Cod Non-profit org. to help young coders, inovators apply their skills to real world projects.",
      technologies: ["Next.js", "JavaScript", "UI/UX", "Figma", "Performance"],
      banner: "education",
    },
    {
      title: "AI Study Assistant",
      href: "https://sanyi.vercel.app",
      dates: "2025 - Present",
      active: true,
      description:
        "Intelligent platform generating study notes, quizzes, and flashcards from user materials using AI.",
      technologies: ["React", "Python", "FastAPI", "Groq AI", "Tailwind"],
      banner: "ai",
    },
    {
      title: "PinShot",
      href: "https://sanyi.vercel.app",
      dates: "2025",
      active: false,
      description:
        "A visual feedback tool for teams and creators. Scaled to 900+ users and generated 1,400+ comments within two weeks of launch.",
      technologies: ["React", "TypeScript", "UI/UX", "Product"],
      banner: "feedback",
      links: [
        {
          type: "Website",
          href: "https://sanyi.vercel.app",
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
