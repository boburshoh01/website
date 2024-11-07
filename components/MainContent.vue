<template>
  <div class="flex flex-col justify-center h-full space-y-5">
    <h1
      class="text-[60px] leading-tight text-gray-900 transform transition-transform duration-700 ease-out opacity-0 animate-slide-left"
    >
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </h1>
    <p
      class="text-[24px] text-gray-400 transform transition-transform duration-700 ease-out opacity-0 animate-slide-left delay-100"
    >
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </p>
    <div class="flex space-x-4 pt-16 opacity-0 animate-fade-in delay-1000">
      <button
        class="px-[32px] py-[17px] bg-black text-white rounded-full text-[16px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700"
      >
        {{ t("Оставьте заявку") }}
      </button>
      <button
        class="px-6 bg-transparent border-b border-slate-950 text-black rounded-lg text-[16px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200"
      >
        {{ t("Посмотреть наши кейсы") }}
      </button>
    </div>
    <div class="flex space-x-4 pt-16 items-center">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
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
