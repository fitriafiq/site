<template>
    <!-- <BlockManager :content="content" :global="global" /> -->
    <TheHeader :logo="logo" :page="page" :menu="menu" />

    <BlockHero v-if="hero.__component === 'block.hero-primary' || hero.__component === 'block.hero-secondary'"
        :content="hero" :chevronLink="blocks[0]?.intro.label" />

    <template v-for="block in blocks">
        <BlockAbout v-if="block.__component === 'block.about'" :content="block" />
        <BlockService v-if="block.__component === 'block.service'" :content="block" />
        <BlockStory v-if="block.__component === 'block.story'" :content="block" />
        <BlockMotto v-if="block.__component === 'block.motto'" :content="block" />
        <BlockToolbox v-if="block.__component === 'block.content-type' && block.content === 'Toolbox'" :content="block" />
        <BlockContact v-if="block.__component === 'block.contact'" :content="block" />
        <BlockCallToAction v-if="block.__component === 'block.cta'" :content="block" />
    </template>

    <BlockCallToAction v-if="content.data[0].attributes.contact_cta" :content="contact_cta" />

    <TheFooter :footer="footer" />

    <div ref="outer"
        class="cursor-inner hidden lg:block fixed pointer-events-none invisible rounded-[50%] left-0 top-0 transform-translatez-0 ml-[-27.5px] mt-[-27.5px] w-[55px] h-[55px] box-border z-[100] opacity-50 transition-all duration-[0.08s] ease-[ease-out] cursor-outer-transition border-2 border-black dark:border-white shadow-[2px_-3px_41px_-1px_#6d6d6da6] dark:shadow-[2px_-3px_41px_-1px_#f0f0f0a6] hover:opacity-0">
    </div>
    <div ref="inner"
        class="cursor-outer hidden lg:block fixed pointer-events-none invisible rounded-[50%] left-0 top-0 transform-translatez-0 ml-[-3px] mt-[-3px] w-1.5 h-1.5 z-[100] bg-black dark:bg-white shadow-[2px_-3px_41px_-1px_#6d6d6da6] dark:shadow-[2px_-3px_41px_-1px_#f0f0f0a6] cursor-inner-transition hover:w-20 hover:h-20 hover:opacity-30 hover:-ml-10 hover:-mt-10 hover:bg-black hover:dark:bg-white">
    </div>
    <!-- <pre class="pt-20">{{ footer }}</pre> -->
</template>

<script setup>
const { slug } = useRoute().params
const config = useRuntimeConfig()

const page = ref(null)
const hero = ref(null)
const blocks = ref(null)
const logo = ref(null)
const contact_cta = ref(null)
const menu = ref(null)
const footer = ref(null)

const { data: content, pending } = await useFetch(`${config.public.BASE_URL}/api/pages?filters[slug][$eq]=${slug !== '' ? slug : '/'}
&populate[block][populate]=anchor,background,intro,button,visual.visual_light,visual.visual_dark,service,card
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

if (!pending.value) {
    if (content.value.data.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    } else {
        page.value = content.value.data[0].attributes.title

        hero.value = content.value.data[0].attributes.hero[0]
        blocks.value = content.value.data[0].attributes.block

        logo.value = global.value.data.attributes.logo
        contact_cta.value = global.value.data.attributes.contact_cta
        menu.value = global.value.data.attributes.menu
        footer.value = global.value.data.attributes.footer
    }
}

import { useSettings } from '@/stores/Settings'

const settings = useSettings()
const outer = ref(null)
const inner = ref(null)

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
        console.log(el)
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
</script>