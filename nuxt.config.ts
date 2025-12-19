require('dotenv').config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt',
        'nuxt-swiper',
        'nuxt-gtag',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
    ],
    site: {
        url: process.env.BASE_URL,
    },
    sitemap: {
        urls: [
            '/',
            '/about',
            '/work',
            '/work/fantasyxchange',
            '/work/gravitas-digital',
            '/work/ytl-foundation',
            '/work/taskly',
            '/contact',
        ]
    },
    gtag: {
        id: 'G-XKLDDYRRD2'
    },
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: "/favicon_light.ico" }]
        }
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
            API_URL: process.env.API_URL,
            API_TOKEN: process.env.API_TOKEN,
        },
        MAIL_HOST: process.env.MAIL_HOST,
        MAIL_PORT: process.env.MAIL_PORT,
        MAIL_USER: process.env.MAIL_USER,
        MAIL_PASSWORD: process.env.MAIL_PASSWORD
    },
})
