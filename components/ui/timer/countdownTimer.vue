<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';

interface Props {
    time: number;
}

const props = defineProps<Props>();

const remainingTime = ref(props.time);

const formattedTime = computed(() => {
    const months = Math.floor(remainingTime.value / (30 * 24 * 60 * 60));
    const days = Math.floor((remainingTime.value % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((remainingTime.value % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((remainingTime.value % (60 * 60)) / 60);
    const seconds = remainingTime.value % 60;

    return `${months}m ${days}d ${hours}h ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
});

const startCountdown = () => {
    const interval = setInterval(() => {
        if (remainingTime.value > 0) {
            remainingTime.value--;
        } else {
            clearInterval(interval);
            emit('finished');
        }
    }, 1000);
};

onMounted(() => {
    startCountdown();
});
</script>

<template>
    <section class="countdown-timer">
        <div>
            <span>{{ formattedTime }}</span>
        </div>
    </section>
</template>

<style scoped lang="less">
.countdown-timer {
@apply w-full flex justify-center;

    span {
    @apply text-8xl font-one-lord text-white;
    }
}
</style>
