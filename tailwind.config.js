/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#7742B7',
				secondary: '#8E44AD',
				accent: '#BB86FC',
				background: '#ffffff',
				bg: '#FBFBFB',
				text: '#000000',
				desc: '#828B9B',
				border: '#F2F4F7',
				shadow: '#E0E0E0',
			},
		},
	},
	plugins: [],
};
