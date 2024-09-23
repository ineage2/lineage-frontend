<script setup lang="ts">
interface Props {
    to: string;
    icon: string;
}

const props = defineProps<Props>();
</script>

<template>
    <NuxtLink
        v-if="props.to"
        :to="props.to"
        class="button"
        active-class="button-active"
    >

        <Icon :name="props.icon"/>
    </NuxtLink>
</template>

<style lang="less" scoped>
.button {
    text-decoration: none;
    color: wheat;
    display: flex;
    width: 2.3rem;
    height: 2.3rem;
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

.button svg {
    width: 1.1rem;
    height: 1.1rem;
    position: relative;
}

.button svg path {
    fill: wheat;
}
</style>
