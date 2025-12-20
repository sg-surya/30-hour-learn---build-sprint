/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0B10',
                surface: '#11131A',
                border: '#1C1F2A',
                primary: '#6D7CFF',
                accentPurple: '#8B5CF6',
                muted: '#9AA0B3',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fluid-blob': 'fluid-blob-slow 60s ease-in-out infinite',
            },
            keyframes: {
                'fluid-blob-slow': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)' },
                    '33%': { transform: 'translate(-47%, -53%) rotate(120deg) scale(1.05)' },
                    '66%': { transform: 'translate(-53%, -47%) rotate(240deg) scale(0.95)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg) scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
