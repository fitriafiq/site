<template>
    <!-- <Hero chevronLink="#about">
        <p data-aos="fade-down" data-aos-duration="1000" class="mb-3">Hi, I'm Fitri</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="leading-tight md:leading-normal">Web
            Developer</h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400" class="my-6 border-gray-500">
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" class="md:w-96 mx-auto">Specializing in clean
            and modern content for
            the world-wide web.</p>
    </Hero>

    <GridHalf id="about">
        <div class="md:pe-16 my-auto">
            <h6 data-aos="fade-right" data-aos-duration="1000"
                class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
                ABOUT ME</h6>
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="block md:hidden my-8" autoplay
                loop playsinline muted :src="colorMode === 'dark' ? greetingDarkPath : greetingLightPath"></video>
            <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"
                class="md:mt-16 leading-10 md:leading-normal">Programming geek based in
                Malaysia.</h2>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="mt-5 mb-8 md:mb-16 leading-7">Hey
                there!
                I'm a web enthusiast who's passionate about all things web design
                and development.
                With a keen eye for aesthetics and a knack for creating visually appealing websites, I love bringing
                creative ideas to life through innovative web solutions.</p>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                <button @click="settings.navigateMenu('/about')">EXPLORE</button>
            </div>
        </div>
        <div class="justify-end ps-16 hidden md:flex">
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" autoplay loop playsinline muted
                :src="colorMode === 'dark' ? greetingDarkPath : greetingLightPath"></video>
        </div>
    </GridHalf>

    <GridThreeQuarters>
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            SERVICES</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000"
                class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">Embark on a bespoke adventure!</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"
                class="mb-10 text-gray-600 dark:text-gray-400">
                Crafting dynamic and responsive websites for digital growth.
            </p>
            <div class="grid md:grid-cols-3 gap-5">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400"
                    class="service border border-[#3a3a3a] p-7 overflow-hidden">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                        <div
                            class="icon transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center mb-20">
                            <Icon name="cil:code" size="100%" class="p-2.5" />
                        </div>
                    </div>
                    <h4 class="mb-3">Full-stack<br>Development</h4>
                    <p class="font-light">Designing and building custom web applications from front-end to
                        back-end.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800"
                    class="service border border-[#3a3a3a] p-7 overflow-hidden">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1000">
                        <div
                            class="icon transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center mb-20">
                            <Icon name="arcticons:wordpress" size="100%" class="p-2.5" />
                        </div>
                    </div>
                    <h4 class="mb-3">WordPress<br>Development</h4>
                    <p class="font-light">Crafting custom content management system solutions powered by
                        WordPress.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1200"
                    class="service border border-[#3a3a3a] p-7 overflow-hidden">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1400">
                        <div
                            class="icon transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center mb-20">
                            <Icon name="ph:shopping-cart-light" size="100%" class="p-2.5" />
                        </div>
                    </div>
                    <h4 class="mb-3">eCommerce<br>Development</h4>
                    <p class="font-light">Creating captivating online stores that drive sales and customer
                        satisfaction.</p>
                </div>
            </div>
        </div>
    </GridThreeQuarters>

    <GridThreeQuarters id="portfolio">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            PORTFOLIO
        </h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000"
                class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">Transform concepts into creations.</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"
                class="mb-10 text-gray-600 dark:text-gray-400">
                Explore a captivating collection of innovative wonders.
            </p>
            <Portfolio layout="full" />
        </div>
    </GridThreeQuarters> -->

    <BlockManager :content="content" :global="global" />

</template>

<script setup>
const config = useRuntimeConfig()

const { data: content } = await useFetch(`${config.public.BASE_URL}/api/pages?filters[slug][$eq]=/
&populate[block][populate]=anchor,background,intro,button,visual.visual_light,visual.visual_dark
&populate[hero][populate][anchor][populate]=*&populate[hero][populate][background][populate]=*`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

const { data: global } = await useFetch(`${config.public.BASE_URL}/api/global?populate=logo.logo_light,logo.logo_dark,contact_cta.intro,contact_cta.button,footer,menu`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})
</script>
