<template>
    <Hero chevronLink="#overview">
        <h1 data-aos="fade-down" data-aos-duration="1000">{{ project.data[0].attributes.name }}
            <a :href="project.data[0].attributes.url" target="_blank" class="cursor-none">
                <Icon name="akar-icons:link-out" size="15" class="absolute top-0 ml-2" />
            </a>
        </h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" class="my-10 border-gray-500">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"
            class="flex flex-wrap md:flex-nowrap justify-center gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
            <a class="basis-2/4 md:basis-0 cursor-none" href="#overview">OVERVIEW</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0 cursor-none" href="#showcase">SHOWCASE</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0 cursor-none" href="#tech">TECH</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0 cursor-none" href="#others">OTHERS</a>
        </div>
    </Hero>

    <GridThreeQuarters id="overview">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            Overview</h6>
        <div class="col-span-3">
            <div data-aos="fade-left" data-aos-duration="1000">
                {{ project.data[0].attributes.excerpt }}
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull id="showcase" :wide="true">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em] mb-16">
            /
            SHOWCASE</h6>
        <Slider :gallery="project.data[0].attributes.gallery.data" />
    </GridFull>

    <GridThreeQuarters id="tech">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            Tech</h6>
        <div class="col-span-3">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-10">
                <template v-for="tech in project.data[0].attributes.toolboxes.data">
                    <div class="flex flex-col text-center w-24 mx-auto items-center">
                        <div class="w-full h-full"
                            v-html="colorMode === 'dark' ? tech.attributes.logo_dark : tech.attributes.logo_light">
                        </div>
                        <h6 class="mt-3">{{ tech.attributes.name }}</h6>
                    </div>
                </template>
            </div>
        </div>
    </GridThreeQuarters>
    <!-- {{ project.data[0].attributes.toolboxes.data }} -->

    <GridFull id="others">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em] mb-16">
            /
            OTHERS</h6>
        <Portfolio layout="one-third" :slug="slug" />
    </GridFull>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

definePageMeta({ name: 'Portfolio' })

const emit = defineEmits(['scrollToSection'])

const settings = useSettings()
const colorMode = ref(null)

onMounted(() => {
    colorMode.value = settings.colorMode
})

const { slug } = useRoute().params
const config = useRuntimeConfig()
const { data: project } = await useFetch(`${config.public.BASE_URL}/api/portfolios?filters[slug][$eq]=${slug}&populate[toolboxes]=*&populate[gallery][fields]=url`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})
// const { data: project } = await useFetch(`${config.public.BASE_URL}/api/portfolios?filters[slug][$eq]=${slug}&fields=*&populate=toolboxes`)
// &filters[slug][$eq]=${slug}&populate[hero][fields]=url&populate=toolboxes&populate[gallery][fields]=url

useHead({ title: project.value.data[0].attributes.name + ' - Fitri Afiq' })

watch(() => settings.colorMode, () => {
    console.log(colorMode.value)
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
    console.log(colorMode.value)
})
</script>