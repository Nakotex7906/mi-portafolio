/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        // paleta personalizada
				primary: {
          DEFAULT: '#a855f7', // Un morado vibrante (purple-500)
          foreground: '#ffffff',
          dark: '#581c87',    // Morado oscuro para hovers
        },
        background: '#030014', // Un negro con un tinte muy sutil morado (casi negro)
			},
      // Animaciones personalizadas 
      animation: {
        // ... otras animaciones
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
		},
	},
	plugins: [],
};