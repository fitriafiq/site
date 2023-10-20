<template>
    <GridFull :id="props.content.label" :wide="true">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em] mb-16">
            /
            {{ props.content.label }}</h6>
        <Slider :gallery="props.content.gallery.data" />
    </GridFull>
</template>

<script setup>
const props = defineProps(['content'])
</script>