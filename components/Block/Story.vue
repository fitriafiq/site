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
                {{ props.content.subtitle }}</p>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" v-html="props.content.description"></div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
const props = defineProps(['content'])
</script>