<script setup lang="ts">
import {ref} from 'vue';

interface Props {
    title: string;
    max: number;
    min: number;
}

const props = defineProps<Props>();

const isVisible = ref(false);

const openModal = () => {
    isVisible.value = true;
};

const closeModal = () => {
    isVisible.value = false;
};

defineExpose({openModal, closeModal});
</script>

<template>
    <div>
        <transition>
            <div
                v-show="isVisible"
                class="modal"
                @click.self="closeModal">
                <div class="modal-inner" :style="'max-width:' + props.max + 'px;' + 'min-width:' + props.min + 'px'">
                    <div class="modal-inner-top">
                        <h3>{{ props.title }}</h3>
                        <ui-button type="tertiary" @click="closeModal" icon="bi:x-lg" icon-position="left"/>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.modal {
    @apply fixed inset-0 z-50 flex items-center justify-center;

    &-inner {
        @apply px-4 py-3 relative mx-auto;

        &::after {
            @apply absolute -left-2 -right-2 z-10 -bottom-2 -top-2 brightness-125 pointer-events-none select-none;
            content: "";
            border: 1rem solid transparent;
            border-image: url(/img/frames/frame_with-point.png);
            border-image-slice: 40 40 fill;
        }

        &-top {
            @apply flex items-center justify-between font-one-lord gap-5 mb-4;
        }
    }
}

.dark-mode {
    .modal {
        @apply bg-black bg-opacity-50;
        
        &-inner {
            @apply bg-vlada-color-5;
        }
    }
}

.light-mode {
    .modal {
        @apply bg-white bg-opacity-50;
        
        &-inner {
            @apply bg-slate-100;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
