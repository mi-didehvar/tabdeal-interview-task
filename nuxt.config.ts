// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image'
  ],
  css: ['~/styles/tailwind.css'],
  image: {
    domains: [
      "http://i.annihil.us"
    ],
  }
})