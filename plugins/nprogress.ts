import {defineNuxtPlugin} from '#app';
// @ts-ignore
import NProgress from 'nprogress';
import '~/assets/css/nprogress.less';

NProgress.configure({showSpinner: false});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:start', () => {
        NProgress.start();
    });

    nuxtApp.hook('page:finish', () => {
        NProgress.done();
    });
});
