import { nextui } from "@nextui-org/react";

const extendedTheme = {
  colors: {
    primary: "#D9CFBD",
    secondary: "#FF6F61",
    bone: "#D9CFBD",
    cream: "#F1F3E6",
    lightBlue: "#C2DEDC",
    darkGreen: "#0D4955",
    orange: "#FF6F61",
  },
  fontSize: {
    display01: ["48px", { lineHeight: "120%", fontWeight: "600" }],
    display02: ["60px", { lineHeight: "120%", fontWeight: "600" }],
    heading01: ["36px", { lineHeight: "120%", fontWeight: "600" }],
  }
}

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
