import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        blogcard: "10px 10px 0 0 rgba(0, 0, 0)"
      },
      colors: {
        faqtext: "hsl(292, 42%, 14%)",
        faq: "hsl(275, 100%, 97%)",
        faqdata: "hsl(292, 16%, 49%)"
      }
    }
  },
  plugins: []
};
export default config;
