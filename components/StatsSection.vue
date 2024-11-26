<template>
  <div>
    <div class="flex flex-row">
      <div class="mr-5 relative">
        <img
          class="max-w-[294px] animate-slide-right"
          src="~assets/images/triangleimg.png"
          alt=""
        />
      </div>
      <div class="bg-gray-100 p-6 rounded-2xl shadow-md animate-slide-right">
        <div class="text-[90px] font-bold">20+</div>
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
      class="relative bg-gradient-to-r from-black to-blue-950 text-white rounded-3xl p-[36px] mt-[24px] overflow-hidden"
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
      <p class="relative text-[16px] font-semibold z-10">
        ----- {{ t("Увеличивайте трафик и продажи") }}
      </p>
      <div class="relative flex z-10">
        <p class="text-[36px] font-semibold mt-8 max-w-[75%]">
          {{ t("Увеличивайте трафик и продажи продукции") }}
        </p>
        <img
          src="~assets/images/statsimg.png"
          alt=""
          class="absolute -bottom-12 right-0 animate-slide-right z-10"
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
