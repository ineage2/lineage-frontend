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
            'X-Fields': 'id,title,created_at,image_small_url,tags,tags.id,tags.title'
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
        <div class="vlada-container">
            <div class="w-full mb-5">
                <h2 class="font-one-lord mb-2 uppercase" data-aos="fade-left" data-aos-duration="700">
                    🗞️{{ $t('welcome.latest-news.title') }}
                </h2>
                <!--<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">-->
                <!--<span class="font-arpona-regular text-opacity-70">-->
                <!--{{ $t('welcome.latest-news.description') }}-->
                <!--</span>-->
                <!--</div>-->
            </div>
            <section
                class="grid gap-5 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
            >
                <Nuxt-link :to="localeRoute(`/news/${news.id}`)"
                           class="bg-vlada-color-1 bg-opacity-10 cursor-pointer rounded-t-md relative transition-all bottom-0  hover:bg-opacity-50 hover:bottom-3 hover:shadow-xl group"
                           v-for="news in newsList" :key="news.id">
                    <div class="overflow-hidden relative rounded-t-md">
                        <Nuxt-img class="w-full aspect-video object-cover" :src="news.image_small_url" loading="lazy"/>
                    </div>
                    <div class="px-2 pt-2 pb-4 font-one-lord">
                        <div class="text-white">
                            <h4 class="mb-2 group-hover:text-black transition-colors">{{ news.title }}</h4>
                            <div class="flex flex-col gap-4">
                                <div class="text-black text-opacity-70 text-sm group-hover:text-opacity-100">
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
                                <div class="flex gap-2">
                                    <span v-for="tag in news.tags" :key="tag.id"
                                          class="bg-black bg-opacity-10 text-sm font-arpona-regular text-slate-900 text-opacity-50 px-5 py-1 rounded group-hover:text-black transition-colors"> {{
                                            tag.title
                                        }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nuxt-link>
            </section>
        </div>
    </section>
</template>
