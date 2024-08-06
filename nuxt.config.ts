// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  primevue: {
    cssLayerOrder: 'reset,primevue'
},
  compatibilityDate: '2024-08-06',
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
});
