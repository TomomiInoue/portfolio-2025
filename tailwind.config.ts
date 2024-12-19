const {nextui} = require("@nextui-org/react");

const extendedTheme = {
  colors: {
    primary: "#fff8ed",
    secondary: "#393636",
    accent: "#2273f3",
  },
  fontSize: {
    display01: ["48px", { lineHeight: "120%", fontWeight: "600", fontFamily: "Abril Fatface" }],
    display02: ["60px", { lineHeight: "120%", fontWeight: "600", fontFamily: "Abril Fatface" }],
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
