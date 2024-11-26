<template>
  <div class="flex flex-col justify-center h-full space-y-5">
    <h1
      class="text-4xl sm:text-[60px] leading-snug sm:leading-tight font-medium"
    >
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </h1>
    <p class="text-base sm:text-[24px] text-gray-400 mt-4">
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </p>
    <div class="flex space-x-4 pt-16 opacity-0 animate-fade-in delay-1000">
      <button
        @click="scrollToSection('#contacts')"
        class="flex px-[32px] py-[17px] bg-black text-white rounded-full text-[16px] transition duration-300 ease-in-out hover:bg-[#246FFF]"
      >
        {{ t("Оставьте заявку") }}
        <svg
          class=""
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.999 12L3.99926 12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
          />
          <path
            d="M14.3394 17.66C14.3394 14.7503 16.9019 12 19.9994 12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
          />
          <path
            d="M14.3394 6.33995C14.3394 9.2497 16.9019 12 19.9994 12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
          />
        </svg>
      </button>
      <button
        @click="scrollToSection('#portfolio')"
        class="px-6 py-0 bg-transparent border-b border-slate-950 text-black hover:border-[#246FFF] text-[16px] transition duration-300 ease-in-out"
      >
        {{ t("Посмотреть наши кейсы") }}
      </button>
    </div>
    <!-- <div class="flex space-x-4 pt-16 items-center">
      <div
        class="text-[16px] transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-200"
      >
        {{ t("Доверяют крупнейшие мировые бренды") }}
      </div>
      <img
        src="~assets/images/discord.png"
        alt="Discord"
        class="h-8 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-300"
      />
      <img
        src="~assets/images/amazon.png"
        alt="Amazon"
        class="h-8 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-400"
      />
      <img
        src="~assets/images/facebook.png"
        alt="Facebook"
        class="h-8 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-500"
      />
      <img
        src="~assets/images/appsheet.png"
        alt="AppSheet"
        class="h-8 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-600"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
function scrollToSection(sectionId: any) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style>
@keyframes slide-left {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-left {
  animation: slide-left 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
