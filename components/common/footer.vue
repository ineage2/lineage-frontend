<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="container-inner bg-white flex flex-col items-center">
            <div class="flex flex-row gap-5  mb-5">
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:discord" :external="true"/>
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:telegram" :external="true"/>
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:youtube" :external="true"/>
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:twitter-x" :external="true"/>
            </div>

            <div class="mb-5">
                <ul class="flex gap-5">
                    <li>
                        <ui-link-primary to="/contact-us" size="base" :placeholder="$t('footer.contact-us')"/>
                    </li>
                    <li>
                        <ui-link-primary to="/our-services" size="base" :placeholder="$t('footer.our-services')"/>
                    </li>
                    <li>
                        <ui-link-primary to="/privacy-policy" size="base" :placeholder="$t('footer.privacy-policy')"/>
                    </li>
                    <li>
                        <ui-link-primary to="/terms-and-conditions" size="base"
                                         :placeholder="$t('footer.terms-and-conditions')"/>
                    </li>
                </ul>
            </div>

            <div class="flex text-black mb-10">
                {{ $t("footer.copyright") }}
            </div>
        </div>
    </footer>
</template>
