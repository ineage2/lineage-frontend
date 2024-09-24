<script setup lang="ts">
const localeRoute = useLocaleRoute();

interface Props {
    to: string;
    external: boolean;
    placeholder: string;
}

const props = defineProps<Props>();
</script>

<template>
    <NuxtLink
        v-if="props.to && !props.external"
        :to="localeRoute(props.to)"
        class="button"
    >
        {{ props.placeholder }}

    </NuxtLink>
    <a v-else class="button" :href="props.to" target="_blank">
        {{ props.placeholder }}
    </a>
</template>

<style scoped lang="less">
.button {
@apply font-arpona-regular cursor-pointer flex justify-center items-center h-full relative overflow-hidden;
    width: 12rem;
    background: linear-gradient(rgb(106, 36, 8), rgb(183, 60, 11));
    text-decoration: none;
    color: rgb(255, 240, 211);
    font-size: 1.1rem;
    transition: 0.3s;

    &:hover {
        filter: brightness(130%);
    }
}
</style>
