import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiSketch,
  SiFramer,
  SiWebflow,
  SiVuetify,
  SiPrimevue,
  SiJira,
  SiConfluence,
  SiGitlab,
  SiGithub,
  SiMaterialdesign,
  SiAntdesign,
  SiRedux,
  SiWordpress,
  SiNuxtdotjs,
  SiVite,
  SiCss3,
  SiHtml5,
  SiJquery,
  SiReactrouter,
  SiPhp,
  SiOracle,
  SiDotnet,
  SiGoland,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import { TbBrandCSharp, TbBrandJavascript } from "react-icons/tb";
import { IconType } from "react-icons";

// Navigation
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Hero
export const heroData = {
  greeting: "Hey There! I Am",
  name: "San Veasna",
  title: "Full Stack Developer",
  subtitle:
    "I build scalable and intuitive web applications that help businesses grow and deliver great user experiences.",
  cta: {
    primary: "Contact Me",
    secondary: "Download My CV",
  },
  stats: [
    { value: "6+", label: "Years Experience" },
    { value: "10+", label: "Technologies Experience" },
  ],
};

// Marquee services
export const marqueeItems = [
  "WEB APPLICATION DEVELOPER",
  "WEBSITE DEVELOPER",
  "BACKEND DEVELOPER",
  "UI/UX DESIGN",
];

// About
export const aboutData = {
  label: "About Me",
  title: "Who is San Veasna?",
  description:
    "I’m a passionate Full Stack Developer with over 6 years of experience building scalable web applications that users love. My approach combines clean architecture with thoughtful design to deliver solutions that not only perform well but also drive real business results. <br /><br/> Beyond technical skills, I value clear communication, collaboration, and continuous learning. I enjoy working closely with designers, product managers, and customer to translate ideas into practical solutions that solve real problems and drive business growth. My goal is always to deliver high-quality products that are not only technically solid but also meaningful and impactful for users.",
  quote:
    "Building software isn’t just about visuals or features—it’s about how the entire system works.",
  highlights: [
    { value: "10+", label: "Projects Done" },
    { value: "98%", label: "Client Satisfaction" },
  ],
};

// Services
export const servicesData = {
  label: "What I Do",
  title: "My Current Position",
  subtitle:
    "Comprehensive full-stack development focused on building reliable and scalable applications.",
  services: [
    {
      id: 1,
      title: "Web Application Development",
      description:
        "Developing dynamic, scalable web applications with interactive interfaces, complex logic, and seamless user workflows.",
      icon: "layout",
    },
    {
      id: 2,
      title: "Web Site Development",
      description:
        "Building fast, responsive websites with clean structure, intuitive navigation, and consistent experiences across all devices.",
      icon: "globe",
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "Designing and developing reliable backend systems that handle business logic, data processing, and secure API communication.",
      icon: "smartphone",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and thoughtful user experiences that make applications easy to use and visually clear.",
      icon: "palette",
    },
  ],
};

// Tools/Skills
export interface ToolItem {
  name: string;
  icon: IconType;
  proficiency: number;
}

export const toolsData: { label: string; title: string; items: ToolItem[] } = {
  label: "My Skills",
  title: "Tools I Use",
  items: [
    { name: "Vue Js", icon: IoLogoVue, proficiency: 90 },
    { name: "Nuxt Js", icon: SiNuxtdotjs, proficiency: 90 },
    { name: "Vue Router", icon: SiAdobephotoshop, proficiency: 88 },
    { name: "Pinia", icon: SiAdobephotoshop, proficiency: 88 },
    { name: "Vite", icon: SiVite, proficiency: 85 },
    { name: "Git Lab", icon: SiGitlab, proficiency: 85 },
    { name: "Git Hub", icon: SiGithub, proficiency: 85 },
    { name: "CSS3", icon: SiCss3, proficiency: 85 },
    { name: "HTML5", icon: SiHtml5, proficiency: 85 },
    { name: "JQuery", icon: SiJquery, proficiency: 85 },
    { name: "Javascript", icon: TbBrandJavascript, proficiency: 85 },
    { name: "React", icon: SiReact, proficiency: 70 },
    { name: "React Router", icon: SiReactrouter, proficiency: 85 },
    { name: "Redux", icon: SiRedux, proficiency: 85 },
    { name: "TypeScript", icon: SiTypescript, proficiency: 65 },
    { name: "Framer", icon: SiFramer, proficiency: 80 },
    { name: "Figma", icon: SiFigma, proficiency: 95 },
    { name: "PHP", icon: SiPhp, proficiency: 95 },
    { name: "ORACLE DB", icon: SiOracle, proficiency: 95 },
    { name: "ASP .NET", icon: SiDotnet, proficiency: 75 },
    { name: "C#", icon: TbBrandCSharp, proficiency: 75 },
    { name: "Word Press", icon: SiWordpress, proficiency: 75 },
    { name: "GO Lang", icon: SiGoland, proficiency: 75 },
    { name: "Jira", icon: SiJira, proficiency: 75 },
    { name: "Confluence", icon: SiConfluence, proficiency: 75 },
    { name: "Material UI", icon: SiWebflow, proficiency: 75 },
    { name: "EChart", icon: SiWebflow, proficiency: 75 },
    { name: "Chart Js", icon: SiWebflow, proficiency: 75 },
    { name: "Ant Design", icon: SiAntdesign, proficiency: 75 },
    { name: "Prime Vue", icon: SiPrimevue, proficiency: 75 },
    { name: "Vuetify", icon: SiVuetify, proficiency: 75 },
    { name: "Tailwindcss", icon: SiTailwindcss, proficiency: 75 },
  ],
};

// Portfolio
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioData: {
  label: string;
  title: string;
  categories: string[];
  projects: Project[];
} = {
  label: "My Work",
  title: "Featured Projects",
  categories: ["All", "UI/UX", "Web Design", "Mobile", "Branding", "Full Stack"],
  projects: [
    {
      id: "1",
      title: "CMS Website",
      category: "Full Stack",
      image:
        "acheivement1.png",
      description: "Website for display cotent such as blog, news, etc.",
    },
    {
      id: "2",
      title: "School Management System",
      category: "Full Stack",
      image:
        "school-management-system.webp",
      description: "System for managing school activities and operations.",
    },
    {
      id: "3",
      title: "Clinic Management System",
      category: "Full Stack",
      image:
        "clinic-management.jpg",
      description: "System for managing clinic appointments and patient records.",
    },
    {
      id: "4",
      title: "Food Menu Website",
      category: "Frontend",
      image:
        "food-display.jpg",
      description: "Website for displaying food menu items.",
    },
    {
      id: "5",
      title: "News Website",
      category: "Frontend",
      image:
        "news.webp",
      description: "Website for displaying news articles and updates.",
    },
    {
      id: "6",
      title: "Card Center Dashboard System",
      category: "Full Stack",
      image:
        "dashboard.png",
      description: "Banking dashboard system for support internal operation.",
    },
    {
      id: "7",
      title: "Admin Dashboard System",
      category: "Frontend",
      image:
        "dashboard.png",
      description: "Admin dashboard for managing operation.",
    },
    {
      id: "8",
      title: "Display Product Website",
      category: "Full Stack",
      image:
        "product.png",
      description: "Product display website.",
    },
  ],
};

// Experience & Education
export interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const experienceData: {
  label: string;
  title: string;
  experience: TimelineItem[];
  education: TimelineItem[];
} = {
  label: "My Journey",
  title: "Experience & Education",
  experience: [
    {
      id: "exp-1",
      type: "work",
      title: "Senior Frontend Developer",
      organization: "Maya Technologies Co., Ltd.",
      period: "2025 - Present",
      description:
        "Senior Frontend Developer who builds modern Vue.js applications and also works on UI/UX design, focusing on layouts, usability, and smooth user interactions, using Tailwind CSS, PrimeVue, and Ant Design Vue with Axios-based API integration.",
    },
    {
      id: "exp-2",
      type: "work",
      title: "Card System Developer(Full Stack)",
      organization: "ABA Bank",
      period: "2023 - 2025",
      description:
        "Card System Developer experienced in PHP-based web applications, also working on UI/UX design to improve usability, layouts, and user workflows. Strong in frontend technologies (HTML5, CSS3, JavaScript, jQuery), email integration, and Oracle Database development including SQL, procedures, functions, views, relationships, and cron jobs.",
    },
    {
      id: "exp-3",
      type: "work",
      title: "Senior Frontend Developer",
      organization: "Technology Cambodia",
      period: "2023 - 2023",
      description:
        "Senior Frontend Developer experienced in developing SEO-optimized websites with a strong focus on user experience using Nuxt.js. Skilled in API integration with Axios, headless CMS integration using Directus, and deployment and hosting on Linode to deliver fast, reliable, and scalable web solutions.",
    },
    {
      id: "exp-4",
      type: "work",
      title: "Full Stack Developer",
      organization: "One Click Solution",
      period: "2019 - 2023",
      description:
        "Full Stack Developer experienced in developing web applications and websites using HTML5, CSS3, JavaScript, jQuery, and Vue.js. Strong backend experience with ASP.NET and C# integrated with SQL Server for reliable data management and business logic. Also skilled in building and customizing WordPress websites, while actively working on UI/UX design to create intuitive, user-friendly, and well-structured digital experiences.",
    },
  ],
  education: [
    {
      id: "edu-1",
      type: "education",
      title: "Bachelor of Information Technology",
      organization: "Royal University of Law and Economics",
      period: "2017 - 2021",
      description:
        "Studied core IT subjects including software development, database systems, web technologies, and system analysis, building a strong foundation in programming, problem-solving, and practical application of information technology.",
    },
    {
      id: "edu-2",
      type: "education",
      title: "Bac II",
      organization: "Hun Sen Prasot High School(Grade 10-12)",
      period: "2014 - 2017",
      description:
        "Studied general education subjects to develop critical thinking and general knowledge.",
    },
    {
      id: "edu-2",
      type: "education",
      title: "Bac I",
      organization: "Prey Ramdual Secondary School(Grade 7-9)",
      period: "2011 - 2014",
      description:
        "Studied general education subjects to develop critical thinking and general knowledge.",
    },
  ],
};

// Process
export const processData = {
  label: "Work Process",
  title: "How It Works",
  steps: [
    {
      id: 1,
      title: "Discovery",
      description:
        "Understanding your business, goals, target audience, and project requirements through in-depth research and analysis.",
    },
    {
      id: 2,
      title: "Design",
      description:
        "Creating wireframes, prototypes, and high-fidelity designs that align with your brand and user needs.",
    },
    {
      id: 3,
      title: "Delivery",
      description:
        "Providing final assets, documentation, and ongoing support to ensure successful implementation.",
    },
  ],
};

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonialsData: {
  label: string;
  title: string;
  items: Testimonial[];
} = {
  label: "Testimonials",
  title: "What People Say",
  items: [
    {
      id: "1",
      name: "Sreng Rithea",
      role: "Assistant Supervisor",
      company: "Chip Mong Bank",
      content:
        "Working with Veasna has been a great experience. He has strong full-stack skills and a clear understanding of both frontend and backend development. He consistently delivers clean, maintainable code and is always willing to help the team solve complex problems.",
      avatar:
        "/man.png",
      rating: 5,
    },
    {
      id: "2",
      name: "Pach Narin",
      role: "Card System Developer",
      company: "ABA Bank",
      content:
        "Veasna is a reliable full stack developer who understands business requirements quickly and turns them into practical solutions. His ability to manage CMS-based websites and custom features makes him a valuable asset to any project.",
      avatar:
        "/man.png",
      rating: 5,
    },
    {
      id: "3",
      name: "Sam Rithesen",
      role: "Reporting Officer",
      company: "SBILHBank",
      content:
        "Veasna shows solid technical growth in his full stack journey. He is detail-oriented, adaptable to new technologies, and takes ownership of the systems he builds—from database design to deployment.",
      avatar:
        "/man.png",
      rating: 5,
    }
  ],
};

// FAQ
export const faqData = {
  label: "FAQ",
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What is your design process?",
      answer:
        "My design process follows a user-centered approach: Discovery, Research, Ideation, Design, Testing, and Iteration. I ensure every design decision is backed by user needs and business goals.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on scope. A simple landing page takes 1-2 weeks, while a complete product design can take 4-8 weeks. I always provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What tools do you use?",
      answer:
        "I primarily use Figma for UI/UX design, Photoshop and Illustrator for graphics, and tools like Framer and Webflow for interactive prototypes.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes! I offer maintenance packages and ongoing design support to ensure your product continues to evolve and improve based on user feedback.",
    },
  ],
};

// Contact
export const contactData = {
  label: "Get in Touch",
  title: "Let's Work Together",
  subtitle: "Have a project in mind? Let's create something amazing together.",
  email: "sanveasna096@gmail.com",
  socials: [
    { name: "Telegram", url: "https://t.me/VeasnaPH", icon: "telegram" },
    { name: "LinkedIn", url: "www.linkedin.com/in/veasna-san-098b3b22a", icon: "linkedin" },
    { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
    { name: "Behance", url: "https://behance.com", icon: "behance" },
  ],
};

// Footer
export const footerData = {
  copyright: `© ${new Date().getFullYear()} San Veasna. All rights reserved.`,
  tagline: "Designed with passion in San Francisco",
};
