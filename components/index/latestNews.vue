<script setup lang="ts">
import {onMounted, ref, computed} from 'vue';
import NewsService from '~/utils/api/services/newsService';

interface NewsItem {
    id: number;
    title: string;
    created_at: string;
    image_url: string;
    tag: string;
}

const newsList = ref<NewsItem[]>([]);
const loading = ref(false);

const gridClasses = computed(() => {
    const length = newsList.value.length;
    return {
        'grid-cols-1': length <= 1,
        'grid-cols-2': length > 1,
        'md:grid-cols-3': length > 2,
        'lg:grid-cols-4': length > 3
    };
});

const fetchNews = async () => {
    loading.value = true;
    try {
        const response = await NewsService.index(4, 1, {
            'X-Fields': 'id,title,created_at,image_url,tag'
        });
        newsList.value = response.data.message.data;
    } catch (error) {
        console.error('Ошибка при загрузке новостей:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchNews();
});
</script>

<template>
    <section class="w-full">
        <div class="container-inner">
            <div class="w-full mb-5">
                <h3 class="font-one-lord mb-2" data-aos="fade-left">
                    🗞️{{ $t('welcome.latest-news.title') }}
                </h3>
                <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="500">
                      <span class="font-one-lord text-white text-opacity-70">
                    {{ $t('welcome.latest-news.description') }}
                </span>
                </div>
            </div>
            <div
                class="grid gap-5 w-full"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                :class="gridClasses"
            >
                <section
                    class="rounded-lg overflow-hidden cursor-pointer relative transition-all bottom-0 duration-300 hover:bg-vlada-color-6 hover:bottom-3"
                    v-for="news in newsList" :key="news.id"
                >
                    <div class="overflow-hidden relative aspect-16-8 object-cover">
                        <NuxtImg class="w-full h-full" :src="news.image_url" loading="lazy"/>
                    </div>
                    <div class="px-2 pt-2 pb-4 font-one-lord">
                        <div class="text-white">
                            <h4 class="mb-2">{{ news.title }}</h4>
                            <div class="flex flex-col gap-2">
                                <span>{{ news.tag }}</span>
                                <div class="card-content-other-time-and-type-type">
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
