<template>
    <Hero chevronLink="#portfolio">
        <h1 data-aos="fade-down" data-aos-duration="1000" class="leading-tight md:leading-normal">Designing Digital Delights</h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" class="my-10 border-gray-500">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"
            class="flex flex-wrap md:flex-nowrap justify-center gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
            <a class="basis-2/4 md:basis-0" href="#portfolio">PORTFOLIO</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#workflow">WORKFLOW</a>
        </div>
    </Hero>

    <GridThreeQuarters id="portfolio">
        <h6 data-aos="fade-right" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            PORTFOLIO
        </h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000" class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">A glimpse into my digital realm.</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" class="mb-10 text-gray-900 dark:text-gray-400">
                Journey through the vibrant gallery of dynamic creations.
            </p>
            <Portfolio :populate="true" />
        </div>
    </GridThreeQuarters>

    <GridThreeQuarters id="workflow">
        <h6 data-aos="fade-right" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            WORKFLOW</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000" class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">Navigating from idea to reality.</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" class="mb-10 text-gray-900 dark:text-gray-400">Gain insights of the development stages and steps.</p>
            <div class="grid md:grid-cols-2 gap-10">
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" class="workflow">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                        <div
                            class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                            01
                        </div>
                    </div>
                    <h4 class="mb-3 px-16">Planning</h4>
                    <p class="font-light px-16">Strategically outline project goals, target audience, and content structure.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800" class="workflow">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1000">
                        <div
                            class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                            02
                        </div>
                    </div>
                    <h4 class="mb-3 px-16">Design</h4>
                    <p class="font-light px-16">Craft visually appealing and intuitive interfaces that enhance user experience.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" class="workflow">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                        <div
                            class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                            03
                        </div>
                    </div>
                    <h4 class="mb-3 px-16">Development</h4>
                    <p class="font-light px-16">Translate designs into functional websites using robust coding techniques.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800" class="workflow">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1000">
                        <div
                            class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                            04
                        </div>
                    </div>
                    <h4 class="mb-3 px-16">Testing</h4>
                    <p class="font-light px-16">Conduct thorough quality assurance to identify and resolve any issues or bugs.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" class="workflow">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                        <div
                            class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                            05
                        </div>
                    </div>
                    <h4 class="mb-3 px-16">Launch</h4>
                    <p class="font-light px-16">Deploy the finalized website, ensuring smooth integration and optimal performance.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800" class="workflow">
                    <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                        data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1000">
                        <div
                            class="icon transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                            06
                        </div>
                    </div>
                    <h4 class="mb-3 px-16">Maintenance</h4>
                    <p class="font-light px-16">Provide ongoing support and updates to keep the website secure and up-to-date.</p>
                </div>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
useHead({
    title: 'Fitri Afiq | My Work',
})

const emit = defineEmits([
    'scrollToSection'
])
</script>

