<script setup lang="ts">
import {onMounted, ref, computed} from 'vue';
import NewsService from '~/utils/api/services/newsService';

const localeRoute = useLocaleRoute()

interface NewsItem {
    id: number;
    title: string;
    created_at: string;
    image_url: string;
    tag: string;
    tags: Array<{ id: number; title: string }>;
}

const newsList = ref<NewsItem[]>([]);
const loading = ref(false);

const fetchNews = async () => {
    loading.value = true;
    try {
        const response = await NewsService.index(4, 1, {
            'Content-Type': 'application/json',
            'X-Fields': 'id,title,created_at,image_small_url,tags,tags.title'
        });
        newsList.value = response.data.message.data;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

const navigateToNews = async (id: number) => {
    try {
        await navigateTo(localeRoute('/news/' + id));
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchNews();
});
</script>

<template>
    <section class="latest-news" id="latest-news">
        <div class="vlada-container latest-news-inner">
            <div class="latest-news-inner-title" data-aos="fade-left" data-aos-duration="700" data-aos-once="true">
                <h2> 🗞️{{ $t('welcome.latest-news.title') }} </h2>
            </div>
            <section class="latest-news-inner-content" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700"
                     data-aos-once="true">
                <div class="latest-news-inner-content-card vlada-transition" v-for="news in newsList" :key="news.id"
                     @click="navigateToNews(news.id)">
                    <div class="latest-news-inner-content-card-image">
                        <Nuxt-img class="w-full aspect-video object-cover" :src="news.image_small_url" loading="lazy"/>
                    </div>
                    <div class="latest-news-inner-content-card-info">

                        <h4 class="latest-news-inner-content-card-info-title">{{ news.title }}</h4>
                        <div class="latest-news-inner-content-card-info-description">
                            <div class="latest-news-inner-content-card-info-description-date">
                                    <span>
                                          {{
                                            new Intl.DateTimeFormat($i18n.locale, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric'
                                            }).format(new Date(news.created_at))
                                        }}
                                    </span>
                            </div>
                            <div class="latest-news-inner-content-card-info-description-tags">
                                    <span v-for="tag in news.tags" :key="tag.id"
                                          class=""> {{
                                            tag.title
                                        }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped>
.latest-news {

    &-inner {

        &-title {
            @apply mb-7;

            h2 {
                @apply uppercase;
            }
        }

        &-content {
            @apply grid gap-5 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4;

            &-card {
                @apply cursor-pointer rounded-lg overflow-hidden relative bottom-0;

                &-image {
                    @apply pointer-events-none select-none;
                }

                &-info {
                    @apply px-3 py-2 flex flex-col aspect-16-6 justify-between;

                    &-title {
                        @apply pb-3;
                    }

                    &-description {
                        @apply flex flex-col gap-2;

                        &-date {
                            @apply text-sm opacity-80;
                        }

                        &-tags {
                            @apply flex gap-2;

                            span {
                                @apply text-sm px-5 py-1 rounded;
                            }
                        }
                    }
                }
            }
        }
    }
}

.dark-mode {
    .latest-news {

        &-inner {

            &-content {

                &-card {
                    @apply bg-vlada-color-1 bg-opacity-20 shadow-white;

                    &-info {
                        @apply px-3 py-2 flex flex-col;

                        &-title {

                        }

                        &-description {

                            &-date {
                                @apply text-white text-opacity-70;
                            }

                            &-tags {

                                span {
                                    @apply bg-white bg-opacity-10 text-white text-opacity-80;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .latest-news-inner-content-card:hover {
        @apply bg-opacity-80 bottom-3 shadow-vlada-color-1 shadow-2xl;

        .latest-news-inner-content-card-info-title {
            @apply text-white;
        }

        .latest-news-inner-content-card-info-description-date {
            @apply text-opacity-100;
        }

        .latest-news-inner-content-card-info-description-tags span {
            @apply bg-opacity-50 text-black;
        }
    }
}

.light-mode {
    .latest-news {

        &-inner {

            &-content {

                &-card {
                    @apply bg-vlada-color-1 bg-opacity-20;

                    &-info {
                        @apply px-3 py-2 flex flex-col;

                        &-title {

                        }

                        &-description {

                            &-date {
                                @apply text-black text-opacity-70;
                            }

                            &-tags {

                                span {
                                    @apply bg-black bg-opacity-10 text-black text-opacity-80;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .latest-news-inner-content-card:hover {
        @apply bg-opacity-80 bottom-5 shadow-vlada-color-1 shadow-2xl;

        .latest-news-inner-content-card-info-title {
            @apply text-black;
        }

        .latest-news-inner-content-card-info-description-date {
            @apply text-opacity-100;
        }

        .latest-news-inner-content-card-info-description-tags span {
            @apply bg-opacity-50 text-white;
        }
    }
}
</style>
