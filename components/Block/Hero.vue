<template>
    <section
        :style="colorMode !== null ? (colorMode === 'dark' ? `background-image: linear-gradient(${portfolio === '' ? 'transparent, transparent, transparent, #191C22' : 'transparent, #191C22'}),url(${config.public.API_URL + props.content.background.background_dark.data.attributes.url})` : `background-image: linear-gradient(${portfolio === '' ? 'transparent, transparent, transparent, #fdfdfd' : 'transparent, #fdfdfd'}),url(${config.public.API_URL + props.content.background.background_light.data.attributes.url})`) : ''"
        class="relative flex h-screen bg-cover bg-no-repeat bg-center transition-all duration-200">
        <div class="container my-auto text-center">
            <p data-aos="fade-down" data-aos-duration="1000"
                class="mb-3 text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">{{ props.content.label }}</p>
            <h1 :class="portfolio !== '' ? 'text-8xl' : ''" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                class="leading-tight md:leading-normal">{{
                    props.content.title }}</h1>
            <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" class="my-6 border-gray-500">
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" class="md:px-56 mx-auto mb-10">{{
                props.content.description }}</p>
            <NuxtLink data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" v-if="portfolio !== ''"
                :to="portfolio" target="_blank" class="btn">VISIT WEBSITE</NuxtLink>
            <NuxtLink :to="`#${props.chevronLink}`" class="cursor-none">
                <Icon class="absolute animate-bounce bottom-2 inset-x-1/2 -translate-x-2/4 -translate-y-2/4;"
                    name="mdi:chevron-down" size="40" />
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '#components'
import { useSettings } from '@/stores/Settings'

const config = useRuntimeConfig()
const props = defineProps(['content', 'chevronLink', 'portfolio'])
const settings = useSettings()
const colorMode = ref(null)

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})
</script>
