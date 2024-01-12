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
        blogcard: "10px 10px 0 0 rgba(0, 0, 0)",
        newsletter: "0 20px 100px 10px hsl(4, 100%, 67%)"
      },
      colors: {
        faqtext: "hsl(292, 42%, 14%)",
        faq: "hsl(275, 100%, 97%)",
        faqdata: "hsl(292, 16%, 49%)",
        newsletterbg: "hsl(234, 29%, 20%)",
        newslettertomato: "hsl(4, 100%, 67%)"
      }
    }
  },
  plugins: []
};
export default config;
