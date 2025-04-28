export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "./assets/css/main.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
    '~/assets/style/animation/animate.css',
  ],
  modules: ["nuxt-snackbar", "nuxt-swiper"],
  app: {
    head: {
      script: [{ src: "/wow.js", defer: true }],
    },
  },
});
