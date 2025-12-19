<template>
    <GridFull :id="props.content.intro.label" class="bg-[#f0f0f0] dark:bg-[#12151A]">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.intro.label }}</h6>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
            class="mt-10 md:mt-16 leading-10 md:leading-normal mx-auto md:px-48 2xl:px-60">{{ props.content.intro.title }}</h2>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
            class="italic text-[12px] mt-3 text-gray-600 dark:text-gray-400">{{ props.content.subtitle }}</p>
    </GridFull>
</template>

<script setup>
const props = defineProps(['content'])
</script>