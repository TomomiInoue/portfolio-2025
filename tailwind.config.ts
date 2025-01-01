import { nextui } from "@nextui-org/react";

const extendedTheme = {
  colors: {
    primary: "#D9CFBD",
    secondary: "#4E3B31",
    accent: "#FF6F61",
    bone: "#D9CFBD",
    cream: "#F1F3E6",
    orange: "#FF6F61",
    brown: "#4E3B31",
  },
  fontSize: {
    display01: [
      "88px",
      {
        lineHeight: "120%",
        fontWeight: "700",
        fontFamily: "font-playfairDisplay",
      },
    ],
    display02: [
      "72px",
      {
        lineHeight: "120%",
        fontWeight: "700",
        fontFamily: "font-playfairDisplay",
      },
    ],
    display03: [
      "56px",
      {
        lineHeight: "120%",
        fontWeight: "700",
        fontFamily: "font-playfairDisplay",
      },
    ],
    display04: [
      "48px",
      {
        lineHeight: "120%",
        fontWeight: "700",
        fontFamily: "font-playfairDisplay",
      },
    ],
    display05: [
      "40px",
      {
        lineHeight: "120%",
        fontWeight: "700",
        fontFamily: "font-playfairDisplay",
      },
    ],
    heading01: [
      "40px",
      { lineHeight: "120%", fontWeight: "600", fontFamily: "font-playfair" },
    ],
    heading02: [
      "32px",
      { lineHeight: "120%", fontWeight: "600", fontFamily: "font-playfair" },
    ],
    heading03: [
      "24px",
      { lineHeight: "120%", fontWeight: "600", fontFamily: "font-playfair" },
    ],
    body01: [
      "36px",
      { lineHeight: "120%", fontWeight: "500", fontFamily: "font-heebo" },
    ],
    body02: [
      "24px",
      { lineHeight: "120%", fontWeight: "500", fontFamily: "font-heebo" },
    ],
    body03: [
      "20px",
      { lineHeight: "120%", fontWeight: "500", fontFamily: "font-heebo" },
    ],
    body04: [
      "16px",
      { lineHeight: "120%", fontWeight: "500", fontFamily: "font-heebo" },
    ],
    caption01: [
      "16px",
      { lineHeight: "120%", fontWeight: "400", fontFamily: "font-heebo" },
    ],
  },
};

const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // next-ui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: extendedTheme,
    fontFamily: {
      playfairDisplay: ["Playfair Display", "serif"],
      playfair: ["Playfair Display", "sans-serif"],
      heebo: ["Heebo", "sans-serif"],
    },
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1152px",
        "2xl": "1152px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "0rem",
        xl: "0rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default tailwindConfig;
