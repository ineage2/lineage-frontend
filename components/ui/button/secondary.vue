<script setup lang="ts">
const localeRoute = useLocaleRoute();

interface Props {
    to: string;
    external: boolean;
    icon: string;
}

const props = defineProps<Props>();
</script>

<template>
    <NuxtLink
        v-if="props.to && !props.external"
        :to="localeRoute(props.to)"
        class="button"
    >
        <Icon :name="props.icon" class="button-icon"/>
    </NuxtLink>
    <a class="button" :href="props.to" target="_blank">
         <Icon :name="props.icon" class="button-icon"/>
    </a>
</template>

<style lang="less" scoped>
.button {
@apply flex;
    text-decoration: none;
    color: wheat;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.2s;
}

.button:hover::after {
    opacity: 0.9;
}

.button::after {
    content: "";
    position: absolute;
    border: 1rem solid transparent;
    border-image: url(/img/frames/frame_square.png);
    border-image-slice: 40 40 fill;
    left: -0.1rem;
    z-index: 2;
    right: -0.1rem;
    bottom: -0.1rem;
    top: -0.1rem;
    opacity: 0.3;
    transform: rotate(45deg);
    filter: brightness(130%);
    pointer-events: none;
    transition: 0.3s;
}
</style>
