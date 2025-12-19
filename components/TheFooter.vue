<template>
    <footer class="w-full">
        <div class="container text-center py-6">
            <h6>{{ props.footer }}</h6>
        </div>
    </footer>
</template>

<script setup>
const props = defineProps(['footer'])
</script>