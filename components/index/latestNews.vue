<script setup lang="ts">

</script>

<template>
    <section class="statistics">
        <div class="statistics-inner container-inner">
            <div class="statistics-header">
                <h3 data-aos="fade-left">🗞️{{ $t('welcome.latest-news.title') }}</h3>
            </div>
            <div class="statistics-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <ui-card-news-primary
                    title="Celebrate the Fall Season"
                    image="/img/bin/1.jpg"
                    type="Events"
                    date="24.6.2024"
                />
                <ui-card-news-primary
                    title="Gather Rewards Every Day"
                    image="/img/bin/2.jpg"
                    type="Events"
                    date="12.4.2024"
                />
                <ui-card-news-primary
                    title="Special Crafting to Celebrate the Season"
                    image="/img/bin/3.jpg"
                    type="Events"
                    date="29.3.2024"
                />
                <ui-card-news-primary
                    title="Join the Fall Festival"
                    image="/img/bin/4.jpg"
                    type="Events"
                    date="01.12.2023"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="less">
.statistics {
@apply w-full;

    &-header {
    @apply w-full mb-5;

        h3 {
        @apply font-one-lord;
        }
    }

    &-content {
    @apply flex gap-5 w-full justify-between;
    }
}
</style>
