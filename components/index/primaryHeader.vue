<script setup lang="ts">
import {ref} from 'vue';
import {useI18n} from 'vue-i18n';
import UiModalPrimary from '@/components/ui/modal.vue';

const modalRef = ref(null);
const {t} = useI18n();

const openModal = () => {
    modalRef.value?.openModal();
};

const downloadOptions = [
    {text: t('welcome.modal.download-modal.google-disk'), link: 'https://www.google.com/drive/'},
    {text: t('welcome.modal.download-modal.mega'), link: 'https://mega.io/?aff=Bp1QjAyT'},
    {text: t('common.name'), link: 'https://mega.io/?aff=Bp1QjAyT'}
];
</script>

<template>
    <section id="primary-header" class="primary-header">
        <div class="primary-header-inner">
            <div class="vlada-transition primary-header-inner-background-image"></div>
            <div class="vlada-transition primary-header-inner-gradient primary-header-inner-gradient-top"></div>
            <div class="vlada-transition primary-header-inner-gradient primary-header-inner-gradient-bottom"></div>

            <div class="primary-header-inner-content">
                <div class="primary-header-inner-content-inner">
                    <div class="primary-header-inner-content-inner-title" data-aos="fade-up" data-aos-delay="100"
                         data-aos-duration="750" data-aos-once="true">
                        <h1 class="vlada-transition">{{ t('welcome.title') }}</h1>
                    </div>
                    <div class="primary-header-inner-content-inner-description" data-aos="fade-up" data-aos-delay="300"
                         data-aos-duration="750" data-aos-once="true">
                        <h4>{{ t('welcome.description') }}</h4>
                    </div>

                    <div class="primary-header-inner-content-inner-buttons" data-aos="fade-up" data-aos-delay="500"
                         data-aos-duration="750" data-aos-once="true">
                        <p class="primary-header-inner-content-inner-buttons-text vlada-transition">
                            {{ t('welcome.start') }}</p>
                        <div class="primary-header-inner-content-inner-buttons-three-buttons" data-aos-delay="600">
                            <ui-button type="primary" @click="openModal" :placeholder="t('welcome.download')"/>
                            <ui-button type="primary" to="/" :placeholder="t('welcome.create-account')"/>
                            <ui-button type="primary" to="/" :placeholder="t('welcome.join-in-community')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <common-spark/>

    <ui-modal ref="modalRef" :max="700" :min="300" :title="t('welcome.modal.download-modal.title')">
        <section class="modal">
            <p>{{ t('welcome.modal.download-modal.description') }}</p>

            <div class="modal-inner">
                <div class="modal-inner-content" v-for="option in downloadOptions" :key="option.link">
                    <div class="modal-inner-content-inner-title">{{ option.text }}</div>
                    <div>
                        <ui-button type="secondary" :to="option.link" :external="true"
                                   :placeholder="t('welcome.download')"/>
                    </div>
                </div>
                <div class="modal-inner-bottom">
                    <p>{{ t('welcome.modal.download-modal.footer-text') }}</p>
                </div>
            </div>
        </section>
    </ui-modal>
</template>

<style scoped>
.primary-header {
    &-inner {
        &-background-image {
            @apply absolute w-full h-dvh bg-fixed bg-cover;
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
            @apply h-dvh px-2;

            &-inner {
                @apply relative flex flex-col w-full h-full items-center justify-center;

                &-title {
                    @apply mb-2;

                    h1 {
                        @apply md:text-6xl text-center font-medium uppercase;
                    }
                }

                &-description {
                    @apply mb-2 max-w-6xl;

                    h4 {
                        @apply text-center;
                    }
                }

                &-buttons {
                    @apply pt-2 max-w-3xl z-10;

                    &-text {
                        @apply font-one-lord text-opacity-90 text-center;
                    }

                    &-three-buttons {
                        @apply flex flex-col md:flex-row mt-5 justify-center gap-7 md:gap-5;
                    }
                }
            }
        }
    }
}

.dark-mode .primary-header-inner {
    &-background-image {
        @apply brightness-50;
        background-image: url('/img/backgrounds/bg-7.webp');
    }

    &-gradient-top {
        @apply bg-vlada-gradient-4;
    }

    &-gradient-bottom {
        @apply bg-vlada-gradient-3;
    }

    &-content-inner {
        &-title h1 {
            @apply text-white;
        }

        &-description h4 {
            @apply text-white;
        }

        &-buttons-text {
            @apply text-white;
        }
    }
}

.light-mode .primary-header-inner {
    &-background-image {
        @apply brightness-125;
        background-image: url('/img/backgrounds/bg-12.webp');
    }

    &-gradient-top {
        @apply bg-vlada-gradient-2;
    }

    &-gradient-bottom {
        @apply bg-vlada-gradient-1;
    }

    &-content-inner {
        &-title h1 {
            @apply text-black;
        }

        &-description h4 {
            @apply text-black;
        }

        &-buttons-text {
            @apply text-black;
        }
    }
}

.modal {
    @apply w-auto;

    &-inner {
        &-content {
            @apply flex justify-between relative z-10 mt-8 bg-vlada-gradient-5;

            &::after {
                @apply absolute -left-1 -top-1 -right-1 -bottom-1 pointer-events-none brightness-125 z-10;
                content: '';
                border: 1rem solid transparent;
                border-image: url(/img/frames/frame_square.png);
                border-image-slice: 40 40 fill;
            }

            &-inner-title {
                @apply px-5 py-4;
            }
        }

        &-bottom {
            @apply mt-8;
        }
    }
}

.dark-mode {
    .modal {
        &-inner {
            &-content {
                &-inner-title {
                    @apply text-white;
                }
            }
        }
    }
}

.light-mode {
    .modal {
        &-inner {
            &-content {
                &-inner-title {
                    @apply text-white;
                }
            }
        }
    }
}
</style>

