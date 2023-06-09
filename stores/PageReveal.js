import { defineStore } from 'pinia'

export const usePageReveal = defineStore('pageReveal', {
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
            // this.colorMode = this.colorMode == 'dark' ? 'light' : 'dark'
            // localStorage.setItem('theme', this.colorMode ? 'dark' : 'light')
            // document.documentElement.classList.toggle('dark', this.colorMode == 'dark')
            // console.log(localStorage.theme)
        },
        initializeColorMode() {
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