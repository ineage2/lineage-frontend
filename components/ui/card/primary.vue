<script setup lang="ts">
interface Props {
    title: string;
}

const props = defineProps<Props>();
</script>

<template>
    <section class="card">
        <div class="card-inner">
            <div class="statistics-card">
                <div class="statistics-card-title">
                    <h3>{{ props.title }}</h3>
                    <div class="h-52">
                        wdwdwdwd
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="less">
.card {
@apply w-full border-4 border-white border-opacity-5 rounded-lg bg-white bg-opacity-2;

    &-inner {
    @apply px-4 py-5;
    }
}
</style>
