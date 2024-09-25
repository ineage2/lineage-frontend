<script setup lang="ts">
interface Props {
    title: string;
    image: string;
    date: string;
    type: string;
    modeColor: string;
}

const props = defineProps<Props>();
</script>

<template>
    <section class="card">
        <div class="card-inner">
            <div class="card-image">
                <NuxtImg class="card-image-bg"
                         :src="props.image"
                         loading="lazy"/>
            </div>
            <div class="card-content">
                <div class="card-content-inner">
                    <div class="card-content-other">
                        <div class="card-content-other-title">
                            <h4>{{ props.title }}</h4>
                        </div>
                        <div class="card-content-other-time-and-type">
                            <p>{{ props.date }}</p>
                            <div class="card-content-other-time-and-type-type">
                                <p>{{ props.type }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="less">
.card {
@apply rounded-lg overflow-hidden cursor-pointer relative transition-all bottom-0 duration-300;

    &-image {
        &-bg {
        @apply w-full aspect-16-8 object-cover;
        }
    }

    &-content {
    @apply px-2 pt-2 pb-4 font-one-lord;

        &-inner {

        }

        &-other {
            &-time-and-type {
                p {
                @apply text-white;
                }
            }
        }
    }

    &:hover {
    @apply bg-vlada-color-6 bottom-3;
    }
}
</style>
