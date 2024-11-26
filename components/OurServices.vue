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
      <!-- Mobil uchun Select -->
      <div v-if="$isMobile" class="mb-8 z-10">
        <label class="text-[14px] text-white">{{ t("Выберите услугу") }}</label>
        <select
          v-model="activeCategory"
          class="custom-select px-4 py-2 rounded-full font-semibold transition-all min-w-[290px] bg-transparent border border-gray-300 hover:border-[#246FFF] text-white"
        >
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.text }}
          </option>
        </select>
      </div>

      <!-- Desktop uchun Button'lar -->
      <div
        v-else
        class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-8"
      >
        <button
          v-for="category in categories"
          :key="category.id"
          @click="setActiveCategory(category.id)"
          :class="[
            'px-4 py-2 rounded-full font-semibold transition-all min-w-[290px]',
            activeCategory === category.id
              ? 'bg-[#246fff] text-white'
              : 'bg-transparent border hover:border-[#246FFF] text-gray-300',
          ]"
        >
          {{ category.text }}
        </button>
      </div>

      <!-- Case Studies with Hover Effect -->
      <div
        ref="scrollContainer"
        class="overflow-x-auto whitespace-nowrap scroll-smooth hide-sc relative"
      >
        <div ref="scrollContent" class="inline-flex space-x-6">
          <div
            v-for="image in extendedCaseStudies"
            :key="image.alt + Math.random()"
            class="relative w-[267px] h-[180px] sm:w-[400px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg flex-shrink-0 group"
          >
            <!-- Image -->
            <img
              :src="image.src"
              :alt="image.alt"
              class="object-cover w-full h-full transform transition-transform duration-500"
            />
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[rgba(1,11,35,0.8)] via-[rgba(29,47,85,0.71)] to-[rgba(255,255,255,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Content -->
            <div
              class="h-full absolute flex flex-col p-7 w-full justify-between bottom-0 left-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <p class="text-sm font-medium">
                — {{ t("ИТ-консалтинг/ Мобильное приложение") }}
              </p>
              <div>
                <h3 class="text-lg font-bold">{{ image.alt }}</h3>
                <p class="text-sm mt-2 whitespace-normal">
                  {{
                    t(
                      "В сотрудничестве с вами мы создаем программный продукт, функциональные возможности."
                    )
                  }}
                </p>
                <!-- Buttons -->
                <div class="flex items-center space-x-4 mt-4">
                  <button
                    class="w-10 h-10 rounded-full bg-white hover:bg-cyan-100 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1643 8.05211C13.1643 9.79811 11.7483 11.2141 10.0023 11.2141C8.25633 11.2141 6.84033 9.79811 6.84033 8.05211C6.84033 6.30511 8.25633 4.89011 10.0023 4.89011C11.7483 4.89011 13.1643 6.30511 13.1643 8.05211Z"
                        stroke="#246FFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.750488 8.05211C0.750488 11.3321 4.89249 15.3541 10.0025 15.3541C15.1115 15.3541 19.2545 11.3351 19.2545 8.05211C19.2545 4.76911 15.1115 0.750107 10.0025 0.750107C4.89249 0.750107 0.750488 4.77211 0.750488 8.05211Z"
                        stroke="#246FFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    class="w-10 h-10 rounded-full bg-white hover:bg-cyan-100 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M12.791 10.1207H0.75"
                        stroke="#246FFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.86426 7.2047L12.7923 10.1207L9.86426 13.0367"
                        stroke="#246FFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.25879 5.62989C5.58879 2.04989 6.92879 0.749893 12.2588 0.749893C19.3598 0.749893 19.3598 3.05989 19.3598 9.99989C19.3598 16.9399 19.3598 19.2499 12.2588 19.2499C6.92879 19.2499 5.58879 17.9499 5.25879 14.3699"
                        stroke="#246FFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AboutSectionComponent>
</template>

<script setup>
import texnomed from "@/assets/images/texnomed.png";
import ombudsman from "@/assets/images/ombudsman.png";
import shotfaktura from "@/assets/images/shotfaktura.png";
import project from "@/assets/images/project.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
const { $isMobile } = useNuxtApp(); // Check for mobile

// Internationalization
const { t } = useI18n();

// Categories and case studies data
const categories = computed(() => [
  { id: 0, text: t("Все") },
  { id: 1, text: t("ИТ-консалтинг") },
  { id: 2, text: t("Прототипирование") },
  { id: 3, text: t("Заказная разработка ПО") },
  { id: 4, text: t("Виртуализация") },
  { id: 5, text: t("Независимое тестирование") },
  { id: 6, text: t("Информационная безопасность") },
  { id: 7, text: t("Сопровождение и поддержка") },
  { id: 8, text: t("Миграция ПО") },
  { id: 9, text: t("Интеграция приложений") },
]);

const caseStudies = computed(() => [
  { id: 1, src: texnomed, alt: t("TechnoMed"), categoryId: 1 },
  { id: 2, src: ombudsman, alt: t("Ombudsman"), categoryId: 2 },
  { id: 3, src: shotfaktura, alt: t("Shotfaktura"), categoryId: 3 },
  { id: 4, src: project, alt: t("Project"), categoryId: 4 },
  { id: 5, src: project2, alt: t("Project2"), categoryId: 5 },
  { id: 6, src: project3, alt: t("Project3"), categoryId: 6 },
]);

const activeCategory = ref(0); // Default value

// Update activeCategory when the category is selected
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
};

// Filtered case studies based on active category
const filteredCaseStudies = computed(() => {
  if (activeCategory.value === 0) {
    return caseStudies.value;
  }
  return caseStudies.value.filter(
    (caseStudy) => caseStudy.categoryId === activeCategory.value
  );
});
// Infinite scroll container and content refs
const scrollContainer = ref(null);
const scrollContent = ref(null);
let scrollInterval;

// Extend case studies for infinite scrolling
const extendedCaseStudies = computed(() => {
  // Repeat the items to simulate infinite scrolling
  return [...filteredCaseStudies.value, ...filteredCaseStudies.value];
});

// Infinite scroll logic
const startInfiniteScroll = () => {
  scrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      const container = scrollContainer.value;
      const maxScrollLeft = container.scrollWidth / 2; // Half the content width

      if (container.scrollLeft >= maxScrollLeft) {
        // Reset scroll to the start
        container.scrollLeft = 0;
      } else {
        // Increment scroll position
        container.scrollLeft += 2; // Adjust speed here
      }
    }
  }, 20); // Adjust scroll interval speed for smooth scrolling
};

const stopInfiniteScroll = () => {
  if (scrollInterval) clearInterval(scrollInterval);
};

onMounted(() => {
  startInfiniteScroll();
});

onUnmounted(() => {
  stopInfiniteScroll();
});
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.scroll-smooth {
  scroll-behavior: smooth;
}
.custom-select {
  background-color: transparent; /* Transparent fon */
  color: white; /* Matn rangini oq qilish */
  appearance: none; /* Default stylingni o'chirish (iOS, Android uchun) */
}

/* Dropdown menyu (option) styling */
.custom-select option {
  background-color: rgba(0, 0, 0, 0.8); /* Oqimsimon qora fon */
  color: white; /* Matnni oq rangda ko'rsatish */
}

/* Focus qilinganida border rangini o'zgartirish */
.custom-select:focus {
  outline: none; /* Default outline'ni olib tashlash */
  border-color: #246fff; /* Fokus border rangi */
}
</style>
