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
  name: string;
  description: string;
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
};
