<script setup lang="ts">

</script>

<template>
    <section class="statistics">
        <div class="statistics-inner container-inner">
            <div class="statistics-header">
                <h3 data-aos="fade-left">🏆{{ $t('statistics.title') }}</h3>
            </div>
            <div class="statistics-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
              <ui-card-statistics-primary title="Top 10 pvp"/>
                <ui-card-statistics-primary title="Top 10 clans"/>
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
