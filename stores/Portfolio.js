import { defineStore } from 'pinia'

export const usePortfolio = defineStore('portfolio', {
    state: () => ({
        projects: [
            {
                id: 1,
                name: 'Taskly',
                slug: 'taskly',
                image: '/_nuxt/assets/images/lemons.png',
                excerpt: 'Task management app that helps you stay organized, prioritize your tasks, and track your progress.',
                tech: [5, 8, 13]
            },
            {
                id: 2,
                name: 'Expendio',
                slug: 'expendio',
                image: '/_nuxt/assets/images/lemons.png',
                excerpt: 'Finance app that helps you track and manage your expenses, income, and spending patterns.',
                tech: [5, 8, 13]
            },
            {
                id: 3,
                name: 'Worduel',
                slug: 'Worduel',
                image: '/_nuxt/assets/images/lemons.png',
                excerpt: 'Word guessing game where you compete against your friends in a limited amount of time.',
                tech: [5, 8, 13]
            },
            {
                id: 4,
                name: 'JobLink',
                slug: 'joblink',
                image: '/_nuxt/assets/images/lemons.png',
                excerpt: 'Job search app that helps users find job opportunities and apply for them easily.',
                tech: [5, 8, 13]
            }
        ]
    }),
    getters: {
        getProjects() {
            return this.projects.sort((a, b) => a.id < b.id ? 1 : -1)
        },
        getProject(state) {
            return (slug) => state.projects.find((project) => project.slug == slug)
        },
        getOtherProjects(state) {
            return (slug) => state.projects.filter((project) => project.slug != slug)
                .sort((a, b) => a.id < b.id ? 1 : -1)
        },
        getTotalProjects(state) {
            return state.projects.length
        },
    },
    actions: {
    }
})