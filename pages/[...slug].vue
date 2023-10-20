<template>

    <!-- <pre class="pt-20">{{ seo }}</pre> -->

    <TheHeader :logo="logo" :page="page" :menu="menu" />
    <BlockHero :content="hero" :chevronLink="blocks[0]?.intro ? blocks[0].intro.label : blocks[0].label"
        :portfolio="blocks[0]?.intro ? '' : content.data[0].attributes.url" />
    <!-- <pre class="pt-20">{{ blocks[3] }}</pre> -->

    <template v-for="block in blocks">
        <BlockAbout v-if="block.__component === 'block.about'" :content="block" />
        <BlockService v-if="block.__component === 'block.service'" :content="block" />
        <BlockStory v-if="block.__component === 'block.story'" :content="block" />
        <BlockMotto v-if="block.__component === 'block.motto'" :content="block" />
        <BlockToolbox v-if="block.__component === 'block.content-type' && block.content === 'Toolbox'" :content="block" />
        <BlockPortfolio v-if="block.__component === 'block.content-type' && block.content === 'Portfolio'" :content="block"
            :slug="slug[1] ?? ''" />
        <BlockWorkflow v-if="block.__component === 'block.workflow'" :content="block" />
        <BlockClient v-if="block.__component === 'block.client'" :content="block" :url="content.data[0].attributes.url" />
        <BlockShowcase v-if="block.__component === 'block.showcase'" :content="block" />
        <BlockTechnology v-if="block.__component === 'block.technology'" :content="block" />
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
import { useSettings } from '@/stores/Settings'

const settings = useSettings()
const outer = ref(null)
const inner = ref(null)
const { slug } = useRoute().params
const config = useRuntimeConfig()

const page = ref(null)
const hero = ref(null)
const blocks = ref(null)
const logo = ref(null)
const contact_cta = ref(null)
const menu = ref(null)
const footer = ref(null)
const seo = ref(null)

const { data: content, pending } = await useFetch(`${config.public.API_URL}/api/${slug.length !== 2 ? 'pages' : 'portfolios'}
?filters[slug][$eq]=${slug.length !== 2 ? (slug !== '' ? slug : '/') : slug[1]}
&populate[block][populate]=anchor,background,intro,button,visual.visual_light,visual.visual_dark,service,card,social,gallery,skill.logo
&populate[hero][populate][background][populate]=*&populate[seo][populate]=meta_image,meta_social.image`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

const { data: global } = await useFetch(`${config.public.API_URL}/api/global?populate=logo.logo_light,logo.logo_dark,contact_cta.intro,contact_cta.button,footer,menu`, {
    headers: {
        Authorization: `Bearer ${config.public.API_TOKEN}`
    }
})

if (!pending.value) {
    if (content.value.data.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    } else {
        page.value = content.value.data[0].attributes.title

        hero.value = content.value.data[0].attributes.hero
        blocks.value = content.value.data[0].attributes.block
        seo.value = content.value.data[0].attributes.seo
        
        logo.value = global.value.data.attributes.logo
        contact_cta.value = global.value.data.attributes.contact_cta
        menu.value = global.value.data.attributes.menu
        footer.value = global.value.data.attributes.footer

        useHead({
            title: seo.value.meta_title,
            meta: [
                { name: 'viewport', content: seo.value.meta_viewport },
                { name: 'description', content: seo.value.meta_description },
                { name: 'image', content: config.public.API_URL + seo.value.meta_image.data.attributes.url },
                { name: 'og:title', content: seo.value.meta_social.title },
                { name: 'og:description', content: seo.value.meta_social.description },
                { name: 'og:image', content: config.public.API_URL + seo.value.meta_social.image.data.attributes.url },
                { name: 'twitter:title', content: seo.value.meta_social.title },
                { name: 'twitter:description', content: seo.value.meta_social.description },
                { name: 'twitter:image', content: config.public.API_URL + seo.value.meta_social.image.data.attributes.url },
                { name: 'keywords', content: seo.value.keywords },
                { name: 'robots', content: seo.value.meta_robots },
            ],
            script: [
                { type: 'application/ld+json', innerHTML: JSON.stringify(seo.value.structured_data) },
            ],
            link: [
                { rel: 'canonical', href: config.public.BASE_URL + seo.value.canonical_url },
            ],
        })
    }
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

    let elements = document.querySelectorAll('a, button:not(:disabled), .menu-wrapper, .nav-item, .color-mode, input[role="switch"]')

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
</script>