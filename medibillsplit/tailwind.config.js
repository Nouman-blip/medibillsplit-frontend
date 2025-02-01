/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{ts,tsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "#60A5FA", // Blue
			foreground: "#FFFFFF",
		  },
		  secondary: {
			DEFAULT: "#1A1D1F",
			foreground: "#FFFFFF",
		  },
		  medibill: {
			dark: "#0A0C0F",
			card: "#1A1D1F",
			blue: "#60A5FA",
			purple: "#818CF8",
			teal: "#2DD4BF",
			text: "#FFFFFF",
			muted: "#8A8F98",
		  },
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  
  