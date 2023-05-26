<template>
    <Galeria :value="images" containerStyle="max-width: 100%" :showThumbnails="false" :autoPlay="true" :circular="true" :transitionInterval="2000">
        <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" class="w-full h-screen" style="object-fit: cover;" />
        </template>
        <template #caption="slotProps">
            <div class="mb-7">
                <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
                <p class="text-white">{{ slotProps.item.alt }}</p>
            </div>
        </template>
    </Galeria>
</template>
<script setup>
const images = ref ([
    {
        itemImageSrc: '/test.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        itemImageSrc: '/test1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        itemImageSrc: '/test2.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
])
</script>