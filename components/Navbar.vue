<template>
  <nav class="bg-white border-b-2 fixed top-0 left-0 w-full z-50 mx-auto">
    <div class="mx-[16px] sm:mx-[150px]">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold text-gray-800">
            <img
              src="~assets/images/logo.png"
              alt="Logo"
              class="max-w-full h-auto"
            />
          </a>
        </div>
        <!-- Hamburger Icon for Small Screens -->
        <div class="sm:hidden" v-if="!$isMobile">
          <button @click="menuOpen = !menuOpen" class="text-gray-800">
            <svg
              v-if="!menuOpen"
              class="max-w-full h-auto"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="max-w-full h-auto"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div v-else>
          <a
            href="tel:+998974111454"
            class="flex items-center border rounded-full border-[#3362FF] p-[8px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.20049 14.799C0.302504 7.90022 1.28338 4.74115 2.01055 3.72316C2.10396 3.55862 4.40647 0.11188 6.87459 2.13407C13.0008 7.17945 5.2451 6.46611 10.3894 11.6113C15.5348 16.7554 14.8214 8.99995 19.8659 15.1249C21.8882 17.594 18.4413 19.8964 18.2778 19.9888C17.2598 20.717 14.0995 21.6978 7.20049 14.799Z"
                stroke="#3362FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <!-- Navigation Links -->
        <div
          :class="{
            flex: menuOpen,
            hidden: !menuOpen,
          }"
          class="flex-col items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:flex-row"
        >
          <a
            href="#about"
            :class="{
              'text-[#246FFF] font-semibold': activeSection === 'about',
              'text-gray-800': activeSection !== 'about',
            }"
            class="hover:text-blue-500 px-3 py-2 text-sm font-medium text-[18px]"
          >
            {{ t("about") }}
          </a>
          <a
            href="#portfolio"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'portfolio',
              'text-gray-800': activeSection !== 'portfolio',
            }"
            class="px-3 py-2 hover:text-blue-500 text-sm font-medium text-[18px]"
          >
            {{ t("portfolio") }}
          </a>
          <a
            href="#why_us"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'why_us',
              'text-gray-800': activeSection !== 'why_us',
            }"
            class="px-3 py-2 hover:text-blue-500 text-sm font-medium text-[18px]"
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
            class="px-3 py-2 hover:text-blue-500 text-sm font-medium text-[18px]"
          >
            {{ t("development_cycle") }}
          </a>
          <a
            href="#contacts"
            :class="{
              'text-blue-500 font-semibold': activeSection === 'contacts',
              'text-gray-800': activeSection !== 'contacts',
            }"
            class="px-3 py-2 hover:text-blue-500 text-sm font-medium text-[18px]"
          >
            {{ t("contacts") }}
          </a>
        </div>
        <!-- Language Switcher and Work Button (optional, visible on all screen sizes) -->
        <div class="hidden sm:flex items-center space-x-4">
          <!-- <button
            @click="scrollToSection('#contacts')"
            class="px-4 py-2 text-gray-700 bg-white border border-gray-300 hover:border-[#246FFF] rounded-full text-[16px]"
          >
            {{ t("work") }}
          </button> -->
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
const { $isMobile } = useNuxtApp();

const { t } = useI18n();
const activeSection = ref<string | null>(null);
const menuOpen = ref(false); // State to control menu visibility on small screens

function scrollToSection(sectionId: any) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

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
