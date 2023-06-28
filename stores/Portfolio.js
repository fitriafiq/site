import { defineStore } from 'pinia'

export const usePortfolio = defineStore('portfolio', {
    state: () => ({
        projects: ref([])
    }),
    getters: {
        getProjects() {
            return this.projects.value?.data.sort((a, b) => a.id < b.id ? 1 : -1)
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
        async fetchPortfolioData() {
            const config = useRuntimeConfig()
            const { data } = await useFetch(`${config.public.BASE_URL}/api/portfolios?fields=*&populate[hero][fields]=url&populate=toolboxes&populate[gallery][fields]=url`)
            this.projects.value = data
        }
    }
})