<template>
  <div>
    <div class="p-10 text-gray-800">
      <h2 class="text-center text-[24px] sm:text-[48px] font-bold mb-4">
        {{ t("Почему выбрали нас?") }}
      </h2>
      <p
        class="text-center text-gray-600 max-w-[994px] mx-auto mb-10"
        v-if="!$isMobile"
      >
        {{
          t(
            "В сотрудничестве с вами мы создаем программный продукт, функциональные возможности которого полностью отвечают уникальным потребностям вашего бизнеса и особенностям услуг."
          )
        }}
      </p>

      <!-- Feature Sections -->
      <FeatureSection
        :title="t('Квалифицированная работа, умные решения')"
        :description="
          t(
            'Мы создаем новые корпоративные системы, компоненты и приложения любой сложности и масштаба, в том числе разрабатываем системы внутренней автоматизации Ваших бизнес процессов.'
          )
        "
        :image="pen"
        :isImageRight="true"
      />

      <FeatureSection
        :title="t('Эксклюзивность')"
        :description="
          t(
            'Специальная команда разработчиков полностью погружается в проект клиента, подстраиваясь под его бизнес-процессы и требования с учетом отраслевых особенностей компании заказчика с учетом доменного опыта и специфических технических навыков каждого из участников, что позволяет достичь высокой эффективности.'
          )
        "
        :image="sixedge"
        :isImageRight="$isMobile"
      />

      <FeatureSection
        :title="t('Оптимизация затрат')"
        :description="
          t(
            'Сотрудничая с профессиональным поставщиком услуг по разработке программного обеспечения, Вы не несете затрат на поиск, привлечение и подготовку собственной ИТ-команды, а получаете незамедлительный доступ к высококвалифицированным специалистам различного профиля. Мы предложим наиболее выгодную модель сотрудничества и возьмем на себя все работы по технической реализации Вашей бизнес-идеи.'
          )
        "
        :image="sale"
        :isImageRight="true"
      />
    </div>

    <div
      class="relative text-white rounded-[32px] p-16 mt-10"
      style="background: linear-gradient(90deg, #010205 3.63%, #152b6b 151.6%)"
    >
      <!-- Top SVG -->
      <div class="absolute top-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="483"
          height="171"
          viewBox="0 0 483 171"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M5.65017 -5.31752C0.793603 -2.6855 -0.937398 3.37831 1.95058 8.11702C32.2651 57.8583 75.3446 99.0889 126.976 127.658C181.576 157.87 243.612 172.745 306.219 170.636C368.827 168.528 429.566 149.519 481.717 115.712C531.023 83.7497 570.835 39.7375 597.27 -11.903C599.789 -16.8227 597.524 -22.8231 592.405 -25.1552L490.952 -71.3773C485.93 -73.6651 480.052 -71.553 477.495 -66.7721C461.352 -36.5986 437.658 -10.8603 408.551 8.00812C376.675 28.6719 339.549 40.2908 301.281 41.5794C263.014 42.868 225.095 33.7761 191.722 15.3096C161.3 -1.52349 135.736 -25.548 117.336 -54.4913C114.371 -59.1553 108.272 -60.9338 103.437 -58.3134L5.65017 -5.31752Z"
            fill="url(#paint0_linear_1_18343)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_18343"
              x1="217.478"
              y1="182.68"
              x2="373.907"
              y2="-4.66355"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010205" />
              <stop offset="1" stop-color="#8DA7F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Bottom SVG -->
      <div class="absolute bottom-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="384"
          height="140"
          viewBox="0 0 384 140"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M379.569 144.7C384.114 141.606 385.321 135.412 382.114 130.945C350.667 87.1448 308.684 52.1057 260.248 29.343C208.839 5.18335 152.166 -4.20496 96.497 2.21667C40.8285 8.63831 -11.6649 30.6196 -55.1756 65.7286C-96.1865 98.8204 -127.71 142.359 -146.706 192.002C-148.642 197.062 -146.001 202.671 -140.931 204.582L-47.8853 239.667C-42.6188 241.653 -36.776 238.89 -34.6431 233.681C-22.9016 205.007 -4.24275 179.847 19.7113 160.519C46.3065 139.059 78.3921 125.623 112.419 121.698C146.445 117.773 181.086 123.511 212.508 138.279C240.919 151.63 265.698 171.892 284.638 197.166C287.965 201.605 294.195 202.829 298.78 199.707L379.569 144.7Z"
            fill="url(#paint0_linear_1_18342)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_18342"
              x1="363.283"
              y1="166.433"
              x2="-34.7678"
              y2="93.8939"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010205" />
              <stop offset="1" stop-color="#8DA7F3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="grid grid-cols-11 gap-4 text-center">
        <!-- Statistic 1 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-[64px] font-bold">9 mln</span>
          <span class="text-gray-300 text-[20px]">{{ t("Клиенты") }}</span>
        </div>
        <div class="hidden md:block border-l border-[#464E75] mx-auto"></div>

        <!-- Statistic 2 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-[64px] font-bold">20</span>
          <span class="text-gray-300 text-[20px]">{{ t("Проекты") }}</span>
        </div>
        <div class="hidden md:block border-l border-[#464E75] mx-auto"></div>

        <!-- Statistic 3 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-[64px] font-bold">5</span>
          <span class="text-gray-300 text-[20px]">{{
            t("Лет на рынке разработки программного обеспечения")
          }}</span>
        </div>
        <div class="hidden md:block border-l border-[#464E75] mx-auto"></div>

        <!-- Statistic 4 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-[64px] font-bold">90</span>
          <span class="text-gray-300 text-[20px]">{{ t("Трудоголики") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sale from "@/assets/gifs/saleanimation.gif";
import sixedge from "@/assets/gifs/sixedgeanimation.gif";
import pen from "@/assets/gifs/penanimation.gif";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { $isMobile } = useNuxtApp();
</script>
