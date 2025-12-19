<template>
    <GridHalf :id="props.content.intro.label">
        <div class="my-auto">
            <h6 data-aos="fade-right" data-aos-duration="1000"
                class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
                {{ props.content.intro.label }}</h6>
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" class="block md:hidden my-8" autoplay
                loop playsinline muted
                :src="colorMode === 'dark' ? config.public.API_URL + props.content.visual.visual_dark.data.attributes.url : config.public.API_URL + props.content.visual.visual_light.data.attributes.url"></video>
            <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300"
                class="mt-8 md:mt-16 mb-2 md:mb-5 leading-10 md:leading-normal">{{ props.content.intro.title }}
            </h2>
            <form @submit.prevent="sendEmail" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600"
                class="mt-5">
                <p class="leading-9">Hello, my name is &nbsp;<input
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
                <input class="hidden" name="decoy" v-model="sender.decoy">

                <button class="mt-10" type="submit" :disabled="disableBtn">{{ submitText }}</button>
            </form>
        </div>
        <div class="justify-end ps-16 hidden md:flex">
            <video data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" autoplay loop playsinline muted
                :src="colorMode === 'dark' ? config.public.API_URL + props.content.visual.visual_dark.data.attributes.url : config.public.API_URL + props.content.visual.visual_light.data.attributes.url"></video>
        </div>
    </GridHalf>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['content'])
const config = useRuntimeConfig()
const settings = useSettings()
const colorMode = ref(null)

onMounted(() => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})

const sender = ref({
    name: '',
    email: '',
    message: '',
    decoy: null
})

const disableBtn = ref(false)
const submitText = ref('SUBMIT')

async function sendEmail() {
    try {
        if (sender.value.decoy === null) {
            disableBtn.value = true
            submitText.value = 'SENDING...'
            const { data } = await useFetch(`${window.location.origin}/api/contact`, {
                method: 'POST',
                body: sender
            })

            if (data.value === 200) {
                submitText.value = 'MESSAGE HAS BEEN SENT!'
                sender.value.name = ''
                sender.value.email = ''
                sender.value.message = ''

                setTimeout(() => {
                    disableBtn.value = false
                    submitText.value = 'SUBMIT'
                }, 2000)
            }
        }
    } catch (error) {
        console.log(error);
    }
}
</script>