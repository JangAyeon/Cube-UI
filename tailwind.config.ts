/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        blue_100: "#E6F0FD",
        blue_200: "#0A68EC",
        blue_300: "#1d49d8",
        primary: "#0A68EC", // blue_200
        red_100: "#fee2e2",
        red_200: "#ef4444",
        red_300: "#dc2626",
        red: "#ef4444", // red_200
        gray_100: "#e5e7eb",
        gray_200: "#6b7280",
        gray_300: "#4b5563",
        gray_400: "#374151",
        gray: "#6b7280", // gray_200
      },
      fontSize: {
        Heading_100: [
          "1.8rem",
          {
            fontWeight: "600", // semi-bold
            lineHeight: "2.6rem",
            letterSpacing: "-0.025rem",
          },
        ],
        Title_200: [
          "1.8rem",
          {
            fontWeight: "700", // bold
            lineHeight: "2.6rem",
            letterSpacing: "0rem",
          },
        ],
        Title_100: [
          "1.6rem",
          {
            fontWeight: "700", // bold
            lineHeight: "2.4rem",
            letterSpacing: "0rem",
          },
        ],
        Detail_300: [
          "1.6rem",
          {
            fontWeight: "400", // regular
            lineHeight: "2.2rem",
            letterSpacing: "0rem",
          },
        ],
        Detail_200: [
          "1.4rem",
          {
            fontWeight: "400", // regular
            lineHeight: "2.0rem",
            letterSpacing: "-0.025rem",
          },
        ],
        Detail_100: [
          "1.3rem",
          {
            fontWeight: "400", // regular
            lineHeight: "2.2rem",
            letterSpacing: "0rem",
          },
        ],
        Body_300: [
          "1.6rem",
          {
            fontWeight: "600", // semi
            lineHeight: "2.2rem",
            letterSpacing: "0rem",
          },
        ],
        Body_200: [
          "1.6rem",
          {
            fontWeight: "500", // med
            lineHeight: "2.2rem",
            letterSpacing: "0rem",
          },
        ],
        Body_100: [
          "1.3rem",
          {
            fontWeight: "500", // med
            lineHeight: "1.8rem",
            letterSpacing: "0rem",
          },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
