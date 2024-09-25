<script setup lang="ts">
import {ref} from 'vue';

interface Props {
    title?: string;
    max?: number;
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
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"

                @click.self="closeModal">
                <div class="modal-container" :style="'max-width:' + props.max + 'px'">
                    <div class="modal-container-top">
                        <h3>{{ props.title }}</h3>
                        <ui-button-tertiary icon="bi:x-lg" @click="closeModal"/>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped lang="less">
.modal-container {
@apply px-4 py-3 relative mx-auto bg-vlada-color-5;

    &:after {
        content: "";
        position: absolute;
        border: 1rem solid transparent;
        border-image: url(/img/frames/frame_with-point.png);
        border-image-slice: 40 40 fill;
        left: -0.6rem;
        z-index: 2;
        right: -0.6rem;
        bottom: -0.6rem;
        top: -0.6rem;
        filter: brightness(120%);
        pointer-events: none;
        transition: 0.3s;
    }
    
    &-top {
        @apply flex items-center justify-between font-one-lord gap-5 mb-4;
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
