import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', () => {
    const reveal = ref(false)
    const colorMode = ref('')

    const navigateMenu = (url, menu = false) => {
        const delay = ref(700)

        !menu ? reveal.value = !reveal.value : delay.value = 400

        setTimeout(async () => {
            await navigateTo({ path: url })
        }, delay.value)
    }

    const toggleColorMode = () => {
        colorMode.value = this.colorMode === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', this.colorMode)
        document.documentElement.classList.toggle('dark', this.colorMode === 'dark')
    }

    const initializeColorMode = () => {
        colorMode.value = localStorage.theme === 'dark' ? 'dark' : 'light'
    }

    return {
        reveal,
        colorMode,
        navigateMenu,
        toggleColorMode,
        initializeColorMode
    }
})