<template>
    <div class="w-full h-screen">
        <Menubar :model="items">
            <template #start>
                <div class="text-3xl mx-3 font-bold text-white">Nuxt APP</div>
            </template>
        </Menubar>
        <slot />
    </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Register',
        to: '/register'
    },  
]);
</script>
<style scoped>
.p-menubar {
    background-color: #1C1B22;
    border: none;
}
</style>