<script setup lang="ts">
const socialLinks = [
    {to: "https://www.youtube.com/", icon: "bi:discord"},
    {to: "https://www.youtube.com/", icon: "bi:telegram"},
    {to: "https://www.youtube.com/", icon: "bi:youtube"},
    {to: "https://www.youtube.com/", icon: "bi:twitter-x"}
];

const footerLinks = [
    {to: "/support/contact-us", text: 'footer.contact-us'},
    {to: "/support/privacy-policy", text: 'footer.privacy-policy'},
    {to: "/support/terms", text: 'footer.terms-and-conditions'}
];
</script>

<template>
    <footer class="footer" id="footer">
        <div class="vlada-container footer-inner">
            <div class="footer-inner-social-buttons">
                <lazy-ui-button-secondary
                    v-for="link in socialLinks"
                    :key="link.icon"
                    :to="link.to"
                    :icon="link.icon"
                    :external="true"
                />
            </div>
            <ul class="footer-inner-links">
                <li
                    v-for="link in footerLinks"
                    :key="link.text"
                >
                    <lazy-ui-link
                        :to="link.to"
                        size="base"
                    > {{ $t(link.text) }}
                    </lazy-ui-link>
                </li>
            </ul>
            <div class="footer-inner-copyright">
                <p>{{ $t("footer.copyright") }}</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    @apply flex;

    &-inner {
        @apply flex flex-col justify-center items-center;

        &-social-buttons {
            @apply flex flex-row gap-7 md:gap-10 mb-5;
        }

        &-copyright {
            @apply mt-2 mb-3;
        }

        &-links {
            @apply flex flex-col justify-center items-center md:flex-row
        }
    }
}
</style>
