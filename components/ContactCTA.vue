<template>
    <GridFull class="bg-[#f0f0f0] dark:bg-[#12151A]">
        <h6 data-aos="fade-down" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            CONTACT</h6>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="my-10 md:my-16 md:px-64 mx-auto leading-10 md:leading-normal">Let's get connected before my inbox starts
            talking to itself.</h2>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <NuxtLink @click="settings.toggleReveal('/contact', useRouter())" class="btn">SAY HELLO</NuxtLink>
        </div>
    </GridFull>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const settings = useSettings()
</script>