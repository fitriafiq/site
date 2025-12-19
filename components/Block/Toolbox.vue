<template>
    <GridThreeQuarters :id="props.content.intro.label">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.intro.label }}</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000"
                class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">{{ props.content.intro.title }}</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"
                class="mb-10 text-gray-600 dark:text-gray-400">
                {{ props.content.description }}</p>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div class="border border-[#3a3a3a] p-7 overflow-hidden transition-all duration-700 ease"
                    :class="showToolbox ? 'max-h-[1100px] md:max-h-[540px]' : 'max-h-[670px] md:max-h-[380px]'">
                    <div class="flex gap-5 mb-12">
                        <h6 class="tracking-[.4em]">SKILLS</h6>
                        <input @click="toggleToolbox"
                            class="my-auto h-4 w-11 cursor-none appearance-none bg-gray-300 dark:bg-gray-600 rounded-[0.5rem] after:absolute after:z-[2] after:-mt-[0.2rem] after:h-6 after:w-6 after:rounded-full after:border-none after:bg-black dark:after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:after:absolute checked:after:z-[3] checked:after:-mt-[0.2rem] checked:after:ml-[1.25rem] checked:after:h-6 checked:after:w-6 checked:after:rounded-full checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']"
                            type="checkbox" role="switch" />
                        <h6
                            class="tracking-[.4em] relative after:content[''] after:w-screen after:h-[1px] after:bg-[#3a3a3a] after:absolute after:inset-y-1/2 after:ms-6">
                            TOOLS</h6>
                    </div>

                    <div class="grid">
                        <Transition enter-active-class="ease duration-700 transition delay-300"
                            enter-from-class="translate-x-[-100%] opacity-0" enter-to-class="translate-x-0 opacity-100"
                            leave-active-class="transition ease duration-700" leave-from-class="translate-x-0 opacity-100"
                            leave-to-class="translate-x-[-100%] opacity-0">
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 relative col-start-1 row-start-1 h-max"
                                v-if="showToolbox">
                                <template v-for="tool in getSkills">
                                    <div class="flex flex-col text-center w-20 mx-auto items-center">
                                        <div class="w-full h-full"
                                            v-html="colorMode === 'dark' ? tool.attributes.logo.logo_dark : tool.attributes.logo.logo_light">
                                        </div>
                                        <h6 class="mt-3">{{ tool.attributes.name }}</h6>
                                    </div>
                                </template>
                            </div>
                        </Transition>
                        <Transition enter-active-class="ease duration-700 transition delay-300"
                            enter-from-class="translate-x-[100%] opacity-0" enter-to-class="translate-x-0 opacity-100"
                            leave-active-class="transition ease duration-700" leave-from-class="translate-x-0 opacity-100"
                            leave-to-class="translate-x-[100%] opacity-0">
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 relative col-start-1 row-start-1 h-max"
                                v-if="!showToolbox">
                                <template v-for="tool in getTools">
                                    <div class="flex flex-col text-center w-20 mx-auto items-center">
                                        <div class="w-full h-full"
                                            v-html="colorMode === 'dark' ? tool.attributes.logo.logo_dark : tool.attributes.logo.logo_light">
                                        </div>
                                        <h6 class="mt-3">{{ tool.attributes.name }}</h6>
                                    </div>
                                </template>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['content'])
const config = useRuntimeConfig()
const settings = useSettings()
const colorMode = ref(null)

const { data: toolbox } = await useFetch(`${config.public.API_URL}/api/toolboxes?populate[0]=logo`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

toolbox.value.data.sort((a, b) => a.id > b.id ? 1 : -1)

const getSkills = computed(() => toolbox.value.data.filter(tool => tool.attributes.type === 'Skills'))
const getTools = computed(() => toolbox.value.data.filter(tool => tool.attributes.type === 'Tools'))

const showToolbox = ref(true)
const toggleToolbox = () => showToolbox.value = !showToolbox.value

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})
</script>
