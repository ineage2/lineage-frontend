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
            backgroundImage: {
                'vlada-gradient-1': 'linear-gradient(0deg, rgba(249, 250, 251, 1) 2%, rgba(249, 250, 251, 0.5) 20%, rgba(249,0,0,0) 80%);',
            },
            colors: {
                'vlada-color-1': '#dcbb8f',
                'vlada-color-2': '#d8a774',
                'vlada-color-3': '#e6c39b',
                'vlada-color-4': 'rgb(177, 152, 105)',
                'vlada-color-5': 'rgb(34, 24, 13)',
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

