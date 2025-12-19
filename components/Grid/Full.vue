<template>
    <section class="border-b-2 border-[#3a3a3a]">
        <div class="container py-12 md:py-28 text-center" :class="props.wide ? 'mx-0 px-0 max-w-full' : ''">
            <slot />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    wide: {
        type: Boolean,
        default: false,
    }
})
</script>