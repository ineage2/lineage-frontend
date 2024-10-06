<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
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
const loading = ref(false);

const route = useRoute();

const fetchCurrentNews = async (newsId: number) => {
    loading.value = true;
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
        <common-loading v-if="loading" />
        <transition name="fade">
            <div v-if="!loading">
                <section v-for="news in newsList" :key="news.id" class="h-auto">
                    <div class="w-dvw aspect-16-7 bg-fixed bg-no-repeat bg-cover bg-center" :style="{ backgroundImage: `url(${news.image_large_url})` }">
                    </div>
                    <section class="max-w-7xl mx-auto md:top-[-200px] relative bg-slate-100 py-7 px-5 rounded-xl">
                        <h1 class="my-5 text-center">{{ news.title }}</h1>
                        <h4 class="text-center text-black mb-10">{{ news.description }}</h4>
                        <div v-html="news.content"></div>
                    </section>
                </section>
            </div>
        </transition>
    </div>
</template>

<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
