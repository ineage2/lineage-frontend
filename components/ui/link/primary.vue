<script setup lang="ts">
const localeRoute = useLocaleRoute()

interface Props {
    size: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    placeholder: string;
    to: string;
}

const props = defineProps<Props>();
</script>

<template>
    <NuxtLink
        v-if="props.to"
        :to="localeRoute(props.to)"
        :class="['link', `link-size-${props.size}`]"
        active-class="link-active">
        <p v-if="props.placeholder" class="link-text">{{ props.placeholder }}</p>
    </NuxtLink>
</template>

<style lang="less" scoped>
.link {
@apply px-2 py-1 flex opacity-50 font-arpona-regular hover:opacity-100 transition-opacity duration-300 text-nowrap;

    &-text {
    @apply select-none pointer-events-none text-white;
    }

    &-active {
    @apply opacity-100;
    }

    &-size {
        &-xs {
        @apply text-xs;
        }

        &-sm {
        @apply text-sm;
        }

        &-base {
        @apply text-base;
        }

        &-lg {
        @apply text-lg;
        }

        &-xl {
        @apply text-xl;
        }
    }
}
</style>
