// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    devtools: {enabled: true},
    app: {
        // baseURL: '/lineage-frontend/'
    },
    modules: [
        '@nuxt/image',
        'nuxt-aos',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss'
    ],
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
    }
})
