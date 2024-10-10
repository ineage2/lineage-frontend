<script setup lang="ts">

</script>

<template>
    <section class="statistics">
        <div class="statistics-inner container-inner">
            <div class="statistics-header">
                <h3 data-aos="fade-left">🏆{{ $t('welcome.statistics.title') }}</h3>
            </div>
            <div class="statistics-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <ui-card-primary>
                    <div class="card-title">
                        <h3>wd</h3>
                    </div>
                    <div class="card-content">
                        <table>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>one</th>
                                <th>two</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Peter</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            <tr>
                                <td>Lois</td>
                                <td>Peter</td>
                                <td>Griffin</td>
                            </tr>
                            </tbody>
                        </table>
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

        h3 {
        @apply font-one-lord;
        }
    }

    &-content {
    @apply flex gap-5 w-full justify-between;
    }
}

.card {

    &-title {
        h3 {
        @apply font-one-lord uppercase;
        }
    }

    &-content {
    @apply font-arpona-regular;

        table {
        @apply w-full;

            tr {
                th {
                @apply text-white font-arpona-regular opacity-50;
                }

                td {
                @apply text-white text-center;
                }
            }
        }
    }
}
</style>
