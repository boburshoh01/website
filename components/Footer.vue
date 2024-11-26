<!-- components/Footer.vue -->
<template>
  <footer class="bg-black text-white py-10 px-4 md:px-20 rounded-[24px]">
    <!-- Top Section -->
    <div
      class="flex flex-col md:flex-row sm:justify-between items-start md:items-center mb-10"
    >
      <!-- Social Media Links -->
      <div class="flex justify-center sm:justify-normal flex-wrap gap-4">
        <p class="mb-2 text-center text-[#ABADB3] sm:text-gray-100 text-[20px]">
          {{ t("Наши социальные сети:") }}
        </p>
        <div class="grid grid-cols-3 gap-4">
          <a href="#" class="hover:underline text-[16px] sm:text-[24px]">{{
            t("Instagram")
          }}</a>
          <a href="#" class="hover:underline text-[16px] sm:text-[24px]">{{
            t("Facebook")
          }}</a>
          <a href="#" class="hover:underline text-[16px] sm:text-[24px]">{{
            t("Tiktok")
          }}</a>
          <a href="#" class="hover:underline text-[16px] sm:text-[24px]">{{
            t("LinkedIn")
          }}</a>
          <a href="#" class="hover:underline text-[16px] sm:text-[24px]">{{
            t("YouTube")
          }}</a>
          <a href="#" class="hover:underline text-[16px] sm:text-[24px]">{{
            t("Behance")
          }}</a>
        </div>
      </div>

      <!-- Address Information -->
      <div
        class="mt-6 md:mt-0 flex flex-col sm:flex-row items-center sm:justify-normal"
      >
        <p class="sm:mr-8 text-[#ABADB3] sm:text-gray-100 text-[20px]">
          {{ t("Наш адрес:") }}
        </p>
        <p class="text-center">
          {{ t("Массив Караташ, д. 106Шайхонтохурский р.") }}
        </p>
      </div>
    </div>

    <!-- Middle Section (Hand Video and Main Message) -->
    <div class="flex justify-center mb-6" v-if="!$isMobile">
      <!-- Video instead of image -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="h-96 object-contain opacity-70"
      >
        <source src="~assets/videos/hand.mp4" type="video/mp4" />
        {{ t("Your browser does not support the video tag.") }}
      </video>
    </div>

    <!-- Main Message -->
    <div class="text-center mb-6" v-if="!$isMobile">
      <p class="text-lg font-semibold">
        {{ t("ДАВАЙТЕ РАЗРАБОТАЕМ ПЛАН И ДОБЬЕМСЯ РЕАЛЬНЫХ РЕЗУЛЬТАТОВ.") }}
        <br />
        {{ t("ДАВАЙТЕ СДЕЛАЕМ ЭТО ПО-КРУПНОМУ") }}
      </p>
    </div>

    <!-- Bottom Section -->
    <div
      v-if="!$isMobile"
      class="flex flex-col md:flex-row justify-between items-center text-[12px] sm:text-[20px] border-t border-gray-700 pt-4"
    >
      <p class="text-[#ABADB3] text-[12px] sm:text-[20px]">© 2024, Webase</p>
      <a href="#" class="hover:underline text-[12px] sm:text-[20px]">{{
        t("Вернуться к началу")
      }}</a>
      <p class="text-[#ABADB3] text-[12px] sm:text-[20px]">
        {{ t("Все права защищены") }}
      </p>
    </div>
    <div
      v-else
      class="flex flex-col md:flex-row justify-between items-center text-[20px] border-t border-gray-700 pt-4"
    >
      <div class="flex justify-between gap-20 mb-4">
        <p class="text-[#ABADB3] text-[12px] sm:text-[20px]">© 2024, Webase</p>
        <a href="#" class="hover:underline text-[12px] sm:text-[20px]">{{
          t("Вернуться к началу")
        }}</a>
      </div>
      <p class="text-[#ABADB3] text-[12px] sm:text-[20px]">
        {{ t("Все права защищены") }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { $isMobile } = useNuxtApp();
</script>
