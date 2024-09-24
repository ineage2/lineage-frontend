<script setup lang="ts">
import throttle from 'lodash/throttle';

const headerClass = ref('header-default');

const handleScroll = throttle(() => {
    if (window.scrollY > 30) {
        headerClass.value = 'header-scrolled';
    } else {
        headerClass.value = 'header-default';
    }
}, 200);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header class="header" :class="headerClass">
        <div class="container-inner">
            <div class="header-container">
                <ul class="header-container-list" data-aos="fade-down" data-aos-delay="100" data-aos-duration="600"
                    data-aos-once="true">
                    <li>
                        <ui-link-primary size="base" to="/" :placeholder="$t('header.home')"/>
                    </li>
                    <li>
                        <ui-link-primary size="base" to="/account" :placeholder="$t('header.account')"/>
                    </li>
                    <li>
                        <ui-link-primary size="base" to="/download" :placeholder="$t('header.download')"/>
                    </li>
                    <li>
                        <ui-link-primary size="base" to="/news" :placeholder="$t('header.news')"/>
                    </li>
                    <li>
                        <ui-link-primary size="base" to="/shop" :placeholder="$t('header.shop')"/>
                    </li>
                    <li>
                        <ui-link-primary size="base" to="/shop" :placeholder="$t('header.knowledge-base')"/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped lang="less">
.header {
@apply py-3 fixed w-full z-50 top-0 transition duration-500;

    &-container {
    @apply flex items-center justify-center;
        
        &-list {
            @apply flex gap-4 items-center;
        }
    }
}

.header-default {
@apply bg-transparent;
}

.header-scrolled {
@apply bg-vlada-color-1 shadow-lg;
}
</style>
