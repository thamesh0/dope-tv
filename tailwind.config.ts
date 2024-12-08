import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			background: "#000",
			primary: "#fff",
			"background-contrast": "#111",
			dark: "#1d1d1f",

			white: "#fff",
			black: "#000",
		},
		extend: {},
	},
	darkMode: "class",
};
export default config;
