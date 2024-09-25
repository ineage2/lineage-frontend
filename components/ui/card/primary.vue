<script setup lang="ts">

</script>

<template>
    <section class="card">
        <div class="card-inner">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped lang="less">
.card {
@apply px-4 py-3 relative bg-vlada-color-5 w-full;
    
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
}
</style>
