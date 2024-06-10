// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "tailwindcss"],
  typescript: {
    typeCheck: true
},
  primevue: {
    cssLayerOrder: 'reset,primevue'
},
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
});
