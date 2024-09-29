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
@apply w-full border-4 border-white border-opacity-5 rounded-lg bg-white bg-opacity-2;

    &-inner {
    @apply px-4 py-5;
    }
}
</style>
