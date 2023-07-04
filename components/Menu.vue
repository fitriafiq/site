<template>
    <div
        class="nav fixed z-10 invisible duration-1000 transition-all before:bg-[#35383c6e] dark:before:bg-[#35383c6e] before:content-[''] before:fixed before:w-screen before:h-screen before:z-[-1] before:transition-transform before:duration-1000 before:delay-100 before:translate-x-0 before:-translate-y-full after:bg-[#fdfdfd] dark:after:bg-[#12151a] after:content-[''] after:fixed after:w-screen after:h-screen after:z-[-1] after:transition-transform after:duration-1000 after:delay-0 after:translate-x-0 after:-translate-y-full">
        <div
            class="fixed translate-x-0 -translate-y-2/4 w-full text-center text-[calc(2vw_+_10px)] font-extralight cursor-pointer top-2/4 flex items-center flex-col gap-10">
            <NuxtLink @click="emit('toggleMenu', $event)" to="/"
                class="nav-item relative inline-block opacity-0 translate-x-0 translate-y-full nav-item-transition after:content-[''] after:absolute after:w-full after:h-px after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:scale-x-0 after:bottom-0 after:inset-x-0 hover:after:scale-x-100">
                HOME</NuxtLink>
            <NuxtLink @click="emit('toggleMenu', $event)" to="/about"
                class="nav-item relative inline-block opacity-0 translate-x-0 translate-y-full nav-item-transition after:content-[''] after:absolute after:w-full after:h-px after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:scale-x-0 after:bottom-0 after:inset-x-0 hover:after:scale-x-100">
                ABOUT</NuxtLink>
            <NuxtLink @click="emit('toggleMenu', $event)" to="/work"
                class="nav-item relative inline-block opacity-0 translate-x-0 translate-y-full nav-item-transition after:content-[''] after:absolute after:w-full after:h-px after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:scale-x-0 after:bottom-0 after:inset-x-0 hover:after:scale-x-100">
                WORK</NuxtLink>
            <NuxtLink @click="emit('toggleMenu', $event)" to="/contact"
                class="nav-item relative inline-block opacity-0 translate-x-0 translate-y-full nav-item-transition after:content-[''] after:absolute after:w-full after:h-px after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:scale-x-0 after:bottom-0 after:inset-x-0 hover:after:scale-x-100">
                CONTACT</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits([
    'toggleMenu'
])
</script>
