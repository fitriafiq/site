<template>
    <TheHeader :logo="logo" :page="404" :menu="menu" />
    <section class="relative flex flex-col h-screen transition-all duration-200">
        <div class="container my-auto text-center">
            <p class="font-semibold">{{
                props.error.statusCode }}</p>
            <div class="my-5">
                <h1 class="mb-4">{{ props.error.message }}</h1>
                <p>Sorry, we couldn't find the page you're looking for.</p>
            </div>
            <div class="flex justify-center mt-10">
                <button @click="settings.navigateMenu('/')" class="btn">BACK TO HOME</button>
            </div>
        </div>
        <TheFooter :footer="footer" />
    </section>

    <Teleport to="body">
        <div ref="outer"
            class="cursor-inner hidden lg:block fixed pointer-events-none invisible rounded-[50%] left-0 top-0 transform-translatez-0 ml-[-27.5px] mt-[-27.5px] w-[55px] h-[55px] box-border z-[100] opacity-50 transition-all duration-[0.08s] ease-[ease-out] cursor-outer-transition border-2 border-black dark:border-white shadow-[2px_-3px_41px_-1px_#6d6d6da6] dark:shadow-[2px_-3px_41px_-1px_#f0f0f0a6] hover:opacity-0">
        </div>
        <div ref="inner"
            class="cursor-outer hidden lg:block fixed pointer-events-none invisible rounded-[50%] left-0 top-0 transform-translatez-0 ml-[-3px] mt-[-3px] w-1.5 h-1.5 z-[100] bg-black dark:bg-white shadow-[2px_-3px_41px_-1px_#6d6d6da6] dark:shadow-[2px_-3px_41px_-1px_#f0f0f0a6] cursor-inner-transition hover:w-20 hover:h-20 hover:opacity-30 hover:-ml-10 hover:-mt-10 hover:bg-black hover:dark:bg-white">
        </div>
    </Teleport>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const props = defineProps(['error'])
const config = useRuntimeConfig()
const settings = useSettings()
const outer = ref(null)
const inner = ref(null)

const { data: global, pending } = await useFetch(`${config.public.BASE_URL}/api/global?populate=logo.logo_light,logo.logo_dark,footer,menu`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

const logo = ref(null)
const menu = ref(null)
const footer = ref(null)

if (!pending.value && global.value.data) {
    logo.value = global.value.data.attributes.logo
    menu.value = global.value.data.attributes.menu
    footer.value = global.value.data.attributes.footer
}

onMounted(() => {
    let n = 0
    let i = 0
    let o = !1

    window.onmousemove = (s) => {
        o || (inner.value.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)")
        outer.value.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"
        n = s.clientY
        i = s.clientX
    }

    let elements = document.querySelectorAll('a, button:not(:disabled), .menu-wrapper, .nav-item .color-mode, input[role="switch"]')

    elements.forEach((el) => {
        el.onmouseenter = () => {
            outer.value.classList.add("cursor-hover")
            inner.value.classList.add("cursor-hover")
        }

        el.onmouseleave = () => {
            outer.value.classList.remove("cursor-hover")
            inner.value.classList.remove("cursor-hover")
        }
    })

    outer.value.style.visibility = "visible"
    inner.value.style.visibility = "visible"

    settings.initializeColorMode()
})

useHead({
    script: [
        {
            children: `
            if (!('theme' in localStorage)) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    localStorage.setItem('theme', 'dark')
                    document.documentElement.classList.add('dark')
                } else {
                    localStorage.setItem('theme', 'light')
                    document.documentElement.classList.remove('dark')
                }
            } else {
                if (localStorage.theme === 'dark') {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                   
                }
            }
            `
        }
    ]
})
</script>