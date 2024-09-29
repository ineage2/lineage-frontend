<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="container-inner footer">
            <div class="footer-social-links">
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:discord" :external="true"/>
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:telegram" :external="true"/>
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:youtube" :external="true"/>
                <ui-button-secondary to="https://www.youtube.com/" icon="bi:twitter-x" :external="true"/>
            </div>

            <div class="footer-files-links">
                <ul>
                    <li>
                        <ui-link-primary to="/" size="base" :placeholder="$t('footer.contact-us')"/>
                    </li>
                    <li>
                        <ui-link-primary to="/" size="base" :placeholder="$t('footer.our-services')"/>
                    </li>
                    <li>
                        <ui-link-primary to="/" size="base" :placeholder="$t('footer.privacy-policy')"/>
                    </li>
                    <li>
                        <ui-link-primary to="/" size="base" :placeholder="$t('footer.terms-and-conditions')"/>
                    </li>
                </ul>
            </div>

            <div class="footer-copyright">
                {{ $t("footer.copyright") }}
            </div>
        </div>
    </footer>
</template>

<style scoped lang="less">

.footer {
@apply bg-vlada-color-1;

    &-social-links {
    @apply flex justify-center items-center gap-7 mb-10;
    }

    &-files-links {
        ul {
        @apply flex justify-center items-center gap-7 mb-3;
        }
    }

    &-copyright {
    @apply text-white text-center mb-10 opacity-70 font-one-lord;
    }
}
</style>
