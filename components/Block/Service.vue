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
                {{ props.content.description }}
            </p>
            <div class="grid md:grid-cols-3 gap-5 2xl:gap-7">
                <template v-for="card in props.content.card">
                    <div data-aos="fade-left" data-aos-duration="1000" :data-aos-delay="increaseDelay()"
                        class="service border border-[#3a3a3a] p-7 overflow-hidden">
                        <div class="after:content-[''] after:w-80 after:h-[1px] after:absolute after:top-[22px] after:left-[44px] after:bg-[#3a3a3a]"
                            data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600">
                            <div
                                class="icon transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden relative border border-[#3a3a3a] rounded-full w-[45px] h-[45px] flex items-center justify-center mb-20">
                                <template v-for="icon in icons">
                                    <Icon v-if="icon.label === card.icon" :name="icon.name" size="100%" class="p-2.5" />
                                </template>
                            </div>
                        </div>
                        <h4 class="mb-3">{{ card.title }}</h4>
                        <p class="font-light">{{ card.description }}</p>
                    </div>
                </template>
            </div>
        </div>
    </GridThreeQuarters>
</template>

<script setup>
const props = defineProps(['content'])
const icons = ref([
    {
        id: 1,
        label: 'Code',
        name: 'cil:code'
    },
    {
        id: 2,
        label: 'WordPress',
        name: 'arcticons:wordpress'
    },
    {
        id: 3,
        label: 'Cart',
        name: 'ph:shopping-cart-light'
    },
])

let delay = 200

const increaseDelay = () => delay = delay + 200
</script>