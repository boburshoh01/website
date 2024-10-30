<template>
  <AboutSectionComponent
    title="Наши услуги и кейсы"
    description="В сотрудничестве с вами мы создаем программный продукт, функциональные возможности которого полностью отвечают уникальным потребностям вашего бизнеса и особенностям услуг. Накопленный опыт, экспертиза и знания в разработке программного обеспечения на заказ позволяют нам выбирать оптимальные технические решения и оперативно собирать требования. Это обеспечивает быстрый старт проекта, сокращение сроков работ и бюджета на разработку информационного продукта."
  >
    <template #services>
      <div class="grid grid-cols-5 gap-4 mb-8">
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
const categories = [
  { text: "Все" },
  { text: "ИТ-консалтинг" },
  { text: "Прототипирование" },
  { text: "Заказная разработка ПО" },
  { text: "Виртуализация" },
  { text: "Независимое тестирование" },
  { text: "Информационная безопасность" },
  { text: "Сопровождение и поддержка" },
  { text: "Миграция ПО" },
  { text: "Интеграция приложений" },
];
const caseStudies = [
  { src: "~assets/images/texnomed.png", alt: "texnomed" },
  { src: "~assets/images/ombudsman.png", alt: "ombudsman" },
  { src: "~assets/images/shotfaktura.png", alt: "shotfaktura 3" },
  { src: "~assets/images/project.png", alt: "project" },
];
</script>
