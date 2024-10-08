// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,
  },
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
      },
      tailwindcss: {},
    },
  },
  modules: ["@pinia/nuxt"],
});
