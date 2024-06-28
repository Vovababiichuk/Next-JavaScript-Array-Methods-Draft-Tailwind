import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'custom-gradient':
					'linear-gradient(90deg, #F80479 19.26%, #8828E9 91.39%)',
			},
			colorText: {
				'accent-text': '#F80479',
				'green-text': '#12d979',
			},
			boxShadow: {
				'shadow-neon':
					'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1), 0 0 0 3px #F80479',
			},
		},
	},
	plugins: [],
}
export default config
