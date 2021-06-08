module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				kanit: 'Kanit'
			},
			height: {
				v60: '60vh',
				v90: '90vh'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	xwind: {
		mode: 'objectstyles'
	}
}
