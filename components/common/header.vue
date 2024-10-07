<script setup lang="ts">
import throttle from 'lodash/throttle';
import {ref, onMounted, onBeforeUnmount} from 'vue';

const headerClass = ref('header-default');

const navLinks = [
    {to: "/", text: 'header.home'},
    {to: "/news", text: 'header.news'},
    {to: "/shop", text: 'header.shop'},
    {to: "/knowledge-base", text: 'header.knowledge-base'},
    {to: "/account", text: 'header.account'}
];

const handleScroll = throttle(() => {
    headerClass.value = window.scrollY > 150 ? 'header-scrolled' : 'header-default';
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
    <header class="header vlada-transition" id="header" :class="headerClass">
        <div class="vlada-container header-inner">
            <ul class="header-inner-list" data-aos="fade-down" data-aos-delay="100" data-aos-duration="600"
                data-aos-once="true">
                <li v-for="link in navLinks" :key="link.text">
                    <lazy-ui-link :to="link.to">{{ $t(link.text) }}</lazy-ui-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.header {
    @apply fixed w-full z-40 top-0 py-3;

    &-inner {
        @apply flex justify-center;

        &-list {
            @apply flex gap-4;
        }
    }
}

.header-scrolled {
    @apply shadow-md;
}

.dark-mode .header-scrolled {
    @apply bg-zinc-800;
}

.light-mode .header-scrolled {
    @apply bg-slate-100;
}
</style>
