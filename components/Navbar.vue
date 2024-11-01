<template>
  <nav class="bg-white border-b-2">
    <div class="px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold text-gray-800"
            ><img
              src="~assets/images/logo.png"
              width="215"
              height="34.4"
              alt=""
          /></a>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >{{ t("about") }}</a
            >
            <a
              href="#"
              class="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >{{ t("portfolio") }}</a
            >
            <a
              href="#"
              class="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >{{ t("why_us") }}</a
            >
            <a
              href="#"
              class="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >{{ t("development_cycle") }}</a
            >
            <a
              href="#"
              class="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >{{ t("contacts") }}</a
            >
          </div>
        </div>
        <!-- Language Switcher -->
        <div class="flex items-center space-x-4">
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
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
