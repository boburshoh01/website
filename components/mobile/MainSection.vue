<template>
  <div class="flex flex-col justify-center h-full space-y-5">
    <h1 class="text-4xl sm:text-[28px] leading-snug sm:leading-tight">
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </h1>
    <p class="text-base sm:text-[14px] text-gray-400 mt-4">
      {{ t("Опережайте события благодаря нашему перспективному мышлению.") }}
    </p>

    <div class="flex flex-row">
      <div class="mr-5 relative">
        <img
          class="max-w-[200px] animate-slide-right"
          src="~assets/images/triangleimg.png"
          alt=""
        />
      </div>
      <div class="bg-gray-100 p-6 rounded-2xl shadow-md animate-slide-right">
        <div class="text-[32px] font-bold">230+</div>
        <p class="text-[12px]">
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
      class="relative bg-gradient-to-r from-black to-blue-950 text-white rounded-3xl px-10 py-5 mt-[24px] overflow-hidden"
    >
      <!-- Top SVG -->
      <div class="absolute top-0 left-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="261"
          height="69"
          viewBox="0 0 261 69"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M255.661 -4.56355C260.266 -1.51297 261.551 4.71632 258.201 9.1078C243.428 28.4742 224.141 44.0114 201.96 54.3278C176.749 66.0534 148.781 70.5772 121.151 67.3987C93.5201 64.2202 67.3038 53.4633 45.4022 36.3182C26.1333 21.2339 10.865 1.72213 0.858106 -20.4944C-1.41105 -25.5322 1.25388 -31.3103 6.43224 -33.2372L42.6041 -46.6966C47.778 -48.6218 53.4852 -45.9583 55.9621 -41.0247C62.0522 -28.8946 70.7679 -18.2192 81.5224 -9.80024C94.9094 0.679463 110.934 7.25441 127.822 9.19721C144.711 11.14 161.806 8.3749 177.216 1.20783C189.593 -4.54876 200.496 -12.9649 209.171 -23.3935C212.703 -27.6389 218.868 -28.9399 223.471 -25.8899L255.661 -4.56355Z"
            fill="url(#paint0_linear_1_18206)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_18206"
              x1="160"
              y1="76"
              x2="95.4471"
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
      <div class="absolute bottom-0 left-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="139"
          height="169"
          viewBox="0 0 139 169"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M134.368 8.93405C133.728 3.44785 128.752 -0.514297 123.321 0.489079C99.3677 4.91396 76.791 15.0949 57.5629 30.2179C35.7082 47.4067 19.0315 70.31 9.37789 96.3938C-0.275735 122.478 -2.53 150.725 2.86449 178.011C7.61054 202.018 18.1143 224.456 33.4088 243.425C36.877 247.726 43.2357 247.96 47.2951 244.212L75.6507 218.029C79.7065 214.284 79.9103 207.99 76.629 203.55C68.5613 192.635 62.9781 180.035 60.3292 166.637C57.0319 149.958 58.4098 132.693 64.3104 116.749C70.211 100.806 80.4043 86.8068 93.7627 76.3004C104.492 67.8617 116.927 61.9405 130.151 58.9154C135.534 57.684 139.481 52.7729 138.842 47.2877L134.368 8.93405Z"
            fill="url(#paint0_linear_1_18205)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_18205"
              x1="139.496"
              y1="16.097"
              x2="15.3472"
              y2="172.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010205" />
              <stop offset="1" stop-color="#8DA7F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Content -->
      <p class="relative text-[12px] font-semibold z-10">
        ----- {{ t("Увеличивайте трафик и продажи") }}
      </p>
      <div class="relative flex z-10">
        <p class="text-[20px] font-semibold mt-8 max-w-[60%]">
          {{ t("Увеличивайте трафик и продажи продукции") }}
        </p>
        <img
          src="~assets/images/statsimg.png"
          alt=""
          class="w-[118px] h-[113px] animate-slide-right text-right"
        />
      </div>
    </div>

    <div
      class="flex flex-col items-center pt-[16px] opacity-0 animate-fade-in delay-1000"
    >
      <button
        @click="scrollToSection('#contacts')"
        class="flex justify-between w-[97%] px-[32px] py-[16px] bg-black text-white rounded-full text-[16px] transition duration-300 ease-in-out hover:bg-[#246FFF]"
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
        class="mt-[14px] w-fit bg-transparent border-b border-slate-950 text-black hover:border-[#246FFF] text-[16px] transition duration-300 ease-in-out"
      >
        {{ t("Посмотреть наши кейсы") }}
      </button>
    </div>
    <!-- <div class="pt-[16px] items-center">
      <div
        class="text-[16px] text-center transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-200"
      >
        {{ t("Доверяют крупнейшие мировые бренды") }}
      </div>
      <div class="flex justify-center">
        <img
          src="~assets/images/discord.png"
          alt="Discord"
          class="h-7 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-300"
        />
        <img
          src="~assets/images/amazon.png"
          alt="Amazon"
          class="h-7 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-400"
        />
        <img
          src="~assets/images/facebook.png"
          alt="Facebook"
          class="h-7 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-500"
        />
        <img
          src="~assets/images/appsheet.png"
          alt="AppSheet"
          class="h-7 transform transition-transform duration-700 ease-out opacity-0 animate-slide-up delay-600"
        />
      </div>
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
