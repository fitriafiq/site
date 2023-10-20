<template>
    <GridFull class="bg-[#f0f0f0] dark:bg-[#12151A]" :id="props.content.intro.label">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.intro.label }}</h6>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
            class="my-10 md:my-16 mx-auto leading-10 md:leading-normal md:px-40 2xl:px-60"
            v-html="props.content.intro.title"></h2>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <NuxtLink @click="settings.navigateMenu(props.content.button.url)" :target="props.content.button.target"
                class="btn">{{
                    props.content.button.label }}</NuxtLink>
        </div>
    </GridFull>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['content'])
const settings = useSettings()
</script>