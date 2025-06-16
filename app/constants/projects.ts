import { Project } from "../type/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Pilates Studio L",
    slug: "/pilates-studio-l",
    images: {
      desktop: "/images/studio-l-desktop.png",
      mobile: "/images/studio-l-mobile.png",
      alt: "Pilates Studio L",
    },
    url: "https://www.pilates-studio-l.com/",
    roles: "Copywriting, Site Design/Development",
    development:
      "Next.js, TypeScript, React.js, Tailwind CSS, Framer Motion, JavaScript, HTML/CSS",
    projectSummary:
      "Designed and developed a brand-forward website for Pilates Studio L, blending clean aesthetics with interactive elements to reflect the studio’s identity.",
    duration: "1.5 months",
    projectOverview:
      "Pilates Studio L needed a digital presence that reflected both professionalism and approachability. I crafted a bespoke visual identity and implemented thoughtful UI/UX strategies using Next.js and Framer Motion to create a fluid, elegant user experience. The site not only elevates their brand but also makes navigation intuitive for new and returning clients.",
  },
  {
    id: 2,
    name: "Social Skool by KEELEY IVERSON",
    url: "https://www.socialskool.com/",
    slug: "/social-skool",
    images: {
      desktop: "/images/social-skool-desktop.png",
      mobile: "/images/social-skool-mobile.png",
      alt: "Social Skool by Keeley Iverson",
    },
    roles: "Site Design/Development, SEO Optimization",
    development:
      "Next.js, TypeScript, React.js, Tailwind CSS, Framer Motion, WordPress (headless CMS), JavaScript, HTML/CSS",
    projectSummary:
      "Designed and developed a visually rich, high-performance website for Social Skool — with a strong focus on UGC storytelling and SEO-driven strategy, among other services — all wrapped in seamless, conversion-focused navigation.",
    duration: "1.5 months",
    projectOverview:
      "For Social Skool, led by Keeley Iverson, I built a custom image-focused website using WordPress as a headless CMS. The site showcases Keeley’s services in social media strategy and UGC content creation among other services while achieving top-tier performance (99% score). With a clear user journey and SEO-optimized structure, the site effectively guides visitors to her service plans and drives conversions.",
  },
  {
    id: 3,
    name: "松の杜 くげぬま",
    url: "https://www.matsunomorikugenuma.com/",
    slug: "/matsunomori",
    images: {
      desktop: "/images/matsumori-desktop.png",
      mobile: "/images/matsumori-mobile.png",
      alt: "松の杜 くげぬま",
    },
    roles:
      "Site Design/Development, CMS Integration, Member-Only Functionality",
    development:
      "Next.js, TypeScript, React.js, Tailwind CSS, Framer Motion, WordPress (headless CMS), NextAuth.js",
    projectSummary:
      "Designed and built a culturally sensitive website for a historical Japanese property, blending traditional aesthetics with modern tech — including a members-only login and CMS-powered updates.",
    duration: "1 month",
    projectOverview:
      "松の杜 くげぬま is a registered cultural property in Japan now operating as a rental and event space. The website was designed to reflect the elegance of the building’s heritage, featuring vertical Japanese typography and subtle entrance animations. A members-only news page was implemented using NextAuth for secure login, while WordPress as a headless CMS allows the property owner to easily manage and update site content. The result is a clean, timeless design that balances history with modern usability.",
  },
];
