<script setup lang="ts">
import {ref} from 'vue';
import UiModalPrimary from '@/components/ui/modal/primary.vue';

const modalRef = ref(null);

const openModal = () => {
    modalRef.value.openModal();
};
</script>

<template>
    <section class="w-dvw h-dvh relative">
        <div class="relative w-full h-full">
            <!--<nuxt-img src="/img/spark/spark-bg.png" class="w-dvw h-dvh absolute z-10 object-cover pointer-events-none"/>-->
            <nuxt-img src="/img/backgrounds/bg-1.jpg" class="w-dvw h-dvh absolute object-cover pointer-events-none"
                      data-aos="fade-in" data-aos-once="true"/>

            <div class="w-dvw h-60 absolute bottom-0 z-10"
                 style="background: linear-gradient(0deg, rgba(7,6,6,1) 10%, rgba(255,0,0,0) 100%);" data-aos="fade-in"
                 data-aos-delay="100">
            </div>

            <!--<div class="pt-32 overflow-hidden w-dvw h-dvh relative hidden xl:block">-->
            <!--<div class="relative flex flex-row w-full h-full">-->
            <!--<nuxt-img src="/img/characters/character-1.png"-->
            <!--class="absolute h-full pointer-events-none right-[-200px] top-32 " style="scale: 1.3"-->
            <!--data-aos="fade-left" data-aos-duration="1000"/>-->
            <!--<nuxt-img src="/img/characters/character-3.png"-->
            <!--class="absolute h-full pointer-events-none left-[-200px] top-28" style="scale: 1.4"-->
            <!--data-aos="fade-right" data-aos-duration="1000"/>-->
            <!--</div>-->
            <!--</div>-->

            <div class="overflow-hidden w-dvw h-dvh relative block container max-w-4xl mx-auto px-2">
                <div class="relative flex flex-col w-full h-full items-center justify-center">
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" data-aos-once="true">
                        <nuxt-img src="/img/logos/logo.png" class="w-[300px] lg:w-[500px]"/>
                    </div>
                    <div class="pt-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="750"
                         data-aos-once="true">
                        <h1 class="font-one-lord text-center">{{ $t('welcome.title') }}</h1>
                    </div>
                    <div class="pt-5 max-w-xl" data-aos="fade-up" data-aos-delay="400" data-aos-duration="750"
                         data-aos-once="true">
                        <h4 class="font-one-lord text-center">{{ $t('welcome.description') }}</h4>
                    </div>
                    <div class="pt-2 max-w-3xl z-10">
                        <p class="font-arpona-regular text-opacity-70 text-white text-center" data-aos="fade-up"
                           data-aos-delay="500" data-aos-duration="750" data-aos-once="true">{{
                                $t('welcome.start')
                            }}</p>
                        <div class="flex flex-row mt-5 justify-center gap-4" data-aos="fade-up" data-aos-delay="600"
                             data-aos-duration="750" data-aos-once="true">
                            <ui-button-primary @click="openModal" :placeholder="$t('welcome.download')"/>
                            <ui-button-primary to="/download" :placeholder="$t('welcome.create-account')"/>
                            <ui-button-primary to="/download" :placeholder="$t('welcome.join-in-community')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <common-spark/>
    <ui-modal-primary ref="modalRef" :max="700" :min="300" :title="$t('welcome.modal.download-modal.title')">
        <section class="modal">
            <span>
                {{ $t('welcome.modal.download-modal.description') }}
            </span>
            <span></span>
            <div class="download-modal-container">
                <div class="download-modal-container-download-type-card">
                    <div class="download-modal-container-download-type-card-type">
                        download with {{ $t('welcome.modal.download-modal.google-disk') }}
                    </div>
                    <div>
                        <ui-button-quaternary to="https://www.google.com/drive/" :external="true"
                                              :placeholder="$t('welcome.download')"/>
                    </div>
                </div>
                <div class="download-modal-container-download-type-or">
                    <p>{{ $t('common.or') }}</p>
                </div>
                <div class="download-modal-container-download-type-card">
                    <div class="download-modal-container-download-type-card-type">
                        download with {{ $t('welcome.modal.download-modal.mega') }}
                    </div>
                    <div>
                        <ui-button-quaternary to="https://mega.io/?aff=Bp1QjAyT" :external="true"
                                              :placeholder="$t('welcome.download')"/>
                    </div>
                </div>
                <div class="download-modal-container-download-type-or">
                    <p>{{ $t('common.or') }}</p>
                </div>
                <div class="download-modal-container-download-type-card">
                    <div class="download-modal-container-download-type-card-type">
                        download with {{ $t('common.name') }}
                    </div>
                    <div>
                        <ui-button-quaternary to="https://mega.io/?aff=Bp1QjAyT" :external="true"
                                              :placeholder="$t('welcome.download')"/>
                    </div>
                </div>
                <div class="download-modal-container-download-type-or">
                    <p>{{ $t('welcome.modal.download-modal.footer-text') }}</p>
                </div>
            </div>
        </section>
    </ui-modal-primary>
</template>

<style scoped lang="less">
.modal {
@apply w-auto;

    h3 {
    @apply font-one-lord;
    }

    span {
    @apply font-arpona-regular;
    }
}

.download-modal-container {
@apply flex flex-col mt-5;

    &-download-type-or {
    @apply font-arpona-regular text-center my-2;
    }

    &-download-type-card {
    @apply flex justify-between relative z-10;
        border-radius: 0.3rem;
        background: linear-gradient(120deg, rgb(42, 34, 22), rgb(111, 81, 35));

        &:after {
            content: "";
            position: absolute;
            border: 1rem solid transparent;
            border-image: url(/img/frames/frame_square.png);
            border-image-slice: 40 40 fill;
            left: -0.2rem;
            right: -0.2rem;
            bottom: -0.2rem;
            top: -0.2rem;
            pointer-events: none;
            transition: 0.3s;
            filter: brightness(130%);
            z-index: 3;
        }

        &-type {
        @apply px-5 py-4 text-white font-arpona-regular;
        }
    }
}
</style>
