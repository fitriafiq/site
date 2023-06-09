<template>
    <section class="relative flex h-screen bg-[url('@/assets/images/hero-light.png')] dark:bg-[url('@/assets/images/hero-dark.png')] bg-cover bg-no-repeat transition-all duration-200">
        <div class="container my-auto text-center">
            <slot />
            <a :href="props.chevronLink">
                <Icon class="absolute bottom-2 inset-x-1/2 -translate-x-2/4 -translate-y-2/4;" name="mdi:chevron-down" size="40" />
            </a>
        </div>
    </section>
</template>

<script setup>
import { Icon } from '#components';

const props = defineProps({
    chevronLink: String
})
</script>
