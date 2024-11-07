<template>
  <div>
    <div class="p-10 text-gray-800">
      <h2 class="text-center text-3xl font-bold mb-4">
        {{ t("Почему выбрали нас?") }}
      </h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-10">
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
            'Специальная команда разработчиков полностью погружается в проект клиента, подстраиваясь под его бизнес-процессы и требования с учетом отраслевых особенностей компании заказчика.'
          )
        "
        :image="sixedge"
        :isImageRight="false"
      />

      <FeatureSection
        :title="t('Оптимизация затрат')"
        :description="
          t(
            'Сотрудничая с профессиональным поставщиком услуг по разработке программного обеспечения, вы не несете затрат на поиск, привлечение и подготовку собственной ИТ-команды.'
          )
        "
        :image="sale"
        :isImageRight="true"
      />
    </div>

    <div
      class="bg-gradient-to-r from-black to-blue-950 text-white rounded-xl p-16 mt-10"
    >
      <div class="grid grid-cols-11 gap-4 text-center">
        <!-- Statistic 1 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-3xl font-bold">27 400</span>
          <span class="text-gray-300">{{ t("Клиенты") }}</span>
        </div>
        <div class="hidden md:block border-l border-gray-500 mx-auto"></div>

        <!-- Statistic 2 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-3xl font-bold">11</span>
          <span class="text-gray-300">{{ t("Проекты") }}</span>
        </div>
        <div class="hidden md:block border-l border-gray-500 mx-auto"></div>

        <!-- Statistic 3 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-3xl font-bold">14</span>
          <span class="text-gray-300">{{
            t("Лет на рынке разработки программного обеспечения")
          }}</span>
        </div>
        <div class="hidden md:block border-l border-gray-500 mx-auto"></div>

        <!-- Statistic 4 -->
        <div class="flex flex-col my-auto col-span-2">
          <span class="text-3xl font-bold">10</span>
          <span class="text-gray-300">{{ t("Трудоголики") }}</span>
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
</script>
