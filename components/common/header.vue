<script setup lang="ts">
import throttle from 'lodash/throttle';

const headerClass = ref('header-default');

const handleScroll = throttle(() => {
    if (window.scrollY > 200) {
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
    <header class="py-3 fixed w-full z-50 top-0 transition duration-500" :class="headerClass">
        <div class="container-inner flex items-center justify-center">
            <div>
                <ul class="flex gap-4 items-center" data-aos="fade-down" data-aos-delay="100" data-aos-duration="600"
                    data-aos-once="true">
                    <li class="duration-500 text-white">
                        <ui-link-primary size="base" to="/" :placeholder="$t('header.home')"/>
                    </li>
                    <li class="duration-500 text-white">
                        <ui-link-primary size="base" to="/news" :placeholder="$t('header.news')"/>
                    </li>
                    <li class="duration-500 text-white">
                        <ui-link-primary size="base" to="/shop" :placeholder="$t('header.shop')"/>
                    </li>
                    <li class="duration-500 text-white">
                        <ui-link-primary size="base" to="/shop" :placeholder="$t('header.knowledge-base')"/>
                    </li>
                    <li class="duration-500 text-white">
                        <ui-link-primary size="base" to="/account" :placeholder="$t('header.account')"/>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped lang="less">
.header-default {
@apply bg-transparent;
}

.header-scrolled {
@apply bg-vlada-color-1 shadow-xl;

    li {
    @apply text-black;
    }
}
</style>
