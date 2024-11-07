<template>
  <div class="">
    <div class="flex flex-row">
      <div class="mr-5 relative">
        <img
          class="w-[750px] animate-slide-right"
          src="~assets/images/triangleimg.png"
          alt=""
        />
      </div>
      <div class="bg-gray-100 p-6 rounded-2xl shadow-md animate-slide-right">
        <div class="text-6xl font-bold">230+</div>
        <p class="text-lg">
          {{
            t(
              "Крупные компании, с которыми мы работаем и которые нам очень доверяют"
            )
          }}
        </p>
        <div class="mt-4">
          <!-- Simple bar chart representation -->
          <div class="bg-gray-300 w-full h-2 rounded-lg relative">
            <div class="bg-black h-full w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-r from-black to-blue-950 text-white rounded-3xl p-12 mt-[24px]"
    >
      <p class="text-md font-semibold">
        ----- {{ t("Увеличивайте трафик и продажи") }}
      </p>
      <div class="flex">
        <p class="text-[36px] font-semibold mt-8">
          {{ t("Увеличивайте трафик и продажи продукции") }}
        </p>
        <img
          src="~assets/images/statsimg.png"
          alt=""
          class="animate-slide-right"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style>
@keyframes slide-right {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-right {
  animation: slide-right 1s ease-out forwards;
}
</style>
