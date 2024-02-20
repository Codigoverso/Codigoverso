/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1c64f2',
				secondary: '#ba0',
			  }
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
