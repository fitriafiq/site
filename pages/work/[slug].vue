<template>
    <Hero chevronLink="#overview">
        <h1 data-aos="fade-down" data-aos-duration="1000">{{ project.name }}</h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" class="my-10 border-gray-500">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"
            class="flex flex-wrap md:flex-nowrap justify-center gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
            <a class="basis-2/4 md:basis-0" href="#overview">OVERVIEW</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#showcase">SHOWCASE</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#tech">TECH</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#others">OTHERS</a>
        </div>
    </Hero>

    <GridThreeQuarters id="overview">
        <h6 data-aos="fade-right" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            Overview</h6>
        <div class="col-span-3">
            <div data-aos="fade-left" data-aos-duration="1000">
                <p>Heyya! I'm Fitri, a full-stack web developer based in Malaysia.
                    Currently, I'm part of <a class="font-bold italic text-shadow dark:text-shadow-dark" href="https://gravitas.my/" target="_blank">Gravitas
                        Digital</a> as a senior web developer. I've been tinkering with code and
                    building websites for as long as I can remember, and I love using my skills to bring ideas to life and
                    solve
                    real-world problems. I believe in creating websites that are visually appealing, easy to navigate, and
                    optimized for performance.</p>
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull id="showcase" :wide="true">
        <h6 data-aos="fade-down" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em] mb-16">
            /
            SHOWCASE</h6>
        <img src="@/assets/images/lemons.png" class="w-screen h-80 md:h-[700px] object-cover">
        <!-- <div
            class="container p-0 flex justify-end mt-8 relative w-full after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-[#3a3a3a] after:right-0 after:top-1/2">
            <button @click="goToPreviousPage" ref="prevButton" :disabled="currentPage === 1"
                class="p-2 me-3 bg-[#191C22] z-10 disabled:pointer-events-none">
                <Icon name="mdi:chevron-left" size="30" :class="{ 'opacity-10': currentPage === 1 }" />
            </button>
            <button @click="goToNextPage" ref="nextButton" :disabled="currentPage === totalPages"
                class="p-2 z-10 bg-[#191C22] disabled:pointer-events-none">
                <Icon name="mdi:chevron-right" size="30" :class="{ 'opacity-10': currentPage === totalPages }" />
            </button>
        </div> -->
    </GridFull>

    <GridThreeQuarters id="tech">
        <h6 data-aos="fade-right" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            Tech</h6>
        <div class="col-span-3">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-10">
                <div class="flex flex-col text-center w-24 mx-auto items-center">
                    <div class="border border-[#3a3a3a] rounded-full">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <h6 class="mt-3">Vue</h6>
                </div>
                <div class="flex flex-col text-center w-24 mx-auto items-center">
                    <div class="border border-[#3a3a3a] rounded-full">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <h6 class="mt-3">Vue</h6>
                </div>
                <div class="flex flex-col text-center w-24 mx-auto items-center">
                    <div class="border border-[#3a3a3a] rounded-full">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <h6 class="mt-3">Vue</h6>
                </div>
                <div class="flex flex-col text-center w-24 mx-auto items-center">
                    <div class="border border-[#3a3a3a] rounded-full">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <h6 class="mt-3">Vue</h6>
                </div>
                <div class="flex flex-col text-center w-24 mx-auto items-center">
                    <div class="border border-[#3a3a3a] rounded-full">
                        <img src="@/assets/images/logo.png" alt="">
                    </div>
                    <h6 class="mt-3">Vue</h6>
                </div>
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull id="others">
        <h6 data-aos="fade-down" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em] mb-16">
            /
            OTHERS</h6>
        <Portfolio layout="one-third" :slug="slug" />
    </GridFull>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePortfolio } from '@/stores/Portfolio'

definePageMeta({ 
    name: 'Portfolio' 
})

const emit = defineEmits([
    'scrollToSection'
])

const portfolio = usePortfolio()
const { getProject } = storeToRefs(portfolio)
const { slug } = useRoute().params
const project = ref(getProject.value(slug))

useHead({
    title: 'Fitri Afiq | Portfolio - ' + project.value.name,
})
</script>