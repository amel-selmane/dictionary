/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#050505",
        "dark-black": "#1F1F1F",
        "midlight-black": "#2D2D2D",
        "dark-grey": "#3A3A3A",
        "mid-grey": "#757575",
        "midlight-grey": "#E9E9E9",
        "light-grey": "#F4F4F4",
        "custom-purple": "#A445ED",
        "custom-red": "#FF5252"
      },
      screens: {
				// => @media (min-width: 736px) { ... }
				desktop: "740px",
			},
    },
  },
  plugins: [],
}

