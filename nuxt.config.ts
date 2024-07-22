// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],

  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET,
  },

  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },

  typescript: {
    shim: false
  },

  compatibilityDate: '2024-07-22'
})