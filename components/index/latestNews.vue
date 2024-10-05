<script setup lang="ts">
import {onMounted, ref, computed} from 'vue';
import NewsService from '~/utils/api/services/newsService';

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
            'X-Fields': 'id,title,created_at,image_url,tags,tags.id,tags.title'
        });
        newsList.value = response.data.message.data;
    } catch (error) {
        console.error(error);
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
                <h3 class="font-one-lord mb-2" data-aos="fade-left" data-aos-duration="700">
                    🗞️{{ $t('welcome.latest-news.title') }}
                </h3>
                <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="700">
                      <span class="font-one-lord text-opacity-70">
                    {{ $t('welcome.latest-news.description') }}
                </span>
                </div>
            </div>
            <div
                class="grid gap-5 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
            >
                <section
                    class="bg-gray-100 rounded-lg overflow-hidden cursor-pointer relative transition-all bottom-0 duration-300 hover:bg-black hover:bg-opacity-10 hover:bottom-3"
                    v-for="news in newsList" :key="news.id">
                    <div class="overflow-hidden relative aspect-16-8 object-cover">
                        <NuxtImg class="w-full h-full" :src="news.image_url" loading="lazy"/>
                    </div>
                    <div class="px-2 pt-2 pb-4 font-one-lord">
                        <div class="text-white">
                            <h4 class="mb-2">{{ news.title }}</h4>
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <span v-for="tag in news.tags" :key="tag.id"
                                          class="bg-black bg-opacity-10 text-sm font-arpona-regular text-black px-5 py-1 rounded"> {{
                                            tag.title
                                        }}</span>
                                </div>
                                <div class="text-black">
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
