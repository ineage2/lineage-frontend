<script setup lang="ts">
const localeRoute = useLocaleRoute()

interface Props {
    size: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    to?: string;
    external?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
    <nuxt-link
        v-if="props.to && !props.external"
        :to="localeRoute(props.to)"
        class="link vlada-transition"
        :class="[`link-size-${props.size}`]"
        active-class="link-active">
        <slot></slot>
    </nuxt-link>
    <a v-else class="link" :href="props.to" target="_blank">
        <slot></slot>
    </a>
</template>

<style scoped>
.link {
    @apply px-2 py-1 flex opacity-50 hover:opacity-100 text-nowrap;

    &-text {
        @apply select-none pointer-events-none;
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

.dark-mode {
    .link {
        @apply text-white;
    }
}

.light-mode {
    .link {
        @apply text-black;
    }
}
</style>
