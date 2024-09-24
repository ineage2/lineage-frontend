<script setup lang="ts">

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

            <!--            <div class="pt-32 overflow-hidden w-dvw h-dvh relative hidden xl:block">-->
            <!--            <div class="relative flex flex-row w-full h-full">-->
            <!--            <nuxt-img src="/img/characters/character-1.png"-->
            <!--            class="absolute h-full pointer-events-none right-[-200px] top-32 " style="scale: 1.3"-->
            <!--            data-aos="fade-left" data-aos-duration="1000"/>-->
            <!--            <nuxt-img src="/img/characters/character-3.png"-->
            <!--            class="absolute h-full pointer-events-none left-[-200px] top-28" style="scale: 1.4"-->
            <!--             data-aos="fade-right" data-aos-duration="1000"/>-->
            <!--            </div>-->
            <!--            </div>-->

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
                            <ui-button-primary to="/download" :placeholder="$t('welcome.download')"/>
                            <ui-button-primary to="/download" :placeholder="$t('welcome.create-account')"/>
                            <ui-button-primary to="/download" :placeholder="$t('welcome.join-in-community')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <common-spark/>
    <ui-modal-primary>
        <section><p>modal content here</p></section>
    </ui-modal-primary>
</template>
