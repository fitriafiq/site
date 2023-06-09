<template>
    <div ref="firstLayer"
        class="transition-layer bg-[#12151a44] dark:bg-[#3b3b3b6c] z-[10000] fixed w-full h-screen transition-all duration-[0.9s] ease-[cubic-bezier(0.645,0.045,0.355,1)] left-full right-auto top-0 bottom-auto">
    </div>
    <div ref="secondLayer"
        class="transition-layer bg-[#12151a44] dark:bg-[#3b3b3b6c] delay-300 z-[10000] fixed w-full h-screen transition-all duration-[0.9s] ease-[cubic-bezier(0.645,0.045,0.355,1)] left-full right-auto top-0 bottom-auto">
    </div>
    <div ref="thirdLayer"
        class="transition-layer bg-[#f0f0f0b4] dark:bg-[#12151ab4] delay-200 z-[10000] fixed w-full h-screen transition-all duration-[0.9s] ease-[cubic-bezier(0.645,0.045,0.355,1)] left-full right-auto top-0 bottom-auto">
    </div>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const firstLayer = ref(null)
const secondLayer = ref(null)
const thirdLayer = ref(null)

const settings = useSettings()

watch(() => settings.reveal, () => {
    window.scrollTo(0, 0);
    firstLayer.value.classList.toggle('active')
    secondLayer.value.classList.toggle('active')
    thirdLayer.value.classList.toggle('active')
})
</script>