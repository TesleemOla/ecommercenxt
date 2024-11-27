import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionProperty:{
      width: "width"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        button: "#ea4335",
        drpbg: "rgba(0,0,0,0.4)",
        hovred: "#db4444"
      },
    
    },
  },
  plugins: [],
};
export default config;
