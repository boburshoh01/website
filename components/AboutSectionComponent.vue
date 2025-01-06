<template>
  <div
    class="p-[20px] sm:px-[126px] sm:py-[80px] text-white rounded-[32px] relative"
    style="background: linear-gradient(90deg, #010205 3.63%, #152b6b 151.6%)"
  >
    <div class="absolute z-0 top-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-[157px] h-[281px] sm:w-[599px] sm:h-[171px]"
        :viewBox="'0 0 599 171'"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M5.65017 -5.31764C0.793603 -2.68562 -0.937398 3.37819 1.95058 8.1169C32.2651 57.8581 75.3446 99.0888 126.976 127.658C181.576 157.87 243.612 172.744 306.219 170.636C368.827 168.528 429.566 149.519 481.717 115.712C531.023 83.7496 570.835 39.7373 597.27 -11.9031C599.789 -16.8228 597.524 -22.8232 592.405 -25.1553L490.952 -71.3774C485.93 -73.6652 480.052 -71.5532 477.495 -66.7722C461.352 -36.5987 437.658 -10.8604 408.551 8.008C376.675 28.6717 339.549 40.2906 301.281 41.5793C263.014 42.8679 225.095 33.776 191.722 15.3095C161.3 -1.52361 135.736 -25.5481 117.336 -54.4915C114.371 -59.1554 108.272 -60.9339 103.437 -58.3136L5.65017 -5.31764Z"
          fill="url(#paint0_linear_1_18243)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_18243"
            x1="217.478"
            y1="182.68"
            x2="373.907"
            y2="-4.66367"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#010205" />
            <stop offset="1" stop-color="#8DA7F3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="absolute z-0 bottom-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-[149px] h-[271px] sm:w-[215px] sm:h-[253px]"
        viewBox="0 0 215 253"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M276.165 8.86717C275.51 3.40776 270.567 -0.515112 265.126 0.275314C211.766 8.02646 161.332 29.165 118.826 61.6835C73.7119 96.1976 39.2865 142.186 19.3587 194.561C-0.569197 246.935 -5.22265 303.654 5.91312 358.443C16.4091 410.084 40.5464 458.113 75.871 497.83C79.4715 501.879 85.6661 502.116 89.6968 498.496L163.678 432.049C167.866 428.288 168.103 421.829 164.461 417.538C144.412 393.913 130.667 365.767 124.537 335.604C117.73 302.115 120.574 267.446 132.755 235.433C144.936 203.42 165.978 175.31 193.553 154.214C218.485 135.14 247.88 122.472 279.035 117.293C284.507 116.384 288.462 111.417 287.802 105.909L276.165 8.86717Z"
          fill="url(#paint0_linear_1_18242)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_18242"
            x1="287.96"
            y1="33.3298"
            x2="40.3114"
            y2="353.294"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#010205" />
            <stop offset="1" stop-color="#8DA7F3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <h1 class="text-center text-[24px] sm:text-[48px] font-bold mb-4">
      {{ title }}
    </h1>
    <p class="text-center text-gray-300 mb-10" v-if="!$isMobile">
      {{ description }}
    </p>

    <!-- Features Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <slot name="about" />
    </div>
    <slot name="services" />
  </div>
</template>

<script setup>
const { $isMobile } = useNuxtApp();

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
