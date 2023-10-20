<template>
    <Menu @navigateMenu="navigateMenu" :menu="props.menu" />
    <header class="fixed w-full z-10 bg-[#fdfdfd]/10 dark:bg-[#191c22]/10 backdrop-blur">
        <div class="container flex items-center justify-between my-3">
            <Transition enter-active-class="ease duration-[1500ms] transition"
                enter-from-class="opacity-0 transform translate-x-[-100%]"
                enter-to-class="opacity-100 transform translate-x-0" leave-active-class="transition ease duration-[1500ms]"
                leave-from-class="translate-x-0 opacity-100" leave-to-class="translate-x-[-100%] opacity-0">
                <NuxtLink v-show="colorMode !== null" @click="toggleMenu($event, true)"
                    class="flex items-center gap-x-4 text-[1.4rem] font-semibold">
                    <img class="w-14"
                        :src="colorMode === 'dark' ? config.public.API_URL + props.logo.logo_dark.data.attributes.url : config.public.API_URL + props.logo.logo_light.data.attributes.url"
                        alt="logo">FITRIAFIQ
                </NuxtLink>
            </Transition>
            <Transition enter-active-class="ease duration-[1500ms] transition"
                enter-from-class="opacity-0 transform translate-x-[100%]"
                enter-to-class="opacity-100 transform translate-x-0" leave-active-class="transition ease duration-[1500ms]"
                leave-from-class="translate-x-0 opacity-100" leave-to-class="translate-x-[100%] opacity-0">
                <div class="flex items-center" v-show="colorMode !== null">
                    <div class="color-mode me-3 md:me-0">
                        <Icon @click="settings.toggleColorMode()" :name="colorMode === 'dark' ? 'ion:moon' : 'ion:sunny'"
                            size="20" />
                    </div>
                    <h6 class="hidden sm:block tracking-[.4em] ms-6">{{ props.page }}</h6>
                    <hr class="hidden sm:block w-10 mx-4 border-[#727272]">
                    <div @click="toggleMenu($event)" class="menu-wrapper h-[30px] cursor-pointer z-[1000]">
                        <div ref="iconMenu"
                            class="hamburger-menu translate-y-[15px] transition-all duration-0 delay-300 bg-black dark:bg-white relative w-[30px] h-px after:w-[30px] after:h-px before:w-[30px] before:h-px before:content-[''] before:absolute before:left-0 before:bottom-2 before:bg-black before:dark:bg-white before:hamburger-menu-before before:duration-500 after:content-[''] after:absolute after:left-0 after:top-2 after:bg-black after:dark:bg-white after:hamburger-menu-after after:duration-500">
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </header>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['logo', 'page', 'menu'])
const config = useRuntimeConfig()
const settings = useSettings()
const colorMode = ref(null)
const iconMenu = ref(null)

onMounted(async () => {
    colorMode.value = settings.colorMode
})

watch(() => settings.colorMode, () => {
    colorMode.value = colorMode.value !== null ? settings.colorMode : null
})

const toggleMenu = (event, logo = false) => {
    if (logo) {
        iconMenu.value.classList.remove('animate')
        settings.navigateMenu('/')
    } else {
        iconMenu.value.classList.toggle('animate')
        event.target.closest('body').classList.toggle('nav-active')
    }
}

const navigateMenu = (event, url) => {
    iconMenu.value.classList.toggle('animate')
    event.target.closest('body').classList.remove('nav-active')
    settings.navigateMenu(url, true)
}
</script>
