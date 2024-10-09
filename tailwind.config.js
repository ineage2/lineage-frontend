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
                'vlada-gradient-1': 'linear-gradient(0deg, rgba(249, 250, 251, 1) 5%, rgba(249, 250, 251, 0.5) 40%, rgba(249,0,0,0) 80%);',
                'vlada-gradient-2': 'linear-gradient(180deg, rgba(249, 250, 251, 1) 5%, rgba(249, 250, 251, 0.5) 40%, rgba(249,0,0,0) 80%);',
                'vlada-gradient-3': 'linear-gradient(0deg, rgba(24,24,27, 1) 5%, rgba(24,24,27, 0.5) 40%, rgba(249,0,0,0) 80%);',
                'vlada-gradient-4': 'linear-gradient(180deg, rgba(24,24,27, 1) 5%, rgba(24,24,27, 0.5) 40%, rgba(249,0,0,0) 80%);',
                'vlada-gradient-5': 'linear-gradient(120deg, rgb(42, 34, 22), rgb(111, 81, 35))',
                'vlada-gradient-6': 'linear-gradient(rgb(106, 36, 8), rgb(183, 60, 11))',
            },
            colors: {
                'vlada-color-1': '#dcbb8f',
                'vlada-color-2': '#d8a774',
                'vlada-color-3': '#e6c39b',
                'vlada-color-4': 'rgb(177, 152, 105)',
                'vlada-color-5': 'rgb(34, 24, 13)',
                'vlada-color-6': 'rgba(43,33,25,0.8)',
                'vlada-color-7': 'rgb(255, 240, 211)',
            },
            fontFamily: {
                'arpona-regular': ['arpona-regular', 'sans-serif'],
                'one-lord': ['one-lord', 'sans-serif'],
            },
            opacity: {
                '2': '0.02'
            },
            aspectRatio: {
                '16-6': '16 / 6',
                '16-7': '16 / 7',
                '16-8': '16 / 8',
                '4-3': '4 / 3',
            },
        },
    },
    plugins: [],
}

