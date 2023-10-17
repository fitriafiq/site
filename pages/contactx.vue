<template>
    <Hero chevronLink="#inquiry">
        <h1 data-aos="fade-down" data-aos-duration="1000" class="leading-tight md:leading-normal">Knock, Knock!</h1>
        <hr data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300" class="my-10 border-gray-500">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600"
            class="flex flex-wrap md:flex-nowrap justify-center gap-x-6 gap-y-3 text-gray-900 dark:text-gray-400 text-sm">
            <a class="basis-2/4 md:basis-0 cursor-none" href="#inquiry">INQUIRY</a>
            <span class="hidden md:block">•</span>
            <a class="basis-2/4 md:basis-0 cursor-none" href="#extra">EXTRA</a>
        </div>
    </Hero>

    <GridHalf id="inquiry">
        <div class="my-auto">
            <h6 data-aos="fade-right" data-aos-duration="1000"
                class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
                INQUIRY</h6>
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" class="block md:hidden my-8" autoplay
                loop playsinline muted :src="colorMode === 'dark' ? thinkingDarkPath : thinkingLightPath"></video>
            <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300"
                class="mt-8 md:mt-16 mb-2 md:mb-5 leading-10 md:leading-normal">Ready to Tickle My Inbox?
            </h2>
            <form @submit.prevent="sendEmail" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600"
                class="mt-5 leading-[2.25]">
                <p>Hello, my name is &nbsp;<input
                        class="h-full pb-1 px-1 border-b border-gray-500 bg-transparent text-center focus:outline-none placeholder:tracking-[.4em] placeholder:text-xs"
                        type="text" v-model="sender.name" placeholder="NAME">&nbsp; and I want to
                    discuss a potential
                    project. Reach out to me at &nbsp;<input
                        class="h-full pb-1 px-1 border-b border-gray-500 bg-transparent text-center focus:outline-none placeholder:tracking-[.4em] placeholder:text-xs"
                        type="email" v-model="sender.email" placeholder="EMAIL ADDRESS">&nbsp;.</p>
                <p class="mt-6">Project details or burning questions? Share them here (optional):</p>
                <textarea @input="resizeInput" rows="4"
                    class="w-full leading-normal pb-1 px-1 border-b border-gray-500 bg-transparent focus:outline-none placeholder:tracking-[.4em] placeholder:text-xs placeholder:text-center placeholder:pt-8"
                    v-model="sender.message" placeholder="UNLEASH YOUR THOUGHTS"></textarea>

                <h6 class="text-[11px] my-6">This site is protected by reCAPTCHA and the Google <a
                        class="font-bold italic text-shadow dark:text-shadow-dark cursor-none"
                        href="https://policies.google.com/privacy">Privacy
                        Policy</a> and <a class="font-bold italic text-shadow dark:text-shadow-dark cursor-none"
                        href="https://policies.google.com/terms">Terms of Service</a>
                    apply. </h6>
                <button type="submit" :disabled="disableBtn">{{ submitText }}</button>
            </form>
        </div>
        <div class="justify-end ps-16 hidden md:flex">
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" autoplay loop playsinline muted
                :src="colorMode === 'dark' ? thinkingDarkPath : thinkingLightPath"></video>
        </div>
    </GridHalf>

    <GridFull class="bg-[#f0f0f0] dark:bg-[#12151A]" id="extra">
        <h6 data-aos="fade-down" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            EXTRA</h6>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
            class="my-10 md:my-16 mx-auto leading-10 md:leading-normal">Another way to say hello.</h2>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <a href="mailto:hello@fitriafiq.com" class="btn cursor-none">HELLO@FITRIAFIQ.COM</a>
        </div>
    </GridFull>
</template>

<script setup>
import thinkingDarkPath from '@/assets/videos/thinking-dark.webm'
import thinkingLightPath from '@/assets/videos/thinking-light.webm'
import { useSettings } from '@/stores/Settings'

const settings = useSettings()
const colorMode = computed(() => settings.colorMode)

const sender = ref({
    name: '',
    email: '',
    message: ''
})

const disableBtn = ref(false)
const submitText = ref('SUBMIT')

async function sendEmail() {
    try {
        disableBtn.value = true
        submitText.value = 'SENDING...'
        const { data: emailRes, error } = await useFetch(`${window.location.origin}/api/contact`, {
            method: 'POST',
            body: sender
        });

        console.log(emailRes.value)

        if (emailRes.value === 200) {
            submitText.value = 'MESSAGE HAS BEEN SENT!'
            sender.value.name = ''
            sender.value.email = ''
            sender.value.message = ''

            setTimeout(() => {
                disableBtn.value = false
                submitText.value = 'SUBMIT'
            }, 2000)
        }
    } catch (error) {
        console.log(error);
    }
}

useHead({
    title: 'Contact Me - Fitri Afiq',
})

</script>