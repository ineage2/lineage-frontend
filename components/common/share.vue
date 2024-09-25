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

    <ui-modal-primary ref="languageRef" :max="500" :title="$t('languages.title')">
        <section class="modal">
            <div class="download-modal-container">
                <div @click="setLocale('en')">{{ $t('languages.english') }} / {{ $t('language-codes.english') }}</div>
                <div @click="setLocale('ja')">{{ $t('languages.japanese') }} / {{ $t('language-codes.japanese') }}</div>
                <div @click="setLocale('ru')">{{ $t('languages.russian') }} / {{ $t('language-codes.russian') }}</div>
                <div @click="setLocale('zh')">{{ $t('languages.chinese') }} / {{ $t('language-codes.chinese') }}</div>
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
</style>
