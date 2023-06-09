// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt',
    ],
    app: {
        head: {
            // htmlAttrs: {
            //     class: 'dark'
            // },
            title: 'Fitri Afiq | Web Developer',
            meta: [
                {
                    name: 'description',
                    content: 'Welcome to my portfolio website! Here you\'ll find a showcase of my skills and experience, as well as a brief overview of my resume.My target audience is potential freelance clients who are looking for a skilled and experienced web developer. Explore my portfolio to see examples of my work and get in touch to discuss your next project!'
                }
            ]
        }
    },
})
