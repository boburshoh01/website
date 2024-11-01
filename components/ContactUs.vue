<template>
  <div class="p-10 text-gray-800">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold mb-4">{{ t("Связаться с нами") }}</h2>
      <p class="text-gray-600 mx-auto">
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
    <div class="grid grid-col-1 md:grid-cols-2 gap-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-black to-blue-950 p-9 text-white rounded-2xl"
      >
        <!-- Using the InputField component -->
        <InputField
          :label="t('Имя')"
          :placeholder="t('Введите ваше имя')"
          v-model="form.name"
          id="name"
        />
        <InputField
          :label="t('Адрес электронной почты')"
          type="email"
          :placeholder="t('Введите ваш email')"
          v-model="form.email"
          id="email"
          :error="emailError"
        />
        <InputField
          :label="t('Тема')"
          :placeholder="t('Введите тему')"
          v-model="form.subject"
          id="subject"
          class="col-span-2"
        />
        <div class="mb-4 col-span-2">
          <label for="message" class="block text-sm font-medium mb-1"
            >Сообщение</label
          >
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
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-semibold"
        >
          {{ t("Оставьте заявку") }}
        </button>
      </div>

      <div style="position: relative; overflow: hidden" class="rounded-2xl">
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
    emailError.value = "Введите корректный email";
    return;
  }
  emailError.value = "";
  // Further form submission logic
  alert("Form submitted successfully!");
}
</script>
