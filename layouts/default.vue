<template>
    <NuxtPage />

    <Teleport to="body">
        <PageReveal />
    </Teleport>
</template>

<script setup>
import { useSettings } from '~/stores/Settings';

const settings = useSettings()

onMounted(() => {
    settings.toggleFirstLoad()
    const favicon = computed(() => !window.matchMedia('(prefers-color-scheme: dark)').matches ? '/favicon_light.ico' : '/favicon_dark.ico')

    useHead({
        link: [
            { rel: 'icon', type: 'image/x-icon', href: favicon },
        ],
    })
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
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
