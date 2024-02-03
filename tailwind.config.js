/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            lora: ["Lora", "serif"],
            inconsolata: ["Inconsolata", "monospace"],
        },
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
                "custom-red": "#FF5252",
            },
            boxShadow: {
                window: "0 5px 30px 0px rgba(0, 0, 0, 0.1)",
                darkWindow: "0px 5px 30px 0px #A445ED",
                selectedInput: "0px 0px 20px 0px #A445ED",
                erroredInput: "0px 0px 20px 0px #FF5252"
            },
            screens: {
                // => @media (min-width: 736px) { ... }
                desktop: "740px",
            }
        },
    },
    darkMode: 'class',
    plugins: [],
};
