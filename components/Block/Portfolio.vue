<template>
    <GridThreeQuarters v-if="props.content.style !== 'Tertiary'" :id="props.content.intro.label" class="portfolio">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.intro.label }}
        </h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000"
                class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">{{ props.content.intro.title }}</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"
                class="mb-10 text-gray-900 dark:text-gray-400">
                {{ props.content.description }}
            </p>
            <TransitionGroup enter-active-class="ease-in-out duration-700 transition"
                enter-from-class="opacity-0 transform translate-y-1/4" enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="ease-in-out duration-700 transition"
                leave-from-class="opacity-100 transform translate-y-0" leave-to-class="opacity-0 transform translate-y-1/4"
                tag="div" class="grid"
                :class="[props.content.style === 'Primary' ? 'gap-16' : '', props.content.style === 'Secondary' ? 'md:grid-cols-2 gap-10' : '']">
                <div v-for="(project, index) in projectList" :key="project.id" data-aos="fade-up" data-aos-duration="1000"
                    class="border border-[#3a3a3a] relative"
                    :class="props.content.style === 'Primary' ? 'md:grid grid-cols-5' : ''">
                    <div class="relative"
                        :class="[props.content.style === 'Primary' ? 'col-span-3' : '', index % 2 !== 0 ? 'order-2' : '']">
                        <div class="relative">
                            <img loading="lazy" :src="config.public.API_URL + project.attributes.thumbnail.data.attributes.url"
                                :alt="project.attributes.thumbnail.data.attributes.alternativeText">
                            <div class="h-full w-full absolute top-0 left-0 overlay"></div>
                        </div>
                        <div class="flex flex-row gap-3 p-2 bg-[#fdfdfd]/25 dark:bg-[#191C22]/25 absolute bottom-0 right-0 w-full"
                            :class="[props.content.style === 'Primary' && index % 2 !== 0 ? 'justify-end' : (props.content.style === 'Primary' && index % 2 === 0 ? 'justify-end md:justify-start' : 'justify-end')]">
                            <template
                                v-for="tech in project.attributes.block.find((block) => block.__component === 'block.technology').skill.data">
                                <div class="w-7 basis-auto" v-html="tech.attributes.logo.logo_dark">
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between p-7 text-start"
                        :class="props.content.style === 'Primary' ? (index % 2 !== 0 ? 'col-span-2 border-r border-r-[#3a3a3a]' : 'col-span-2 border-l border-l-[#3a3a3a]') : 'border-t border-t-[#3a3a3a]'">
                        <div class="mb-20">
                            <h3 class="mb-2">{{ project.attributes.title }}</h3>
                            <p class="text-sm">{{ project.attributes.hero.description }}</p>
                        </div>
                        <NuxtLink @click="settings.navigateMenu('/work/' + project.attributes.slug)" class="btn w-fit"
                            :class="props.content.style === 'Secondary' ? 'absolute bottom-7 left-0 ms-7' : ''">
                            MORE DETAILS
                        </NuxtLink>
                    </div>
                </div>
            </TransitionGroup>
            <div class="flex justify-center mt-14" v-if="showMoreButtonVisible">
                <button @click="showMoreProjects">SHOW MORE</button>
            </div>
            <div class="flex justify-center mt-14" v-if="props.content.style === 'Primary'">
                <NuxtLink @click="settings.navigateMenu('/work')" class="btn">SHOW MORE</NuxtLink>
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull v-else :id="props.content.intro.label" class="portfolio">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em] mb-8">
            /
            {{ props.content.intro.label }}</h6>
        <div class="col-span-3">
            <TransitionGroup enter-active-class="ease-in-out duration-700 transition"
                enter-from-class="opacity-0 transform translate-y-1/4" enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="ease-in-out duration-700 transition"
                leave-from-class="opacity-100 transform translate-y-0" leave-to-class="opacity-0 transform translate-y-1/4"
                tag="div" class="grid md:grid-cols-3 gap-8">
                <div v-for="project in otherProjects" :key="project.id" data-aos="fade-up" data-aos-duration="1000"
                    class="border border-[#3a3a3a] relative">
                    <div class="relative">
                        <div class="relative">
                            <img loading="lazy" :src="config.public.API_URL + project.attributes.thumbnail.data.attributes.url"
                                :alt="project.attributes.thumbnail.data.attributes.alternativeText">
                            <div class="h-full w-full absolute top-0 left-0 overlay"></div>
                        </div>
                        <div
                            class="flex flex-row gap-3 p-2 bg-[#fdfdfd]/25 dark:bg-[#191C22]/25 absolute bottom-0 right-0 w-full justify-end">
                            <template
                                v-for="tech in project.attributes.block.find((block) => block.__component === 'block.technology').skill.data">
                                <div class="w-7 basis-auto" v-html="tech.attributes.logo.logo_dark">
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between p-7 text-start border-t border-t-[#3a3a3a]">
                        <div class="mb-20">
                            <h3 class="mb-2">{{ project.attributes.title }}</h3>
                            <p class="text-sm">{{ project.attributes.hero.description }}</p>
                        </div>
                        <NuxtLink @click="settings.navigateMenu('/work/' + project.attributes.slug)" class="btn w-fit"
                            :class="props.content.style === 'Secondary' ? 'absolute bottom-7 left-0 ms-7' : ''">
                            MORE DETAILS
                        </NuxtLink>
                    </div>
                </div>
            </TransitionGroup>
            <div class="flex justify-center mt-14" v-if="showMoreButtonVisible">
                <button @click="showMoreProjects">SHOW MORE</button>
            </div>
        </div>
    </GridFull>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['content', 'slug'])
const config = useRuntimeConfig()
const settings = useSettings()
const colorMode = ref(null)

const { data: portfolio } = await useFetch(`${config.public.API_URL}/api/portfolios?
&populate[thumbnail]=*
&populate[hero][populate][background][populate]=*
&populate[block][populate]=social,gallery,skill.logo,intro
`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

portfolio.value.data.sort((a, b) => a.id < b.id ? 1 : -1)

const projectsPerPage = 4
const projectListCount = ref(projectsPerPage)

const projectList = computed(() => portfolio.value.data.sort((a, b) => a.id < b.id ? 1 : -1).slice(0, projectListCount.value))
const otherProjects = computed(() => portfolio.value.data.filter((project) => project.attributes.slug !== props.slug).slice(0, 3))
const showMoreButtonVisible = computed(() => projectListCount.value < portfolio.value.data.length)

const showMoreProjects = () => projectListCount.value += projectsPerPage

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})
</script>

<style>
.overlay {
    background: radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
}
</style>