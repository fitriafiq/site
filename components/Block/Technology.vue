<template>
    <GridThreeQuarters :id="props.content.label" class="bg-[#f0f0f0] dark:bg-[#12151A]">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.label }}</h6>
        <div class="col-span-3">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
                <template v-for="tech in props.content.skill.data">
                    <div class="flex flex-col text-center w-24 mx-auto items-center">
                        <div class="w-full h-full"
                            v-html="colorMode === 'dark' ? tech.attributes.logo.logo_dark : tech.attributes.logo.logo_light">
                        </div>
                        <h6 class="mt-3">{{ tech.attributes.name }}</h6>
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