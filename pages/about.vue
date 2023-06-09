<template>
    <Hero chevronLink="#story">
        <h1 data-aos="fade-down" data-aos-duration="1000" class="leading-tight md:leading-normal">Exploring My Universe</h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" class="my-10 border-gray-500">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400"
            class="flex flex-wrap md:flex-nowrap justify-center gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
            <a class="basis-2/4 md:basis-0" href="#story">STORY</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#motto">MOTTO</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0" href="#toolbox">TOOLBOX</a>
        </div>
    </Hero>

    <GridThreeQuarters id="story">
        <h6 data-aos="fade-right" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            STORY</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000" class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">Meet the coding geek.</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" class="mb-10 text-gray-600 dark:text-gray-400">
                Pronunciation: FIT-ree AH-feek</p>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <p class="mb-6">Heyya! I'm Fitri, a full-stack web developer based in Malaysia.
                    Currently, I'm part of <a class="font-bold italic text-shadow dark:text-shadow-dark" href="https://gravitas.my/" target="_blank">Gravitas
                        Digital</a> as a senior web developer. I've been tinkering with code and
                    building websites for as long as I can remember, and I love using my skills to bring ideas to life and
                    solve
                    real-world problems. I believe in creating websites that are visually appealing, easy to navigate, and
                    optimized for performance.</p>
                <p class="mb-6">My journey in web development started during my university days, where I was introduced to
                    the
                    basics of website development, such as HTML, CSS, and JavaScript. However, my passion for programming
                    led me
                    to continue my learning beyond the classroom. Through countless hours of self-study and online courses,
                    I
                    have honed my
                    skills in various programming languages and web development frameworks. Today, I am equipped with a wide
                    range of skills that allow me to create effective and efficient solutions for various digital problems.
                </p>
                <p class="mb-6">Apart from my full-time job, I also take on freelance web development projects during my
                    free
                    time, after
                    my normal working hours, and during weekends. I am always eager to take on new challenges and expand my
                    skill set, which is why I am open to collaborating on exciting freelance projects.</p>
                <p>If you're looking for a dedicated web developer who can bring your ideas to life, let's connect! You can
                    <NuxtLink @click="settings.toggleReveal('/contact', useRouter())" class="font-bold italic text-shadow dark:text-shadow-dark">reach out to me</NuxtLink>
                    anytime,
                    and I'll be happy to discuss
                    how we can work
                    together to create an exceptional
                    website for you.
                </p>
            </div>
        </div>
    </GridThreeQuarters>

    <GridFull id="motto" class="bg-[#f0f0f0] dark:bg-[#12151A]">
        <h6 data-aos="fade-down" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            MOTTO</h6>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="mt-10 md:mt-16 md:px-64 leading-10 md:leading-normal mx-auto">The only way to do great
            work is to love what you do.</h2>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" class="italic text-[12px] mt-3 text-gray-600 dark:text-gray-400">-
            Steve Jobs -</p>
    </GridFull>

    <GridThreeQuarters id="toolbox">
        <h6 data-aos="fade-right" data-aos-duration="1000" class="text-gray-900 dark:text-gray-400 text-[11px] font-thin tracking-[.4em]">/
            TOOLBOX</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000" class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">Take a peek at my superpowers!</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" class="mb-10 text-gray-600 dark:text-gray-400">
                Unleashing programming expertise to bring ideas to life.</p>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div class="border border-[#3a3a3a] p-7 overflow-hidden transition-all duration-700 ease"
                    :class="showToolbox ? 'max-h-[1100px] md:max-h-[540px]' : 'max-h-[420px] md:max-h-[235px]'">
                    <div class="flex gap-5 mb-12">
                        <h6 class="tracking-[.4em]">SKILLS</h6>
                        <input @click="toggleToolbox"
                            class="my-auto h-4 w-11 cursor-none appearance-none bg-gray-300 dark:bg-gray-600 rounded-[0.5rem] after:absolute after:z-[2] after:-mt-[0.2rem] after:h-6 after:w-6 after:rounded-full after:border-none after:bg-black dark:after:bg-white after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:after:absolute checked:after:z-[3] checked:after:-mt-[0.2rem] checked:after:ml-[1.25rem] checked:after:h-6 checked:after:w-6 checked:after:rounded-full checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']"
                            type="checkbox" role="switch" />
                        <h6
                            class="tracking-[.4em] relative after:content[''] after:w-screen after:h-[1px] after:bg-[#3a3a3a] after:absolute after:inset-y-1/2 after:ms-6">
                            TOOLS</h6>
                    </div>

                    <div class="grid grid-cols-1">
                        <Transition name="toolboxItem">
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 relative col-start-1 row-start-1" v-if="showToolbox">
                                <template v-for="tool in toolbox.getSkills" :key="tool.id">
                                    <div class="flex flex-col text-center w-20 mx-auto items-center">
                                        <div class="w-full h-full" v-html="colorMode == 'dark' ? tool.logo_dark : tool.logo_light"></div>
                                        <h6 class="mt-3">{{ tool.name }}</h6>
                                    </div>
                                </template>
                            </div>
                        </Transition>
                        <Transition name="toolboxItem">
                            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 relative col-start-1 row-start-1" v-if="!showToolbox">
                                <template v-for="tool in toolbox.getTools" :key="tool.id">
                                    <div class="flex flex-col text-center w-20 mx-auto items-center">
                                        <div class="w-full h-full" v-html="colorMode == 'dark' ? tool.logo_dark : tool.logo_light"></div>
                                        <h6 class="mt-3">{{ tool.name }}</h6>
                                    </div>
                                </template>
                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
import { useToolbox } from '@/stores/Toolbox'
import { useSettings } from '@/stores/Settings'

const settings = useSettings()
const colorMode = computed(() => settings.colorMode)

useHead({
    title: 'Fitri Afiq | About Me',
})

const emit = defineEmits([
    'scrollToSection'
])

const toolbox = useToolbox()
const showToolbox = ref(true)

const toggleToolbox = () => {
    showToolbox.value = !showToolbox.value
}
</script>

<style>.toolboxItem-enter-from,
.toolboxItem-leave-to {
    opacity: 0;
    transform: translateY(100%);
}

.toolboxItem-enter-to,
.toolboxItem-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.toolboxItem-enter-active,
.toolboxItem-leave-active {
    transition: all 0.7s ease;
}</style>