<template>
  <nav class="bg-white border-b-2 fixed top-0 left-0 w-full z-50 shadow-md">
    <div class="px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold text-gray-800">
            <img
              src="~assets/images/logo.png"
              width="215"
              height="34.4"
              alt="Logo"
            />
          </a>
        </div>
        <!-- Hamburger Icon for Small Screens -->
        <div class="sm:hidden">
          <button
            @click="menuOpen = !menuOpen"
            class="text-gray-800 focus:outline-none"
          >
            <svg
              v-if="!menuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Navigation Links -->
        <div
          :class="{
            flex: menuOpen,
            hidden: !menuOpen,
          }"
          class="flex-col items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:flex-row sm:space-x-4 sm:static absolute top-16 left-0 w-full bg-white sm:w-auto sm:bg-transparent"
        >
          <a
            href="#about"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'about',
              'text-gray-800': activeSection !== 'about',
            }"
            class="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
          >
            {{ t("about") }}
          </a>
          <a
            href="#portfolio"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'portfolio',
              'text-gray-800': activeSection !== 'portfolio',
            }"
            class="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
          >
            {{ t("portfolio") }}
          </a>
          <a
            href="#why_us"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'why_us',
              'text-gray-800': activeSection !== 'why_us',
            }"
            class="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
          >
            {{ t("why_us") }}
          </a>
          <a
            href="#development_cycle"
            :class="{
              'text-blue-500 font-semibold':
                activeSection === 'development_cycle',
              'text-gray-800': activeSection !== 'development_cycle',
            }"
            class="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
          >
            {{ t("development_cycle") }}
          </a>
          <a
            href="#contacts"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'contacts',
              'text-gray-800': activeSection !== 'contacts',
            }"
            class="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
          >
            {{ t("contacts") }}
          </a>
        </div>
        <!-- Language Switcher and Work Button (optional, visible on all screen sizes) -->
        <div class="hidden sm:flex items-center space-x-4">
          <button
            class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full text-[16px]"
          >
            {{ t("work") }}
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const activeSection = ref<string | null>(null);
const menuOpen = ref(false); // State to control menu visibility on small screens

onMounted(() => {
  const sections = [
    "#about",
    "#portfolio",
    "#why_us",
    "#development_cycle",
    "#contacts",
  ];
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  sections.forEach((selector) => {
    const section = document.querySelector(selector);
    if (section) observer.observe(section);
  });
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
