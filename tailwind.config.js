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
                'vlada-color-primary': '#141414',
            },
            fontFamily: {
                'manrope': ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

