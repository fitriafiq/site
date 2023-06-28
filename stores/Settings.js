import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
    state: () => ({
        reveal: false,
        colorMode: '',
    }),
    actions: {
        toggleReveal(url, router) {
            this.reveal = !this.reveal
            setTimeout(() => {
                router.push({ path: url })
            }, 600)
        },
        toggleColorMode() {
            this.colorMode = this.colorMode == 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', this.colorMode)
            document.documentElement.classList.toggle('dark', this.colorMode == 'dark')
        },
        initializeColorMode() {
            if (localStorage.theme == 'dark') {
                this.colorMode = 'dark'
            } else {
                this.colorMode = 'light'
            }
        }
    }
})