<template>
    <NuxtPage />
    
    <Teleport to="body">
        <PageReveal />
        
    </Teleport>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const settings = useSettings()
const outer = ref(null)
const inner = ref(null)

// onMounted(() => {
//     let n = 0
//     let i = 0
//     let o = !1

//     window.onmousemove = (s) => {
//         o || (inner.value.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)")
//         outer.value.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"
//         n = s.clientY
//         i = s.clientX
//     }

//     let elements = document.querySelectorAll('a, button:not(:disabled), .menu-wrapper, .color-mode, input[role="switch"]')

//     elements.forEach((el) => {
//         el.onmouseenter = () => {
//             outer.value.classList.add("cursor-hover")
//             inner.value.classList.add("cursor-hover")
//         }

//         el.onmouseleave = () => {
//             outer.value.classList.remove("cursor-hover")
//             inner.value.classList.remove("cursor-hover")
//         }
//     })

//     outer.value.style.visibility = "visible"
//     inner.value.style.visibility = "visible"

//     settings.initializeColorMode()
// })

useHead({
    script: [
        {
            children: `
            if (!('theme' in localStorage)) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('theme', 'dark')
                    document.documentElement.classList.add('dark')
                } else {
                    localStorage.setItem('theme', 'light')
                    document.documentElement.classList.remove('dark')
                }
            } else {
                if (localStorage.theme === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                   
                }
            }
            `
        }
    ]
})
</script>
