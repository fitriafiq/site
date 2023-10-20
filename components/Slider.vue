<template>
    <Swiper v-bind="swiper">
        <SwiperSlide v-for="slide in props.gallery">
            <img :src="config.public.API_URL + slide.attributes.url" class="w-screen h-80 md:h-[700px] object-cover">
        </SwiperSlide>
    </Swiper>
    <div
        class="container px-4 md:p-0 flex justify-end mt-8 relative w-full after:z-[-1] after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#3a3a3a] after:right-0 after:top-1/2">
        <button class="prevButton p-2 me-3 bg-[#fdfdfd] dark:bg-[#191C22]">
            <Icon name="mdi:chevron-left" size="30" />
        </button>
        <button class="nextButton p-2 bg-[#fdfdfd] dark:bg-[#191C22]">
            <Icon name="mdi:chevron-right" size="30" />
        </button>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const props = defineProps({
    gallery: Object
})

const swiper = {
    modules: [SwiperNavigation, SwiperAutoplay, SwiperEffectCreative],
    slidesPerView: 1,
    loop: true,
    effect: 'creative',
    navigation: {
        nextEl: '.nextButton',
        prevEl: '.prevButton'
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },
    creativeEffect: {
        prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    }
} 
</script>
