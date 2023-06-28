<template>
    <Hero chevronLink="#overview">
        <h1 data-aos="fade-down" data-aos-duration="1000">{{ project.data[0].attributes.name }}
            <a :href="project.data[0].attributes.url" target="_blank">
                <Icon name="akar-icons:link-out" size="15" class="absolute top-0 ml-2" />
            </a>
        </h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" class="my-10 border-gray-500">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"
            class="flex flex-wrap md:flex-nowrap justify-center gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
            <a class="basis-2/4 md:basis-0" href="#overview">OVERVIEW</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#showcase">SHOWCASE</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#tech">TECH</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#others">OTHERS</a>
        </div>
    </Hero>

    <GridThreeQuarters id="overview">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            Overview</h6>
        <div class="col-span-3">
            <div data-aos="fade-left" data-aos-duration="1000">
                {{ project.data[0].attributes.excerpt }}
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull id="showcase" :wide="true">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em] mb-16">
            /
            SHOWCASE</h6>
        <div v-for="(image, index) in project.data[0].attributes.gallery.data">
            <img :src="config.public.BASE_URL + image.attributes.url" :class="index != 0 ? 'hidden' : ''"
                class="w-screen h-80 md:h-[700px] object-cover">
        </div>
        <div
            class="container p-0 flex justify-end mt-8 relative w-full after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#3a3a3a] after:right-0 after:top-1/2">
            <button @click="goToPreviousPage" ref="prevButton" :disabled="currentPage === 1"
                class="p-2 me-3 bg-[#191C22] z-10 disabled:pointer-events-none">
                <Icon name="mdi:chevron-left" size="30" :class="{ 'opacity-10': currentPage === 1 }" />
            </button>
            <button @click="goToNextPage" ref="nextButton" :disabled="currentPage === totalPages"
                class="p-2 z-10 bg-[#191C22] disabled:pointer-events-none">
                <Icon name="mdi:chevron-right" size="30" :class="{ 'opacity-10': currentPage === totalPages }" />
            </button>
        </div>
    </GridFull>

    <GridThreeQuarters id="tech">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            Tech</h6>
        <div class="col-span-3">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-10">
                <template v-for="tech in project.data[0].attributes.toolboxes.data">
                    <div class="flex flex-col text-center w-24 mx-auto items-center">
                        <div class="w-full h-full"
                            v-html="colorMode == 'dark' ? tech.attributes.logo_dark : tech.attributes.logo_light">
                        </div>
                        <h6 class="mt-3">{{ tech.attributes.name }}</h6>
                    </div>
                </template>
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull id="others">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em] mb-16">
            /
            OTHERS</h6>
        <Portfolio layout="one-third" :slug="slug" />
    </GridFull>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

definePageMeta({ name: 'Portfolio' })

const emit = defineEmits([
    'scrollToSection'
])

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
</script>