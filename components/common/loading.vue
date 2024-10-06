<script setup lang="ts">
</script>

<template>
    <section class="w-dvh h-dvh z-50 bg-slate-50 flex items-center justify-center">
        <span class="loader border-vlada-color-1 border-solid border-4"></span>
    </section>
</template>

<style scoped>
.loader {
    width: 48px;
    height: 48px;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
