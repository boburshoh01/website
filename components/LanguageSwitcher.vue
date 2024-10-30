<template>
  <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      class="inline-flex justify-center w-full rounded-full bg-black text-white shadow-sm px-4 py-2 text-sm font-medium text-[16px]nvm"
    >
      {{ currentLocaleName }}

      <svg
        class="-mr-1 ml-2 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <a
          v-for="locale in availableLocales"
          :key="locale.code"
          @click.prevent.stop="setLocaleAndClose(locale.code)"
          class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
        >
          {{ locale.name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale, locales, setLocale } = useI18n();
const isOpen = ref(false);

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const currentLocaleName = computed(() => {
  const current = locales.value.find((i) => i.code === locale.value);
  return current ? current.name : "";
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const setLocaleAndClose = (localeCode: string) => {
  setLocale(localeCode);
  isOpen.value = false;
};
</script>
