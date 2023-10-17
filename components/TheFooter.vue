<template>
    <footer class="w-full border-t-2 border-[#3a3a3a]">
        <div class="container text-center py-6">
            <h6>{{ props.footer }}</h6>
        </div>
    </footer>
</template>

<script setup>
const props = defineProps(['footer'])
</script>