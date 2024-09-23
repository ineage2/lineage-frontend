/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            maxWidth: {
                'big': 'calc(1920px - (162px * 2px))',
                'medium': 'calc(1280px - (162px * 2px))',
                'small': 'calc(1920px - (162px * 2px))',
                'small2': 'calc(1920px - (162px * 2px))',
            },
            colors: {
                'vlada-color-1': '#070707',
                'vlada-color-2': '#dcbb8f',
                'vlada-color-3': '#d8a774',
                'vlada-color-4': '#252525'
            },
            fontFamily: {
                'arpona-regular': ['arpona-regular', 'sans-serif'],
                'one-lord': ['one-lord', 'sans-serif'],},
            aspectRatio: {
                '16/7': '16 / 5',
                '4/3': '4 / 3',
            },
        },
    },
    plugins: [],
}

