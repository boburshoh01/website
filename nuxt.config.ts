// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        langDir: "locales",
        defaultLocale: "uz_latn",
        locales: [
          { code: "en", name: "English", file: "en.json" },
          { code: "uz_latn", name: "O'zbek", file: "uz_latn.json" },
          { code: "uz_cryl", name: "Ўзбек", file: "uz_cryl.json" },
          { code: "ru", name: "Русский", file: "ru.json" },
        ],

      },
    ],
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "https://api.example.com",
    },
  },

  typescript: {
    typeCheck: true,
  },

  $production: {
    runtimeConfig: {
      public: {
        apiBase: "https://api.prod.com", // Production-specific configuration
      },
    },
    routeRules: {
      "/**": { isr: true }, // Productionda barcha yo'llar uchun ISR yoqiladi
    },
  },

  $development: {
    runtimeConfig: {
      public: {
        apiBase: "https://api.dev.com", // Development-specific configuration
      },
    },
  },
});
