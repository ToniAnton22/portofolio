/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			keyframes:{
				fadeIn:{
					'0%':{
						opacity: 0
					},
					'100%': {
						opacity: 1
					},
					
				},
				fadeOut:{
					opacity:0
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				zoomIn: {
					'0%':{
						transform: 'scale(1)'					},
					'50%':{
						transform: 'scale(1.2)'
					},
					'100%':{
						transform: 'scale(1)'
					}
				}
			},
			animation:{
				fadeInOut: 'fadeIn 3s',
				fadeIn:'fadeIn 3s',
				fadeOut:'fadeOut 3s',
				wiggle: 'wiggle 1s ease-in-out infinite',
				zoomIn: 'zoomIn 2s ease-in-out'
			}
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	plugins: [require('@tailwindcss/forms'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
