<template>
    <TheHeader :logo="logo" :page="page" :menu="menu" />
    <!-- <pre class="pt-24">{{ menu }}</pre> -->

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

    <BlockCallToAction v-if="props.content.data[0].attributes.contact_cta" :content="contact_cta" />

    <TheFooter :footer="footer" />
</template>

<script setup>
const props = defineProps(['content', 'global'])

const page = ref(props.content.data[0].attributes.title)

const hero = ref(props.content.data[0].attributes.hero[0])
const blocks = ref(props.content.data[0].attributes.block)

const logo = ref(props.global.data.attributes.logo)
const contact_cta = ref(props.global.data.attributes.contact_cta)
const menu = ref(props.global.data.attributes.menu)
const footer = ref(props.global.data.attributes.footer)
</script>

<style scoped></style>