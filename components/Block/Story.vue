<template>
    <GridThreeQuarters :id="props.content.intro.label">
        <h6 data-aos="fade-right" data-aos-duration="1000"
            class="text-gray-900 dark:text-gray-400 text-[11px] tracking-[.4em]">/
            {{ props.content.intro.label }}</h6>
        <div class="col-span-3">
            <h2 data-aos="fade-left" data-aos-duration="1000"
                class="mt-8 md:mt-0 mb-2 md:mb-1 leading-10 md:leading-normal">{{ props.content.intro.title }}</h2>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"
                class="mb-10 text-gray-600 dark:text-gray-400">
                {{ props.content.subtitle }}</p>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <span v-for="(item, index) in parsedDescription" :key="index">
                    <NuxtLink v-if="item.isLink" :class="item.class" @click="handleClick(item.click)">{{ item.text }}
                    </NuxtLink>
                    <span v-else v-html="item.text"></span>
                </span>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
import { useSettings } from '@/stores/Settings'

const settings = useSettings()
const props = defineProps(['content'])
const description = ref(props.content.description)

const parsedDescription = computed(() => {
    const regex = /<NuxtLink(.*?)<\/NuxtLink>/g
    let lastIndex = 0
    const parts = []

    let match
    while ((match = regex.exec(description.value)) !== null) {
        if (match.index !== lastIndex) {
            parts.push({ text: description.value.slice(lastIndex, match.index), isLink: false })
        }

        const linkProps = match[1].match(/@click="(.*?)"\s*class="(.*?)">(.*)/)
        parts.push({
            click: linkProps[1],
            class: linkProps[2],
            text: linkProps[3],
            isLink: true
        })

        lastIndex = regex.lastIndex
    }

    if (lastIndex !== description.value.length) {
        parts.push({ text: description.value.slice(lastIndex), isLink: false })
    }

    return parts
})

const handleClick = (action) => {
    if (action === "settings.navigateMenu('/contact')") {
        settings.navigateMenu('/contact')
    }
}
</script>