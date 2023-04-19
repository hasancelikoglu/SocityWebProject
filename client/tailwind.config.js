/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./containers/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				dark: "#19191B",
				gray: "#25272C",
				lightGray: "#373940",
				red: "#BA2F2F",
				white: {
					full: "#fff",
					t: "rgb(255,255,255,80%)",
				},
			},
		},
	},
	plugins: [],
};
