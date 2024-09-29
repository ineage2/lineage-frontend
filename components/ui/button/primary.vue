<script setup lang="ts">
const localeRoute = useLocaleRoute();

interface Props {
    to?: string;
    external?: boolean;
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
        <div><span></span><span></span></div>
        <div><span></span></div>
    </NuxtLink>
    <a v-else class="button" :href="props.to" target="_blank">
        {{ props.placeholder }}
        <div><span></span><span></span></div>
        <div><span></span></div>
    </a>
</template>

<style scoped lang="less">
.button {
@apply font-arpona-regular mx-auto flex items-center justify-center relative cursor-pointer;
    width: 16rem;
    height: 3.2rem;
    font-size: 1rem;
    text-decoration: none;
    color: wheat;
    border-radius: 0.5rem;
    transition: 0.3s;
}

.button:hover {
    filter: brightness(130%);
    transform: scale(1.05);
}

.button::before {
    content: "";
    position: absolute;
    top: -3.5rem;
    z-index: 2;
    width: 10rem;
    pointer-events: none;
    height: 5rem;
    background: url(/img/frames/frame_top-no-dragon.png) center/cover;
}

.button div:nth-child(2) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: rgb(34, 24, 13);
    clip-path: polygon(12% 0%, 88% 0%, 100% 50%, 88% 100%, 12% 100%, 0% 50%);
}

.button div:nth-child(2) span {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
}

.button div:nth-child(2) span::before {
    z-index: 1;
    content: "";
    bottom: -5rem;
    width: 500px;
    height: 520px;
    position: absolute;
    background: url(/img/frames/particles.png) top;
    animation: animateParticle 4s steps(75) infinite;
    opacity: 1;
    transform: rotate(180deg) translateY(-13rem) scale(1);
    pointer-events: none;
}

.button div:nth-child(1) {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    overflow: hidden;
}

.button div:nth-child(1)::before {
    content: "";
    position: absolute;
    height: 0.15rem;
    width: 78.8%;
    top: 0;
    background-color: rgb(177, 152, 105);
}

.button div:nth-child(1)::after {
    content: "";
    position: absolute;
    height: 0.15rem;
    width: 80%;
    bottom: 0;
    background-color: rgb(177, 152, 105);
}

.button div:nth-child(1) span:nth-child(1) {
    left: 0.9rem;
    clip-path: polygon(0 0, 30% 0, 60% 100%, 0 100%);
}

.button div:nth-child(1) span:nth-child(2) {
    right: 0.9rem;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 60% 100%);
}

.button div:nth-child(1) span {
    position: absolute;
    width: 5.6rem;
    height: 5.6rem;
    display: flex;
    transform: rotate(45deg);
}

.button div:nth-child(1) span::after {
    content: "";
    position: absolute;
    border: 1.5rem solid transparent;
    border-image: url(/img/frames/frame_square.png);
    border-image-slice: 40 40 fill;
    left: 0rem;
    z-index: 2;
    right: 0rem;
    bottom: 0rem;
    top: 0rem;
    filter: brightness(130%);
    pointer-events: none;
    transition: 0.3s;
}

@keyframes animateParticle {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 -39000px;
    }
}
</style>
