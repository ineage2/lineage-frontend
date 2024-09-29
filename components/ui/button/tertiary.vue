<script setup lang="ts">
interface Props {
    icon: string;
}

const props = defineProps<Props>();
</script>

<template>
    <button class="button">
        <Icon :name="props.icon" class="button-icon"/>
    </button>
</template>

<style scoped lang="less">
.button {
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(212, 203, 184);
    cursor: pointer;
    border-radius: 100%;
    transition: 0.3s;

    &-icon {
        width: 1.2rem;
        height: 1.2rem;
    }

    &:hover {
        filter: brightness(130%);
    }
}
</style>
