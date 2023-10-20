<template>
    <NuxtPage />
    
    <Teleport to="body">
        <PageReveal />
    </Teleport>
</template>

<script setup>
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
