import { defineStore } from 'pinia'

export const useToolbox = defineStore('toolbox', {
    state: () => ({
        expertise: ref([])
    }),
    getters: {
        getSkills() {
            return this.expertise.value?.data?.filter(tool => tool.attributes.type === 'Skills') || []
        },
        getTools() {
            return this.expertise.value?.data?.filter(tool => tool.attributes.type === 'Tools') || []
        },
        getExpertise() {
            return tech => this.expertise.value?.data?.find(item => item.id == tech)
        }
    },
    actions: {
        async fetchToolboxData() {
            const config = useRuntimeConfig()
            const { data } = await useFetch(`${config.public.BASE_URL}/api/toolboxes`)
            this.expertise.value = data
        }
    }
})