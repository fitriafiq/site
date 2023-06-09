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
            // console.log(localStorage.theme)
        },
        initializeColorMode() {
            localStorage.clear()
            if (!('theme' in localStorage)) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('theme', 'dark')
                    document.documentElement.classList.add('dark')
                    this.colorMode = 'dark'
                } else {
                    localStorage.setItem('theme', 'light')
                    document.documentElement.classList.remove('dark')
                    this.colorMode = 'light'
                }
            } else {
                if (localStorage.theme == 'dark') {
                    document.documentElement.classList.add('dark')
                    this.colorMode = 'dark'
                } else {
                    document.documentElement.classList.remove('dark')
                    this.colorMode = 'light'
                }
            }
            // console.log(localStorage.theme)
            // const sessionTheme = sessionStorage.getItem('theme')
            // const preferredTheme = localStorage.getItem('theme')

            // if (sessionTheme)
            // if (preferredTheme && preferredTheme === 'light') {
            //     this.colorMode = 'light'
            // } else {

            // }

            // this.colorMode = sessionTheme && sessionTheme === 'light' ? 'light' : 'dark'

            // // if (this.colorMode == 'light') {
            // //     document.body.classList.remove('dark')
            // // }
            // document.documentElement.classList.toggle('dark', this.colorMode == 'dark')
            // // console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            // console.log(localStorage.theme)
        }
    }
})