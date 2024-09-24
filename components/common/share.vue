<script setup lang="ts">

</script>

<template>
    <section class="fixed-panel">
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
                <li data-aos="fade-right" data-aos-duration="750" data-aos-delay="500">
                    <ui-button-secondary to="/" icon="bi:wifi" :external="true"/>
                </li>
            </ul>
        </div>
    </section>
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
</style>
