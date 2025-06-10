import { Project } from "../type/types";

export const projects: Project[] = [
  {
    name: "Pilates Studio L",
    slug: "/pilates-studio-l",
    description:
      "A brief, compelling explanation about what makes this site special. For example: custom booking integration, playful UX, or high-performance design.",
    // desktopVideo: "/videos/site1-desktop.mp4",
    // mobileVideo: "/videos/site1-mobile.mp4",
    images: {
      desktop: "/images/studio-l-desktop.png",
      mobile: "/images/studio-l-mobile.png",
      alt: "Pilates Studio L",
    },
    url: "https://www.pilates-studio-l.com/",
  },
  {
    name: "Social Skool by KEELEY IVERSON",
    description:
      "A beautifully branded site for a wellness studio with responsive animations and SEO optimization.",
    // desktopVideo: "/videos/site2-desktop.mp4",
    // mobileVideo: "/videos/site2-mobile.mp4",
    url: "https://www.socialskool.com/",
    slug: "/social-skool",
    images: {
      desktop: "/images/social-skool-desktop.png",
      mobile: "/images/social-skool-mobile.png",
      alt: "Social Skool by Keeley Iverson",
    },
  },
  {
    name: "松の杜 くげぬま",
    description:
      "An e-commerce site built with Stripe and CMS integration, tailored for ethical handmade goods.",
    url: "https://example.com",
    slug: "/matsunomori",
    images: {
      desktop: "/images/matsumori-desktop.png",
      mobile: "/images/matsumori-mobile.png",
      alt: "松の杜 くげぬま",
    },
  },
];
