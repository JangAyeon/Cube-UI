import { tailwindPreset } from "./src/libs/tailwind-preset";

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [tailwindPreset],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
