/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            maxWidth: {
                'big': '1700px',
                'medium': '',
                'small': '',
                'small2': '',
            },
            colors: {
                'vlada-color-1': '#070606',
                'vlada-color-2': '#dcbb8f',
                'vlada-color-3': '#d8a774',
                'vlada-color-4': '#252525',
                'vlada-color-5': 'rgb(235, 230, 219)',
                'vlada-color-6': '#373737',
            },
            fontFamily: {
                'arpona-regular': ['arpona-regular', 'sans-serif'],
                'one-lord': ['one-lord', 'sans-serif'],
            },
            opacity: {
                '2': '0.02'
            },
            aspectRatio: {
                '16-7': '16 / 7',
                '16-8': '16 / 8',
                '4-3': '4 / 3',
            },
        },
    },
    plugins: [],
}

