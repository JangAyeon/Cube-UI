/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [],
};

export default config;
