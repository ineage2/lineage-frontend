<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue';

const isVisible = ref(false);

const openModal = () => {
    isVisible.value = true;
};

const closeModal = () => {
    isVisible.value = false;
};

onBeforeUnmount(() => {
    document.body.style.overflow = '';
});

defineExpose({openModal, closeModal});
</script>

<template>
    <div>
        <transition>
            <div
                v-show="isVisible"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                @click.self="closeModal">
                <div class="modal-container">
                    <div class="w-full flex items-center justify-end">
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
@apply px-4 py-3 relative;
    width: min(80%, 45rem);
    background-color: rgb(235, 230, 219);
}

.modal-container:after {
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
