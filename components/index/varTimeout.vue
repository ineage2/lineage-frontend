<script setup lang="ts">

</script>

<template>
    <section class="var-timeout" data-aos="fade-in" data-aos-delay="400" data-aos-duration="700">
        <nuxt-img src="/img/backgrounds/next-war-bg.png" class="w-dvw h-dvh absolute object-cover pointer-events-none"
                  data-aos="fade-in" data-aos-once="true"/>
        <div>
            <div class="w-dvw h-36 absolute top-0 z-10"
                 style="background: linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0.5) 30%, rgba(255,0,0,0) 100%);">
            </div>
        </div>
        <div>
            <div class="w-dvw h-36 absolute bottom-0 z-10"
                 style="background: linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(255,255,255,0.5) 30%, rgba(255,0,0,0) 100%);">
            </div>
        </div>
        <div class="container-inner py-40">
            <div class="py-20 text-center">
                <h1 class="font-one-lord text-center uppercase text-nowrap" data-aos="fade-up" data-aos-delay="300"
                    data-aos-duration="750">War of the Three Nations</h1>
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="750"
                     class="max-w-3xl w-full mx-auto mt-5">
                    <h4 class="text-white font-one-lord">
                        A fierce struggle between three powerful nations battling for supremacy. Choose your side,
                        engage in epic battles, conquer territories, and rise as the ultimate victor in this relentless
                        war for honor, power, and survival.
                    </h4>
                </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="500" data-aos-duration="750">
                <ui-timer-countdown-timer :time="250000"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="less">
.var-timeout {
@apply overflow-hidden relative;

    &-container-inner {
    @apply py-40 flex flex-col gap-20;
    }

    &-title {
    @apply text-center font-one-lord flex flex-col items-center;

        h1 {
        @apply text-white;
        }

        &-description {
        @apply max-w-2xl mt-5;

            h4 {
            @apply text-white text-opacity-70;
            }
        }
    }
}
</style>
