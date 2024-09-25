<script setup lang="ts">

</script>

<template>
    <section class="statistics">
        <div class="statistics-inner container-inner">
            <div class="statistics-header">
                <h2 data-aos="fade-left" data-aos-once="true">🏆{{ $t('statistics.title') }}</h2>
                <div>

                </div>
            </div>
            <div class="statistics-content">
                <ui-card-primary>
                    <div class="statistics-card">
                        <div class="statistics-card-title">
                            <h3>TOP PVP</h3>
                        </div>
                    </div>
                </ui-card-primary>
                <ui-card-primary>
                    <div class="statistics-card">
                        <div class="statistics-card-title">
                            <h3>TOP EXP</h3>
                        </div>
                    </div>
                </ui-card-primary>
                <ui-card-primary>
                    <div class="statistics-card">
                        <div class="statistics-card-title">
                            <h3>TOP CLAN</h3>
                        </div>
                    </div>
                </ui-card-primary>
            </div>
        </div>
    </section>
</template>

<style scoped lang="less">
.statistics {
@apply w-full;

    &-header {
    @apply w-full mb-5;

        h2 {
        @apply font-one-lord;
        }
    }

    &-content {
    @apply flex gap-10 w-full justify-between;
    }


}
</style>
