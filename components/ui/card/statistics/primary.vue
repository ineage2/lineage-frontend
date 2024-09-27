<script setup lang="ts">
interface Props {
    title: string;
}

const props = defineProps<Props>();
</script>

<template>
    <ui-card-primary>
        <div class="card-title">
            <h3>{{ props.title }}</h3>
        </div>
        <div class="card-content">
            <table>
                <tr>
                    <th>№</th>
                    <th>one</th>
                    <th>two</th>
                </tr>
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
            </table>
        </div>
    </ui-card-primary>
</template>

<style scoped lang="less">
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
