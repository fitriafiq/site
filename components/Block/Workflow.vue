<template>
    <GridThreeQuarters :id="props.content.intro.label">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.intro.label }}</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000"
                class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">{{ props.content.intro.title }}</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"
                class="mb-10 text-gray-900 dark:text-gray-400">{{ props.content.description }}</p>
            <div class="grid md:grid-cols-2 gap-10">
                <template v-for="(card, index) in props.content.card">
                    <div data-aos="fade-left" data-aos-duration="1000" :data-aos-delay="index % 2 === 0 ? '400' : '800'"
                        class="workflow">
                        <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                            data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                            <div
                                class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                                {{ index + 1 < 10 ? `0${index + 1}` : index + 1 }} </div>
                            </div>
                            <h4 class="mb-3 px-16">{{ card.title }}</h4>
                            <p class="font-light px-16">{{ card.description }}</p>
                        </div>
                </template>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['content'])
const settings = useSettings()
const colorMode = ref(null)

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})
</script>