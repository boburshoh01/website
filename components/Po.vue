<template>
  <div>
    <!-- Grid Layout for Content and Image -->
    <div class="flex justify-between gap-[55px]">
      <!-- Text Content -->
      <div class="">
        <h2 class="text-[24px] sm:text-[36px] font-bold mb-6">
          {{ t("Обеспечиваем прозрачное управление процессами разработки ПО") }}
        </h2>
        <div v-if="$isMobile">
          <img
            src="~assets/images/project_management.png"
            alt="Project Management"
            class="object-cover max-w-full h-auto rounded-xl overflow-hidden"
          />
        </div>
        <div class="space-y-6">
          <div>
            <h3 class="text-[16px] sm:text-[24px] font-semibold">
              {{ t("Работаем в рамках единой команды") }}
            </h3>
            <p class="text-[14px] sm:text-[16px] text-gray-600">
              {{
                t(
                  "Проводим еженедельные встречи по статусу задач проекта, расставляем приоритеты и обсуждаем результаты нашей работы."
                )
              }}
            </p>
          </div>

          <div>
            <h3 class="text-[16px] sm:text-[24px] font-semibold">
              {{ t("Совместно планируем сроки и бюджеты") }}
            </h3>
            <p class="text-gray-600 text-[14px] sm:text-[16px]">
              {{
                t(
                  "Внимательно изучив потребности Вашего проекта, мы подберем оптимальное решение, которое подойдет обеим сторонам."
                )
              }}
            </p>
          </div>
        </div>
      </div>

      <!-- Image Section -->
      <div v-if="!$isMobile">
        <img
          src="~assets/images/project_management.png"
          alt="Project Management"
          class="object-cover max-w-full h-full rounded-xl overflow-hidden"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const { $isMobile } = useNuxtApp();
</script>
