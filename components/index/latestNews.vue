<script setup lang="ts">

</script>

<template>
    <section class="statistics">
        <div class="statistics-inner container-inner">
            <div class="statistics-header">
                <h3 data-aos="fade-left">🗞️{{ $t('welcome.latest-news.title') }}</h3>
            </div>
            <div class="statistics-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                <ui-card-news-primary
                    title="Celebrate the Fall Season"
                    image="https://cdn.ncwest.com/cms/oucarar1/200812-l2-news-header-tales-untold-announce.jpg"
                    type="Events"
                    date="24.6.2024"
                />
                <ui-card-news-primary
                    title="Gather Rewards Every Day"
                    image="https://cdn.ncwest.com/cms/tylfrqna/221014-l2-news-header-patch-notes.jpg"
                    type="Events"
                    date="12.4.2024"
                />
                <ui-card-news-primary
                    title="Special Crafting to Celebrate the Season"
                    image="https://cdn.ncwest.com/cms/wpbe5zxe/01_newsheader_1920x800-19th-anniversary-advance-gift.jpg"
                    type="Events"
                    date="29.3.2024"
                />
                <ui-card-news-primary
                    title="Join the Fall Festival"
                    image="https://cdn.ncwest.com/cms/f2dppywp/181003-l2-news-articleheader-classic-launch-events-1920x800.jpg"
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
