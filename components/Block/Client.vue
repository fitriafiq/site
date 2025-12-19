<template>
    <GridThreeQuarters :id="props.content.label">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.label }}</h6>
        <div class="col-span-3">
            <div class="mt-8 md:mt-0" data-aos="fade-left" data-aos-duration="1000" v-html="props.content.description"></div>
            <div class="flex items-center gap-3 mt-10">
                <NuxtLink :to="props.url" target="_blank" data-aos="fade-left" data-aos-duration="1000"
                    class="social icon transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <Icon name="ph:globe-simple-light" size="100%" class="p-2" />
                </NuxtLink>
                <NuxtLink v-for="social in props.content.social" :to="social.url" target="_blank" data-aos="fade-left" data-aos-duration="1000" :data-aos-delay="increaseDelay()"
                    class="social icon transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <template v-for="icon in icons">
                        <Icon v-if="icon.label === social.social_network" :name="icon.name" size="100%" class="p-2.5" />
                    </template>
                </NuxtLink>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
const props = defineProps(['content' ,'url'])
const icons = ref([
    {
        id: 1,
        label: 'Facebook',
        name: 'ri:facebook-fill'
    },
    {
        id: 2,
        label: 'Instagram',
        name: 'ri:instagram-line'
    },
    {
        id: 3,
        label: 'X',
        name: 'ri:twitter-x-line'
    },
])

let delay = 0

const increaseDelay = () => delay = delay + 200
</script>