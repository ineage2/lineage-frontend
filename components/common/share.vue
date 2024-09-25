<script setup lang="ts">
import {ref} from 'vue';
import UiModalPrimary from '@/components/ui/modal/primary.vue';

const {setLocale} = useI18n();
const languageRef = ref(null);

const openModal = () => {
    languageRef.value.openModal();
};
</script>

<template>
    <section class="fixed-panel left">
        <div class="fixed-panel-container">
            <ul class="fixed-panel-container-list">
                <li data-aos="fade-right" data-aos-duration="750" data-aos-delay="200">
                    <ui-button-secondary to="https://discord.com/invite/gzV4eCN" :external="true" icon="bi:discord"/>
                </li>
                <li data-aos="fade-right" data-aos-duration="750" data-aos-delay="300">
                    <ui-button-secondary to="/" icon="bi:telegram" :external="true"/>
                </li>
                <li data-aos="fade-right" data-aos-duration="750" data-aos-delay="400">
                    <ui-button-secondary to="/" icon="bi:youtube" :external="true"/>
                </li>
            </ul>
        </div>
    </section>

    <section class="fixed-panel right">
        <div class="fixed-panel-container">
            <ul class="fixed-panel-container-list">
                <li data-aos="fade-left" data-aos-duration="750" data-aos-delay="200">
                    <ui-button-secondary @click="openModal" icon="bi:globe-americas"/>
                </li>
                <li data-aos="fade-left" data-aos-duration="750" data-aos-delay="300">
                    <!--  need add logic )) -->
                    <ui-button-secondary icon="bi:moon-fill" :external="true"/>
                </li>
            </ul>
        </div>
    </section>

    <ui-modal-primary ref="languageRef" :max="400" :title="$t('languages.title')">
        <section class="modal">
            <div class="download-modal-container">
                <button @click="setLocale('en')">
                    <nuxt-img class="download-modal-container-button-image"
                              src="/img/flags/united-kingdom-flag-icon.png"/>
                    {{ $t('languages.english') }} / {{ $t('language-codes.english') }}
                </button>
                <button @click="setLocale('ja')">
                    <nuxt-img class="download-modal-container-button-image" src="/img/flags/japan-flag-icon.png"/>
                    {{ $t('languages.japanese') }} / {{ $t('language-codes.japanese') }}
                </button>
                <button @click="setLocale('ru')">
                    <nuxt-img class="download-modal-container-button-image" src="/img/flags/russia-flag-icon.png"/>
                    {{ $t('languages.russian') }} / {{ $t('language-codes.russian') }}
                </button>
                <button @click="setLocale('zh')">
                    <nuxt-img class="download-modal-container-button-image" src="/img/flags/china-flag-icon.png"/>
                    {{ $t('languages.chinese') }} / {{ $t('language-codes.chinese') }}
                </button>
            </div>
        </section>
    </ui-modal-primary>
</template>

<style scoped lang="less">
.fixed-panel {
@apply fixed top-0 z-20 h-dvh;

    &-container {
    @apply px-5 py-4 h-full flex gap-4;

        &-list {
        @apply flex flex-col gap-7 items-center justify-center;
        }
    }
}

.left {
@apply left-0;
}

.right {
@apply right-0;
}

.download-modal-container {
@apply w-full flex flex-col;

    button {
    @apply w-full flex gap-3 mb-2 font-arpona-regular bg-vlada-color-3 px-2 py-1 rounded;
        
        .download-modal-container-button-image {
        @apply w-6 h-6;
        }
    }
}
</style>
