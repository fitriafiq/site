<template>
    <GridHalf :id="props.content.intro.label">
        <div class="md:pe-16 my-auto">
            <h6 data-aos="fade-right" data-aos-duration="1000"
                class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
                {{ props.content.intro.label }}</h6>
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="block md:hidden my-8" autoplay
                loop playsinline muted :src="colorMode === 'dark' ? config.public.API_URL + props.content.visual.visual_dark.data.attributes.url : config.public.API_URL + props.content.visual.visual_light.data.attributes.url"></video>
            <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
                class="md:mt-16 leading-10 md:leading-normal">{{ props.content.intro.title }}</h2>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="mt-5 mb-8 md:mb-16 leading-7">{{
                props.content.description }}</p>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                <button @click="settings.navigateMenu(props.content.button.url)">{{ props.content.button.label
                }}</button>
            </div>
        </div>
        <div class="justify-end ps-16 hidden md:flex">
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" autoplay loop playsinline muted
                :src="colorMode === 'dark' ? config.public.API_URL + props.content.visual.visual_dark.data.attributes.url : config.public.API_URL + props.content.visual.visual_light.data.attributes.url"></video>
        </div>
    </GridHalf>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['content'])
const config = useRuntimeConfig()
const settings = useSettings()
const colorMode = ref(null)

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})
</script>