<template>
    <!-- <section
        :style="colorMode !== null ? (colorMode === 'dark' ? `background-image: url(${config.public.BASE_URL + props.content.background.background_dark.data.attributes.url})` : `background-image: url(${config.public.BASE_URL + props.content.background.background_light.data.attributes.url})`) : ''"
        class="relative flex h-screen bg-cover bg-no-repeat transition-all duration-200">
        <div class="container my-auto text-center">
            <template v-if="props.content.__component === 'block.hero-primary'">
                <p data-aos="fade-down" data-aos-duration="1000" class="mb-3">{{ props.content.subtitle }}</p>
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                    class="leading-tight md:leading-normal">{{ props.content.title }}</h1>
                <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" class="my-6 border-gray-500">
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" class="md:w-96 mx-auto">{{
                    props.content.description }}</p>
            </template>
            <template v-else>
                <h1 data-aos="fade-down" data-aos-duration="1000" class="leading-tight md:leading-normal">{{
                    props.content.title
                }}
                </h1>
                <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" class="my-10 border-gray-500">
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"
                    class="flex justify-center gap-x-4 md:gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
                    <template v-for="(anchor, index) in anchors">
                        <a class="cursor-none" :href="`#${anchor.label}`">{{ anchor.label }}</a>
                        <span v-if="index !== (anchors.length - 1)">•</span>
                    </template>
                </div>
            </template>
            <a :href="`#${props.chevronLink}`" class="cursor-none">
                <Icon class="absolute bottom-2 inset-x-1/2 -translate-x-2/4 -translate-y-2/4;" name="mdi:chevron-down"
                    size="40" />
            </a>
        </div>
    </section> -->
    <section
        :style="colorMode !== null ? (colorMode === 'dark' ? `background-image: linear-gradient(transparent, #191C22),url(${config.public.BASE_URL + props.content.background.background_dark.data.attributes.url})` : `background-image: url(${config.public.BASE_URL + props.content.background.background_light.data.attributes.url})`) : ''"
        class="relative flex h-screen bg-cover bg-no-repeat transition-all duration-200">
        <div class="container my-auto text-center">
            <template v-if="props.content.__component === 'block.hero-primary'">
                <p data-aos="fade-down" data-aos-duration="1000" class="mb-3">{{ props.content.subtitle }}</p>
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                    class="leading-tight md:leading-normal">{{ props.content.title }}</h1>
                <!-- <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" class="my-6 border-gray-500"> -->
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" class="md:w-96 mx-auto">{{
                    props.content.description }}</p>
            </template>
            <template v-else>
                <h1 data-aos="fade-down" data-aos-duration="1000" class="leading-tight md:leading-normal">{{
                    props.content.title
                }}
                </h1>
                <!-- <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" class="my-10 border-gray-500"> -->
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"
                    class="flex justify-center gap-x-4 md:gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
                    <template v-for="(anchor, index) in anchors">
                        <a class="cursor-none" :href="`#${anchor.label}`">{{ anchor.label }}</a>
                        <span v-if="index !== (anchors.length - 1)">•</span>
                    </template>
                </div>
            </template>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '#components'
import { useSettings } from '@/stores/Settings'

const config = useRuntimeConfig()
const props = defineProps(['content', 'chevronLink'])
const anchors = props.content.anchor

const settings = useSettings()
const colorMode = ref(null)

onMounted(async () => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})
</script>
