<template>
  <AboutSectionComponent
    :title="t('Наши услуги и кейсы')"
    :description="
      t(
        'В сотрудничестве с вами мы создаем программный продукт, функциональные возможности которого полностью отвечают уникальным потребностям вашего бизнеса и особенностям услуг. Накопленный опыт, экспертиза и знания в разработке программного обеспечения на заказ позволяют нам выбирать оптимальные технические решения и оперативно собирать требования. Это обеспечивает быстрый старт проекта, сокращение сроков работ и бюджета на разработку информационного продукта.'
      )
    "
  >
    <template #services>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-8">
        <button
          v-for="category in categories"
          :key="category.text"
          @click="setActiveCategory(category.text)"
          :class="[
            'px-4 py-2 rounded-full font-semibold transition-all min-w-[290px]',
            activeCategory === category.text
              ? 'bg-blue-500 text-white'
              : 'bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-700',
          ]"
        >
          {{ category.text }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="image in caseStudies"
          :key="image.alt"
          class="rounded-xl overflow-hidden shadow-lg bg-white"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </template>

    <!-- Case Study Images -->
  </AboutSectionComponent>
</template>

<script setup>
import texnomed from "@/assets/images/texnomed.png";
import ombudsman from "@/assets/images/ombudsman.png";
import shotfaktura from "@/assets/images/shotfaktura.png";
import project from "@/assets/images/project.png";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const categories = [
  { text: t("Все") },
  { text: t("ИТ-консалтинг") },
  { text: t("Прототипирование") },
  { text: t("Заказная разработка ПО") },
  { text: t("Виртуализация") },
  { text: t("Независимое тестирование") },
  { text: t("Информационная безопасность") },
  { text: t("Сопровождение и поддержка") },
  { text: t("Миграция ПО") },
  { text: t("Интеграция приложений") },
];
const caseStudies = [
  { src: texnomed, alt: t("texnomed") },
  { src: ombudsman, alt: t("ombudsman") },
  { src: shotfaktura, alt: t("shotfaktura") },
  { src: project, alt: t("project") },
];
</script>
