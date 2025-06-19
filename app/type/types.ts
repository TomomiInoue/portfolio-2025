export type ImageAndTextSideBySiteType = {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
  isImageRight?: boolean;
};

export type TimelineItemType = {
  date: string;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Project = {
  id: number;
  name: string;
  // description: string;
  url: string;
  slug: string;
  video?: {
    desctop: string;
    mobile: string;
    alt: string;
  };
  images?: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  roles?: string;
  development?: string;
  projectSummary?: string;
  duration?: string;
  projectOverview?: string;
};

export type Locale = "en-AU" | "ja";

export type AllowedLocales = Locale[];

export type I18NConfig = {
  locales: string[];
  defaultLocale: string;
  prefixDefault: boolean;
};
