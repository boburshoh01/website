<template>
  <div class="flex flex-col justify-center h-full space-y-5">
    <h1 class="text-[60px] leading-tight text-gray-900">
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </h1>
    <p class="text-[24px] text-gray-400">
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </p>
    <div class="flex space-x-4 pt-16">
      <button
        class="px-[32px] py-[17px] bg-black text-white rounded-full text-[16px]"
      >
        {{ t("Оставьте заявку") }}
      </button>
      <button
        class="px-6 bg-transparent border-b border-slate-950 text-black rounded-lg text-[16px]"
      >
        {{ t("Посмотреть наши кейсы") }}
      </button>
    </div>
    <div class="flex space-x-4 pt-16">
      <div class="text-[16px]">
        {{ t("Доверяют крупнейшие мировые бренды") }}
      </div>
      <img src="~assets/images/discord.png" alt="Discord" class="h-8" />
      <img src="~assets/images/amazon.png" alt="Amazon" class="h-8" />
      <img src="~assets/images/facebook.png" alt="Facebook" class="h-8" />
      <img src="~assets/images/appsheet.png" alt="AppSheet" class="h-8" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
