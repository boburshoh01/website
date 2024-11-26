<template>
  <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      class="inline-flex justify-between items-center gap-1 w-full rounded-full bg-black text-white border border-black hover:border-[#246FFF] shadow-sm px-4 py-2 text-sm font-medium text-[16px]nvm"
    >
      {{ currentLocaleName }}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M12.6667 5.66675L8 10.3334L3.33333 5.66675"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="square"
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
  return current ? current.shortName : "";
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const setLocaleAndClose = (localeCode: string) => {
  setLocale(localeCode);
  isOpen.value = false;
};
</script>
