<script setup lang="ts">
</script>

<template>
    <section class="loading vlada-transition">
        <span class="loader"></span>
    </section>
</template>

<style scoped>
.loading {
    @apply fixed z-50 w-full h-full flex items-center justify-center;
    
    .loader {
        @apply w-11 h-11 border-b-transparent rounded-full inline-block animate-spin border-vlada-color-1 border-5;
    }
}


.dark-mode {
    .loading {
        @apply bg-zinc-900;
    }
}

.light-mode {
    .loading {
        @apply bg-slate-50;
    }
}
</style>
