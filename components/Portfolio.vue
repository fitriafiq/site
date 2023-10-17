<template>
    <transition-group name="project-populate" tag="div" class="grid"
        :class="[props.layout === 'full' ? 'gap-16' : '', props.layout === 'half' ? 'md:grid-cols-2 gap-10' : '', props.layout === 'one-third' ? 'md:grid-cols-3 gap-8' : '']">
        <div v-for="(project, index) in (props.layout !== 'one-third' ? projectList : otherProjects)" :key="project.id"
            data-aos="fade-up" data-aos-duration="1000" class="border border-[#3a3a3a] relative"
            :class="props.layout === 'full' ? 'md:grid grid-cols-5' : ''">
            <div class="relative" :class="[props.layout === 'full' ? 'col-span-3' : '', index % 2 !== 0 ? 'order-2' : '']">
                <img :src="config.public.BASE_URL + project.attributes.hero.data.attributes.url">
                <div class="flex flex-row gap-3 py-1 pe-2 bg-[#fdfdfd]/25 dark:bg-[#191C22]/25 absolute bottom-0 right-0 w-full"
                    :class="[props.layout === 'full' && index % 2 !== 0 ? 'justify-end pe-2' : (props.layout === 'full' && index % 2 === 0 ? 'justify-end md:justify-start ps-2' : 'justify-end pe-2')]">
                    <template v-for="tech in project.attributes.toolboxes.data">
                        <div class="w-7 basis-auto" v-html="colorMode === 'dark' ? tech.attributes.logo_dark : tech.attributes.logo_light"></div>
                    </template>
                </div>
            </div>
            <div class="flex flex-col justify-between p-7 text-start" :class="props.layout === 'full' ? 'col-span-2' : ''">
                <div class="mb-20">
                    <h3 class="mb-2">{{ project.attributes.name }}</h3>
                    <p class="text-sm">{{ project.attributes.excerpt }}</p>
                </div>
                <NuxtLink @click="settings.navigateMenu('/work/' + project.attributes.slug)" class="btn w-fit"
                    :class="props.layout === 'half' ? 'absolute bottom-7 left-0 ms-7' : ''">
                    MORE DETAILS
                </NuxtLink>
            </div>
        </div>
    </transition-group>
    <div class="flex justify-center mt-14" v-if="showMoreButtonVisible && props.populate">
        <button @click="showMoreProjects">SHOW MORE</button>
    </div>
    <div class="flex justify-center mt-14" v-if="!props.populate && props.layout === 'full'">
        <NuxtLink @click="settings.navigateMenu('/work')" class="btn">SHOW MORE</NuxtLink>
    </div>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const config = useRuntimeConfig()
const settings = useSettings()
const colorMode = ref(null)

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    console.log(colorMode.value)
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
    console.log(colorMode.value)
})

const props = defineProps({
    populate: {
        type: Boolean,
        default: false,
    },
    layout: {
        type: String,
        default: 'half',
    },
    slug: {
        type: String,
        default: '',
    },
})

const { data: portfolio } = await useFetch(`${config.public.BASE_URL}/api/portfolios?fields=*&populate[hero][fields]=url&populate=toolboxes&populate[gallery][fields]=url`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

portfolio.value.data.sort((a, b) => a.id < b.id ? 1 : -1)

const projectsPerPage = 4
const projectListCount = ref(projectsPerPage)

const projectList = computed(() => portfolio.value.data.sort((a, b) => a.id < b.id ? 1 : -1).slice(0, projectListCount.value))
const otherProjects = computed(() => portfolio.value.data.filter((project) => project.attributes.slug !== props.slug))
const showMoreButtonVisible = computed(() => projectListCount.value < portfolio.value.data.length)

const showMoreProjects = () => projectListCount.value += projectsPerPage
</script>

<style scoped>
.project-populate-enter-active,
.project-populate-leave-active {
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.project-populate-enter-from,
.project-populate-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.project-populate-enter-to,
.project-populate-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>