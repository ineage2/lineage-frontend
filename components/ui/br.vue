<script setup lang="ts">
interface Props {
    height: '20' | '40' | '80';
}

const props = defineProps<Props>();
</script>

<template>
    <div :class="'vlada-br-' + props.height"></div>
</template>

<style scoped lang="less">
.vlada-br-20 {
@apply mb-20;
}

.vlada-br-40 {
@apply mb-40;
}

.vlada-br-80 {
@apply mb-80;
}
</style>
