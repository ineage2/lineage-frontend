<script setup lang="ts">
const localeRoute = useLocaleRoute();

interface Props {
    type: "primary" | "secondary" | "tertiary";
    to?: string;
    external?: boolean;
    icon?: string;
    iconPosition?: "left" | "right";
    placeholder?: string;
}

const props = defineProps<Props>();

const getComponentType = computed(() => {
    if (props.to && !props.external) {
        return 'a';
    } else if (props.to) {
        return 'a';
    } else {
        return 'div';
    }
});

const getComponentProps = computed(() => {
    if (props.to && !props.external) {
        return {to: localeRoute(props.to)};
    } else if (props.to) {
        return {href: props.to, target: '_blank'};
    } else {
        return {};
    }
});
</script>

<template>
    <nuxt-link v-if="props.type === 'primary'" :is="getComponentType" class="button-1" v-bind="getComponentProps">
        <div class="button-1-text">
            <template v-if="props.iconPosition === 'left'">
                <Icon v-if="props.icon" :name="props.icon" class="button-1-text-icon"/>
                <p class="button-1-text-paragraph">{{ props.placeholder }}</p>
            </template>
            <template v-if="props.iconPosition === 'right'">
                <p class="button-1-text-paragraph">{{ props.placeholder }}</p>
                <Icon v-if="props.icon" :name="props.icon" class="button-1-text-icon"/>
            </template>
            <template v-if="props.iconPosition == undefined">
                <p class="button-1-text-paragraph">{{ props.placeholder }}</p>
            </template>
        </div>
        <div class="button-1-decor button-1-decor-1 vlada-transition"><span></span><span></span></div>
        <div class="button-1-decor button-1-decor-2 vlada-transition"><span></span></div>
    </nuxt-link>
    <NuxtLink v-else-if="props.type === 'secondary'" :is="getComponentType" class="button-2" v-bind="getComponentProps">
        <div class="button-2-text">
            <template v-if="props.iconPosition === 'left'">
                <Icon v-if="props.icon" :name="props.icon" class="button-2-text-icon"/>
                <p class="button-2-text-paragraph" v-if="props.placeholder">{{ props.placeholder }}</p>
            </template>
            <template v-if="props.iconPosition === 'right'">
                <p class="button-2-text-paragraph" v-if="props.placeholder">{{ props.placeholder }}</p>
                <Icon v-if="props.icon" :name="props.icon" class="button-2-text-icon"/>
            </template>
            <template v-if="props.iconPosition == undefined">
                <p class="button-2-text-paragraph" v-if="props.placeholder">{{ props.placeholder }}</p>
            </template>
        </div>
    </NuxtLink>
    <nuxt-link v-else-if="props.type === 'tertiary'" :is="getComponentType" class="button-3" v-bind="getComponentProps">
        <div class="button-3-text">
            <template v-if="props.iconPosition === 'left'">
                <Icon v-if="props.icon" :name="props.icon" class="button-3-text-icon"/>
                <p v-if="props.placeholder" class="button-3-text-paragraph">{{ props.placeholder }}</p>
            </template>
        </div>
    </nuxt-link>
</template>

<style scoped>
.button-1 {
    @apply font-arpona-regular mx-auto flex items-center justify-center relative cursor-pointer w-64 h-12 text-base no-underline text-vlada-color-1 rounded-lg;

    &-text {
        @apply flex items-center justify-center gap-2;

        &-icon {
            @apply text-xl;
        }

        &-paragraph {
            @apply text-base font-one-lord;
        }
    }

    &-decor {
        @apply absolute w-full h-full top-0 left-0;
    }

    &-decor-1 {
        @apply z-10 flex items-center justify-center overflow-hidden;

        span {
            @apply absolute w-24 h-24 flex rotate-45;

            &:nth-child(1) {
                @apply left-4;
                clip-path: polygon(0 0, 30% 0, 60% 100%, 0 100%);
            }

            &:nth-child(2) {
                @apply right-4;
                clip-path: polygon(30% 0, 100% 0, 100% 100%, 60% 100%);
            }

            &::after {
                @apply absolute left-0 right-0 top-0 bottom-0 z-20 border-[1.5rem] border-transparent;
                content: "";
                border-image: url(/img/frames/frame_square.png);
                border-image-slice: 40 40 fill;
            }
        }

        &::before, &::after {
            @apply absolute h-[0.15rem] bg-vlada-color-4 w-[80%];
            content: "";
        }

        &::before {
            @apply top-0;
        }

        &::after {
            @apply bottom-0;
        }
    }

    &-decor-2 {
        @apply -z-10;
        clip-path: polygon(10% 0%, 88% 0%, 100% 50%, 88% 100%, 10% 100%, 0% 50%);

        span {
            @apply absolute w-full h-full left-0 top-0 flex justify-center;

            &::before {
                @apply absolute z-10 -bottom-20 w-[500px] h-[520px] opacity-100 pointer-events-none select-none;
                content: "";
                background: url(/img/frames/particles.png) top;
                animation: button-1-animation 3s steps(75) infinite;
                transform: rotate(180deg) translateY(-13rem) scale(1);
            }
        }
    }

    &::before {
        @apply absolute z-20 w-40 -top-14 pointer-events-none h-20;
        content: "";
        background: url(/img/frames/frame_top-no-dragon.png) center/cover;
    }

    &:hover {
        @apply brightness-125 scale-105;
    }
}

.button-2 {
    @apply cursor-pointer flex relative overflow-hidden bg-vlada-gradient-6 px-10 h-full items-center;

    &:hover {
        @apply brightness-125;
    }
}

.button-3 {
    @apply px-2.5 py-2.5 w-auto flex items-center justify-center cursor-pointer rounded-full;

    &-text {
        @apply flex flex-row;

        &-icon {
            @apply text-xl;
        }
    }
}

.dark-mode {
    .button-1 {

        &-text {

            &-paragraph {
                @apply text-white;
            }
        }

        &-decor-2 {
            @apply bg-vlada-color-5 bg-opacity-90;
        }
    }

    .button-3 {
        @apply bg-vlada-color-1 hover:brightness-125;

        &-text {

            &-icon {
                @apply text-vlada-color-5;
            }
        }
    }
}

.light-mode {
    .button-1 {

        &-text {

            &-paragraph {
                @apply text-white;
            }
        }

        &-decor-2 {
            @apply bg-vlada-color-5 bg-opacity-50;
        }
    }

    .button-3 {
        @apply bg-slate-200 hover:brightness-125;

        &-text {

            &-icon {
                @apply text-black;
            }
        }
    }
}

@keyframes button-1-animation {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 -39000px;
    }
}
</style>
