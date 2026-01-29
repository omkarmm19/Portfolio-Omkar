/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#030014', // Deep space black
                'bg-secondary': '#0f0c29', // Darker gradient stop
                'text-primary': '#f1f5f9', // Slate 100
                'text-secondary': '#94a3b8', // Slate 400
                'accent-primary': '#a855f7', // Electric Purple
                'accent-secondary': '#0ea5e9', // Sky Blue (Cyan-ish)
                'border-color': '#1e293b', // Slate 800
                'card-bg': 'rgba(15, 23, 42, 0.6)', // Slate 900 with opacity
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'], // New display font
            },
            animation: {
                'subtle-gradient': 'subtle-gradient 15s ease infinite',
                'spotlight': 'spotlight 2s ease .75s 1 forwards',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                'subtle-gradient': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                spotlight: {
                    '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
                    '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
                },
                shimmer: {
                    from: { backgroundPosition: '0 0' },
                    to: { backgroundPosition: '-200% 0' },
                }
            }
        },
    },
    plugins: [],
    darkMode: 'class',
}
