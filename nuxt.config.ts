require('dotenv').config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt',
    ],
    app: {
        head: {
            title: 'Fitri Afiq - Web Developer',
            meta: [
                {
                    name: 'description',
                    content: 'Welcome to my portfolio website! Here you\'ll find a showcase of my skills and experience, as well as a brief overview of my resume. Explore my portfolio to see examples of my work and get in touch to discuss your next project!'
                }
            ]
        }
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL,
            API_TOKEN: process.env.API_TOKEN,
        },
        MAIL_HOST: process.env.MAIL_HOST,
        MAIL_PORT: process.env.MAIL_PORT,
        MAIL_USER: process.env.MAIL_USER,
        MAIL_PASSWORD: process.env.MAIL_PASSWORD
    },
})
