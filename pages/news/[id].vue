<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import NewsService from '~/utils/api/services/newsService';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    content: string;
    created_at: string;
    image_large_url: string;
}

const newsList = ref<NewsItem[]>([]);
const loading = ref(true);

const route = useRoute();

const fetchCurrentNews = async (newsId: number) => {
    try {
        const response = await NewsService.show(newsId, {
            'Content-Type': 'application/json',
            'X-Fields': 'id,title,image_large_url,created_at,tags,tags.title,content,description'
        });
        newsList.value = response.data.message;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    const newsId = Number(route.params.id);
    if (newsId) {
        fetchCurrentNews(newsId);
    }
});
</script>

<template>
    <div>
        <common-loading v-if="loading"/>
        <transition name="fade">
            <div v-if="!loading">
                <section v-for="news in newsList" :key="news.id" class="news">
                    <div class="news-inner">
                        <div class="news-inner-background">
                            <div class="news-inner-background-image vlada-transition"
                                 :style="{ backgroundImage: `url(${news.image_large_url})` }"></div>
                            <div class="news-inner-background-gradient news-inner-background-gradient-top"></div>
                            <div class="news-inner-background-gradient news-inner-background-gradient-bottom"></div>
                            <div class="news-inner-background-content">
                                <div class="news-inner-background-content-title" data-aos="fade-up" data-aos-delay="100"
                                     data-aos-duration="750" data-aos-once="true">
                                    <h1>{{ news.title }}</h1>
                                </div>
                                <div class="news-inner-background-content-description" data-aos="fade-up"
                                     data-aos-delay="300"
                                     data-aos-duration="750" data-aos-once="true">
                                    <h4>{{ news.description }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section class="news-inner-content">
                        <div class="news-inner-content-inner" data-aos="fade-in" data-aos-delay="400"
                             data-aos-duration="750" data-aos-once="true">
                            <div class="news-inner-content-inner-main" v-html="news.content"></div>
                        </div>
                    </section>
                </section>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.news {
    &-inner {
        &-background {
            @apply relative;

            &-image {
                @apply w-dvw aspect-16-6 bg-fixed bg-no-repeat bg-cover bg-center;
            }

            &-gradient {
                @apply absolute w-dvw z-10 h-60;

                &-top {
                    @apply top-0;
                }

                &-bottom {
                    @apply bottom-0;
                }
            }

            &-content {
                @apply absolute z-20 flex flex-col justify-center items-center w-full h-full top-0;

                &-title {
                    h1 {
                        @apply max-w-5xl uppercase text-center mb-2;
                    }
                }

                &-description {
                    h4 {
                        @apply max-w-6xl text-center;
                    }
                }
            }
        }

        &-content {
            @apply z-20 relative max-w-7xl px-2 mx-auto;

            &-inner {
                @apply px-4 py-5 rounded-xl -top-40 relative;
            }
        }
    }
}

.dark-mode {
    .news {
        &-inner {
            &-background {

                &-image {
                    @apply brightness-50;
                }

                &-gradient {
                    &-top {
                        @apply bg-vlada-gradient-4;
                    }

                    &-bottom {
                        @apply bg-vlada-gradient-3;
                    }
                }

                &-content {
                    &-title {
                        h1 {
                            @apply text-white;
                        }
                    }

                    &-description {
                        h4 {
                            @apply text-white;
                        }
                    }
                }
            }

            &-content {
                &-inner {
                    @apply bg-zinc-800 shadow-2xl;
                }
            }
        }
    }
}


.light-mode {
    .news {
        &-inner {
            &-background {

                &-image {
                    @apply brightness-125;
                }

                &-gradient {
                    &-top {
                        @apply bg-vlada-gradient-2;
                    }

                    &-bottom {
                        @apply bg-vlada-gradient-1;
                    }
                }

                &-content {
                    &-title {
                        h1 {
                            @apply text-black;
                        }
                    }

                    &-description {
                        h4 {
                            @apply text-black;
                        }
                    }
                }
            }

            &-content {
                &-inner {
                    @apply bg-slate-100 shadow-xl;
                }
            }
        }
    }
}



.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
