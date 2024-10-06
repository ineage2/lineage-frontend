<script setup lang="ts">
const socialLinks = [
    {to: "https://www.youtube.com/", icon: "bi:discord"},
    {to: "https://www.youtube.com/", icon: "bi:telegram"},
    {to: "https://www.youtube.com/", icon: "bi:youtube"},
    {to: "https://www.youtube.com/", icon: "bi:twitter-x"}
];

// text in locale/en.json
const footerLinks = [
    {to: "/", text: 'footer.contact-us'},
    {to: "/", text: 'footer.our-services'},
    {to: "/", text: 'footer.privacy-policy'},
    {to: "/", text: 'footer.terms-and-conditions'}
];
</script>

<template>
    <footer class="footer" id="footer">
        <div class="container-inner footer-inner">
            <div class="footer-inner-social-buttons">
                <ui-button-secondary
                    v-for="link in socialLinks"
                    :key="link.icon"
                    :to="link.to"
                    :icon="link.icon"
                    :external="true"
                />
            </div>

            <div class="mb-5">
                <ul class="flex gap-5">
                    <li
                        v-for="link in footerLinks"
                        :key="link.text"
                    >
                        <ui-link-primary
                            :to="link.to"
                            size="base"
                            :placeholder="$t(link.text)"
                        />
                    </li>
                </ul>
            </div>

            <div class="flex text-black mb-10">
                {{ $t("footer.copyright") }}
            </div>
        </div>
    </footer>
</template>

<style scoped lang="less">
.footer {
@apply flex;

    &-inner {
    @apply flex flex-col justify-center items-center;
        
        &-social-buttons {
            @apply flex flex-row gap-7 md:gap-10 mb-5;
        }
    }
}
</style>
