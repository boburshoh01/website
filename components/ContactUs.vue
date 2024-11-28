<template>
  <div class="p-1 sm:p-10 text-gray-800">
    <div class="text-center mb-10">
      <h2 class="text-[24px] sm:text-[48px] font-bold mb-4">
        {{ t("Связаться с нами") }}
      </h2>
      <p class="text-gray-600 mx-auto w-[80%]" v-if="!$isMobile">
        {{
          t(
            "Вне зависимости от типа и технологической сложности решения, мы обеспечим качественную реализацию функциональности, высокую доступность и производительность системы, а также привлекательный дизайн и безупречное удобство пользования."
          )
        }}
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <ContactCard :title="t('Номер телефона')" content="+998 99 4447929">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
              fill="#246FFF"
            />
            <path
              d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
              fill="#246FFF"
            />
          </svg>
        </template>
      </ContactCard>

      <ContactCard :title="t('Электронный адрес')" content="webaseuz@gmail.com">
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4C20 1.79086 18.2091 0 16 0H4ZM4.41603 4.37592C4.07138 4.14616 3.60573 4.23929 3.37597 4.58393C3.1462 4.92858 3.23933 5.39423 3.58398 5.624L7.36518 8.1448C8.9607 9.20848 11.0393 9.20848 12.6348 8.14479L16.416 5.624C16.7607 5.39423 16.8538 4.92858 16.624 4.58393C16.3943 4.23929 15.9286 4.14616 15.584 4.37592L11.8028 6.89672C10.7111 7.6245 9.2889 7.6245 8.19723 6.89672L4.41603 4.37592Z"
              fill="#246FFF"
            />
          </svg>
        </template>
      </ContactCard>

      <ContactCard
        :title="t('Адрес')"
        content="Массив Караташ, д. 106 Шайхонтохурский р."
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 14C11 14 15 9.31371 15 6C15 2.68629 12.3137 0 9 0C5.68629 0 3 2.68629 3 6C3 9.31371 7 14 9 14ZM9 8C10.1046 8 11 7.10457 11 6C11 4.89543 10.1046 4 9 4C7.89543 4 7 4.89543 7 6C7 7.10457 7.89543 8 9 8Z"
              fill="#246FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.01158 12.094C3.15376 12.2833 2.37338 12.7521 1.80071 13.4393L0.733737 14.7197C-0.351808 16.0223 0.574505 18 2.27018 18H15.73C17.4257 18 18.352 16.0223 17.2665 14.7197L16.1995 13.4393C15.6268 12.7521 14.8464 12.2833 13.9886 12.094C13.9685 12.1199 13.9483 12.1457 13.9281 12.1713C13.2403 13.0438 12.4619 13.8319 11.6801 14.417C10.9573 14.9579 10.0023 15.5 9.0001 15.5C7.99791 15.5 7.04287 14.9579 6.3201 14.417C5.53826 13.8319 4.75984 13.0438 4.07207 12.1713C4.05189 12.1457 4.03172 12.1199 4.01158 12.094Z"
              fill="#246FFF"
            />
          </svg>
        </template>
      </ContactCard>
    </div>
    <div class="grid grid-col-1 md:grid-cols-2 gap-[20px]">
      <div
        class="relative grid grid-cols-1 md:grid-cols-2 gap-[20px] p-9 text-white rounded-[24px]"
        style="
          background: linear-gradient(90deg, #010205 3.63%, #152b6b 151.6%);
        "
      >
        <div class="absolute z-0 top-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[146px] h-[277px] sm:w-[420px] sm:h-[172px]"
            :viewBox="$isMobile ? '0 0 230 89' : '0 0 408 172'"
            viewBox="0 0 408 172"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M5.65017 -4.31764C0.793603 -1.68562 -0.937398 4.37819 1.95058 9.1169C32.2651 58.8581 75.3446 100.089 126.976 128.658C181.576 158.87 243.612 173.744 306.219 171.636C368.827 169.528 429.566 150.519 481.717 116.712C531.023 84.7496 570.835 40.7373 597.27 -10.9031C599.789 -15.8228 597.524 -21.8232 592.405 -24.1553L490.952 -70.3774C485.93 -72.6652 480.052 -70.5532 477.495 -65.7722C461.352 -35.5987 437.658 -9.86043 408.551 9.008C376.675 29.6717 339.549 41.2906 301.281 42.5793C263.014 43.8679 225.095 34.776 191.722 16.3095C161.3 -0.523612 135.736 -24.5481 117.336 -53.4915C114.371 -58.1554 108.272 -59.9339 103.437 -57.3136L5.65017 -4.31764Z"
              fill="url(#paint0_linear_1_18477)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_18477"
                x1="217.478"
                y1="183.68"
                x2="373.907"
                y2="-3.66367"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010205" />
                <stop offset="1" stop-color="#8DA7F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="absolute z-0 bottom-0 left-0" v-if="!$isMobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="388"
            height="148"
            viewBox="0 0 388 148"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M383.569 144.7C388.114 141.606 389.321 135.412 386.114 130.945C354.667 87.1448 312.684 52.1057 264.248 29.343C212.839 5.18335 156.166 -4.20497 100.497 2.21667C44.8285 8.6383 -7.66486 30.6196 -51.1756 65.7286C-92.1865 98.8204 -123.71 142.359 -142.706 192.002C-144.642 197.062 -142.001 202.671 -136.931 204.582L-43.8853 239.667C-38.6187 241.653 -32.776 238.89 -30.6431 233.681C-18.9016 205.007 -0.24273 179.847 23.7113 160.519C50.3065 139.059 82.3922 125.623 116.419 121.698C150.445 117.773 185.086 123.511 216.508 138.279C244.919 151.63 269.698 171.892 288.638 197.166C291.965 201.605 298.195 202.829 302.78 199.707L383.569 144.7Z"
              fill="url(#paint0_linear_1_18476)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_18476"
                x1="367.283"
                y1="166.433"
                x2="-30.7678"
                y2="93.8939"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010205" />
                <stop offset="1" stop-color="#8DA7F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="absolute z-0 bottom-0 right-0" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="237"
            viewBox="0 0 104 237"
            fill="none"
          >
            <path
              opacity="0.2"
              d="M143.736 13.4996C142.646 4.83943 134.793 -1.42678 126.237 0.301661C102.61 5.07492 80.3814 14.7585 61.2634 28.6977C38.0037 45.6565 20.255 68.2534 9.98076 93.9882C-0.293461 119.723 -2.69265 147.593 3.04863 174.514C7.78459 196.721 17.9074 217.568 32.5691 235.509C37.8672 241.992 47.4287 242.317 53.7891 236.872L75.2277 218.521C82.2989 212.469 82.591 201.73 77.3705 194.024C71.0213 184.652 66.5429 174.242 64.2075 163.291C60.6982 146.836 62.1647 129.801 68.4446 114.071C74.7246 98.3414 85.5732 84.5294 99.7903 74.1636C109.709 66.932 120.997 61.5742 133.015 58.3351C141.652 56.0074 148.084 48.0603 146.968 39.1853L143.736 13.4996Z"
              fill="url(#paint0_linear_479_4150)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_479_4150"
                x1="148.464"
                y1="14.7658"
                x2="28.3669"
                y2="177.577"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#010205" />
                <stop offset="1" stop-color="#8DA7F3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <!-- Form inputs -->
        <InputField
          :label="t('Имя')"
          :placeholder="t('Введите ваше имя')"
          v-model="form.name"
          id="name"
          :class="{ 'z-10': true, '!col-span-2': $isMobile }"
        />
        <InputField
          :label="t('Адрес электронной почты')"
          type="email"
          :placeholder="t('Введите ваш email')"
          v-model="form.email"
          id="email"
          :error="emailError"
          :class="{ 'z-10': true, '!col-span-2': $isMobile }"
        />

        <InputField
          :label="t('Тема')"
          :placeholder="t('Введите тему')"
          v-model="form.subject"
          id="subject"
          class="col-span-2"
        />
        <div class="mb-4 col-span-2">
          <label for="message" class="block text-sm font-medium mb-1">{{
            t("Сообщение")
          }}</label>
          <textarea
            id="message"
            v-model="form.message"
            :placeholder="t('Введите ваше сообщение')"
            rows="4"
            class="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        <div class="flex items-center mb-4 col-span-2">
          <input type="checkbox" id="terms" v-model="form.agree" class="mr-2" />
          <label for="terms" class="text-sm">{{
            t("Я принимаю условия и положения отправки заявки")
          }}</label>
        </div>
        <button
          @click="submitForm"
          class="z-10 flex w-[249px] justify-between px-[32px] py-[17px] bg-[#246FFF] text-white rounded-full text-[16px] transition duration-300 ease-in-out hover:bg-white hover:text-[#246FFF]"
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
      </div>
      <div style="position: relative; overflow: hidden" class="rounded-[20px]">
        <a
          href="https://yandex.uz/maps/org/webase/12440057066/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >{{ t("Webase") }}</a
        ><a
          href="https://yandex.uz/maps/10335/tashkent/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >{{ t("IT-компания в Ташкенте") }}</a
        ><iframe
          src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.237678%2C41.314165&mode=search&oid=12440057066&ol=biz&z=17.08"
          width="100%"
          height="100%"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { $isMobile } = useNuxtApp();

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
  agree: false,
});

const emailError = ref("");

function submitForm() {
  if (!form.email.includes("@")) {
    emailError.value = t("Введите корректный email");
    return;
  }

  if (!form.agree) {
    alert(t("Вы должны принять условия и положения."));
    return;
  }

  emailError.value = "";

  const mailtoLink = `mailto:webaseuz@gmail.com?subject=${encodeURIComponent(
    form.subject
  )}&body=${encodeURIComponent(
    `Имя: ${form.name}\nEmail: ${form.email}\nСообщение: ${form.message}`
  )}`;

  window.location.href = mailtoLink;

  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
  form.agree = false;

  alert(t("Ваше сообщение успешно отправлено!"));
}
</script>
