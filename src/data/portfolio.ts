export interface Project {
  id: string;
  title: string;
  company?: string; // Optional: z.B. "Immobilien Makler XY"
  description: string;
  longDescription?: string; // Für Projekte mit mehr Kontext
  link?: string; // Optional gemacht
  image?: string; // Optional gemacht
  tags: string[];
  type: "work" | "oss" | "academic"; // Zur Kategorisierung
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "immobilien",
    title: "Website Relaunch for Real Estate Company",
    company: "Valuvis GmbH",
    description:
      "Vollständiger Relaunch der Corporate Website mit MLS-Anbindung.",
    longDescription:
      "I built a modern, responsive website for Valuvis GmbH, a real estate company. The project involved designing a UI/UX, integrating with the CRM API for real-time property listings and optimizing for SEO and performance. The new site significantly improved user engagement and lead generation.",
    tags: [
      "React",
      "Next.js",
      "SEO",
      "Google-Analytics",
      "Figma",
      "API-Integration",
    ],
    type: "work",
    image: "/projects/valuvis.webp",
  },
  {
    id: "bachelor-thesis",
    title: "Frontend Performance Optimization in Next.js Application",
    company: "ESG-X",
    description:
      "Bachelor thesis on comprehensive frontend development from concept to optimization.",
    longDescription:
      "Bachelor thesis focusing on complete frontend development lifecycle: from initial concept and UI/UX design in Figma to full implementation using Next.js and React. The project included user evaluation studies and comprehensive performance optimization techniques to enhance application speed and user experience.",
    tags: [
      "Next.js",
      "React",
      "Web-Vitals",
      "Figma",
      "Performance",
      "User Research",
      "Frontend Development",
    ],
    type: "academic",
  },
  {
    id: "open-source",
    title: "Open Source Contributions",
    description:
      "Contributed to various open source projects, including bug fixes and feature enhancements.",
    longDescription:
      "I have actively contributed to several open source projects on GitHub, focusing on improving documentation, fixing bugs, and adding new features. NavigaTUM, AnkiAndroid, NewPipe and the TUM Campus App are some of the projects I've contributed to, helping to enhance their functionality and user experience.",
    tags: ["Open Source", "GitHub", "Community"],
    type: "oss",
  },
  {
    id: "medienzentrum-website",
    title: "Website for Media Center Garmisch-Partenkirchen",
    company: "Medienzentrum Garmisch-Partenkirchen",
    description:
      "Development of a modern website for the media center in Garmisch-Partenkirchen.",
    longDescription:
      "I developed a modern, responsive website for the Media Center in Garmisch-Partenkirchen. The project involved designing an intuitive UI/UX, implementing the site using Next.js, and ensuring accessibility and performance. I also built a custom CMS using Prisma and PostgreSQL to give editors an easy interface for managing content and resources. The site is still a work in progress and is not yet published.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "UI/UX Design",
      "Accessibility",
      "Prisma",
      "PostgreSQL",
      "CMS",
    ],
    type: "work",
    image: "/projects/medienzentrum.webp",
  },
  {
    id: "personal-website",
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and interests.",
    longDescription:
      "I built this personal portfolio website using Astro and Tailwind CSS to showcase my projects, skills, and interests.",
    tags: ["Astro", "Tailwind CSS", "Portfolio", "Web Development"],
    type: "oss",
  },
];

export const skills: Skill[] = [
  {
    category: "Web Development",
    items: [
      "React",
      "TypeScript",
      "Astro",
      "Tailwind CSS",
      "Next.js",
      "HTML/CSS/JS",
    ],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin"],
  },
  {
    category: "Machine Learning",
    items: ["PyTorch", "NumPy", "Pandas", "Deep Learning", "Data Analysis"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "Docker",
      "Figma",
      "Notion",
      "Coolify",
    ],
  },
];

export const interests = [
  {
    icon: "🤖",
    title: "Machine Learning",
    description: "AI and Deep Learning",
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Modern web technologies",
  },
  {
    icon: "📱",
    title: "App Development",
    description: "Mobile and cross-platform",
  },
  { icon: "📊", title: "Data Analysis", description: "Insights from data" },
];
