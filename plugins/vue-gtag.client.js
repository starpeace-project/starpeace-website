import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  if (nuxtApp.$config.public.sendAnalytics) {
    nuxtApp.vueApp.use(VueGtag, {
      property: {
        id: 'G-DNGPZ5BF5V',
        params: {
          send_page_view: true
        }
      }
    });
  }
});
