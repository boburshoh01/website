<template>
  <div>
    <!-- Header Section -->
    <div class="mb-8 sm:flex sm:gap-6 animate-slide-right opacity-0">
      <h2 class="text-[24px] sm:text-[48px] font-medium">
        {{ t("Обеспечьте лучший сервис, используя нестандартные идеи") }}
      </h2>
      <p class="text-[14px] mt-4 text-gray-400 max-w-[693px]">
        {{
          t(
            "Webase действительно является крупной IT-компанией. Она активно работает в сфере информационных технологий и предоставляет различные услуги и решения для бизнеса. В последние годы компания значительно расширила свои масштабы и укрепила свои позиции на рынке, что подтверждается её включением в различные рейтинги IT-компаний."
          )
        }}
      </p>
    </div>

    <!-- Main Content Section with Custom Column Layout -->
    <div class="grid grid-cols-12 sm:gap-[61px]">
      <!-- Left Card (Projects Completed) -->
      <div
        class="bg-gray-900 text-white rounded-[24px] sm:p-[48px] px-[24px] py-[40px] col-span-12 md:col-span-4 relative animate-slide-left opacity-0 delay-500"
      >
        <div class="absolute top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="133"
            height="48"
            viewBox="0 0 133 48"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M5.3389 -4.56355C0.734353 -1.51297 -0.550982 4.71632 2.79905 9.1078C17.5727 28.4742 36.8589 44.0114 59.0398 54.3278C84.2509 66.0534 112.219 70.5772 139.849 67.3987C167.48 64.2202 193.696 53.4633 215.598 36.3182C234.867 21.2339 250.135 1.72213 260.142 -20.4944C262.411 -25.5322 259.746 -31.3103 254.568 -33.2372L218.396 -46.6966C213.222 -48.6218 207.515 -45.9583 205.038 -41.0247C198.948 -28.8946 190.232 -18.2192 179.478 -9.80024C166.091 0.679463 150.067 7.25441 133.178 9.19721C116.289 11.14 99.1941 8.3749 83.7843 1.20783C71.4072 -4.54876 60.5047 -12.9649 51.8292 -23.3935C48.2975 -27.6389 42.1327 -28.9399 37.5291 -25.8899L5.3389 -4.56355Z"
              fill="url(#paint0_linear_1_18224)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_18224"
                x1="101"
                y1="76"
                x2="165.553"
                y2="-12.9615"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010205" />
                <stop offset="1" stop-color="#8DA7F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- Bottom SVG -->
        <div class="absolute bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="95"
            height="148"
            viewBox="0 0 95 148"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M5.6946 8.92075C6.33745 3.43987 11.3061 -0.513398 16.7425 0.434662C45.038 5.36916 71.7254 17.1962 94.3915 34.9253C119.681 54.7062 138.978 81.0631 150.148 111.08C161.319 141.097 163.928 173.604 157.685 205.005C152.09 233.152 139.578 259.427 121.334 281.513C117.829 285.756 111.504 285.992 107.45 282.269L72.3666 250.052C68.2847 246.304 68.0722 239.976 71.4395 235.575C81.2548 222.745 88.0289 207.819 91.1905 191.915C95.0059 172.722 93.4115 152.853 86.5837 134.505C79.7558 116.158 67.9607 100.047 52.5032 87.9568C39.6774 77.9246 24.745 70.9842 8.87627 67.616C3.46948 66.4684 -0.477661 61.5446 0.166229 56.0549L5.6946 8.92075Z"
              fill="url(#paint0_linear_1_18223)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_18223"
                x1="-0.416893"
                y1="18.6752"
                x2="142.274"
                y2="198.99"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010205" />
                <stop offset="1" stop-color="#8DA7F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div>
          <div class="text-[40px] sm:text-[90px] font-bold leading-none">
            20<span class="text-blue-500">+</span>
          </div>

          <p class="mt-[15px] text-[14px] sm:text-[20px] text-gray-400">
            {{ t("Проект завершен великолепно") }}
          </p>
        </div>

        <!-- Avatars Section -->
        <div class="flex items-center mt-[20px] sm:mt-[50px]">
          <div class="flex -space-x-1">
            <img
              class="w-[40px] h-[40px] sm:w-full sm:h-auto rounded-full border-2 border-gray-900"
              src="~assets/images/avatar1.png"
              alt="Avatar 1"
            />
            <img
              class="w-[40px] h-[40px] sm:w-full sm:h-auto rounded-full border-2 border-gray-900"
              src="~assets/images/avatar2.png"
              alt="Avatar 2"
            />
            <img
              class="w-[40px] h-[40px] sm:w-full sm:h-auto rounded-full border-2 border-gray-900"
              src="~assets/images/avatar3.png"
              alt="Avatar 3"
            />
            <img
              class="w-[40px] h-[40px] sm:w-full sm:h-auto rounded-full border-2 border-gray-900"
              src="~assets/images/avatar4.png"
              alt="Avatar 4"
            />
          </div>
          <span class="text-[43px] ml-4 font-bold">+</span>
        </div>
      </div>

      <!-- Right Card (How We Work) -->
      <div
        class="relative col-span-12 md:col-span-8 animate-slide-right rounded-[16px] mt-[16px] sm:mt-[0px] h-[200px] sm:h-auto sm:rounded-[40px] opacity-0 delay-1000"
      >
        <img
          class="rounded-[16px] sm:rounded-[40px] object-cover h-full w-full"
          src="~assets/images/howwework.png"
          alt="How We Work"
        />
        <!-- Overlay Text -->
        <div
          class="absolute inset-0 bg-black bg-opacity-5 rounded-[16px] sm:rounded-[40px] flex items-center justify-center"
        >
          <p class="text-white text-[24px] sm:text-[48px] font-normal">
            {{ t("КАК МЫ РАБОТАЕМ") }}
          </p>
        </div>
        <!-- Play Button -->
        <button class="absolute -bottom-0.5 -right-0.5 rounded-full">
          <img
            src="~assets/images/play.png"
            class="w-[40px] h-[40px] sm:w-20 sm:h-20"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { $isMobile } = useNuxtApp();
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

.animate-slide-left {
  animation: slide-left 1s ease-out forwards;
}

.animate-slide-right {
  animation: slide-right 1s ease-out forwards;
}

.opacity-0 {
  opacity: 0;
}
</style>
