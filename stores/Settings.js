import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', () => {
    const reveal = ref(false)
    const colorMode = ref('')

    const navigateMenu = (url, menu = false) => {
        const delay = ref(700)

        !menu ? reveal.value = !reveal.value : delay.value = 300

        setTimeout(async () => {
            await navigateTo({ path: url })
        }, delay.value)
    }

    const toggleColorMode = () => {
        colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', colorMode.value)
        document.documentElement.classList.toggle('dark', colorMode.value === 'dark')
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