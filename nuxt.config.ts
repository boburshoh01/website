// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Webase - Leading IT Solutions for Web & Mobile Apps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Webase is an innovative IT company specializing in web apps, mobile apps, and other digital solutions tailored to meet modern business needs.' },
        { name: 'keywords', content: 'Webase, IT company, web apps, mobile apps, digital transformation' },
        { name: 'robots', content: 'index, follow' } // Allows search engines to index the site
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://webase.uz' } // Canonical link to avoid duplicate content
      ]
    }
  },
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
          { code: "uz_latn", name: "O'zbek", shortName: "UZ", file: "uz_latn.json" },
          { code: "en", name: "English", shortName: "EN", file: "en.json" },
          { code: "uz_cryl", name: "Ўзбек", shortName: "УЗ", file: "uz_cryl.json" },
          { code: "ru", name: "Русский", shortName: "RU", file: "ru.json" },
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
