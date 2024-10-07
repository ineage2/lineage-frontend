// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: {enabled: true},

    modules: [
      '@nuxt/image',
      'nuxt-aos',
      '@nuxtjs/i18n',
      '@nuxtjs/tailwindcss',
      '@nuxt/icon',
      '@nuxtjs/color-mode',
      '@nuxtjs/device',
    ],
    
    css: ['~/assets/css/_root.css', '~/assets/css/scrollbar.less', '~/assets/css/vlada.css'],

    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },

    i18n: {
        locales: [
            {code: 'en', language: 'en-US', name: 'English'},
            {code: 'ja', language: 'ja-JP', name: '日本語'},
            {code: 'ru', language: 'ru-RU', name: 'Русский'},
            {code: 'zh', language: 'zh-CN', name: '中文'}
        ],
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        vueI18n: './i18n.config.ts'
    },

    colorMode: {
        preference: 'system',
        fallback: 'dark',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classSuffix: '-mode',
        storage: 'localStorage',
        storageKey: 'nuxt-color-mode'
    },
})