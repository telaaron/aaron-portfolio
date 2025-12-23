/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geist Sans', 'system-ui', 'sans-serif'],
				mono: ['Geist Mono', 'Courier New', 'monospace']
			},
			colors: {
				'deep-black': '#0A0A0A',
				'electric-blue': '#0066FF',
				'gray-900': '#1A1A1A',
				'gray-800': '#2A2A2A',
				'gray-700': '#3A3A3A',
				'gray-200': '#E5E5E5',
				'success': '#00FF66',
				'warning': '#FFB800'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-in-out',
				'slide-up': 'slideUp 0.6s ease-in-out',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-slow': 'bounce 2s infinite',
				'line-draw': 'lineDraw 3s ease-in-out forwards'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				lineDraw: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
};
