<template>
  <div>
    <!-- Grid Layout for Content and Image -->
    <div class="flex justify-between">
      <!-- Text Content -->
      <div>
        <h2 class="text-3xl font-bold mb-6">
          {{ t("Обеспечиваем прозрачное управление процессами разработки ПО") }}
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold">
              {{ t("Работаем в рамках единой команды") }}
            </h3>
            <p class="text-gray-600">
              {{
                t(
                  "Проводим еженедельные встречи по статусу задач проекта, расставляем приоритеты и обсуждаем результаты нашей работы."
                )
              }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold">
              {{ t("Совместно планируем сроки и бюджеты") }}
            </h3>
            <p class="text-gray-600">
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
      <div class="rounded-xl overflow-hidden shadow-lg">
        <img
          src="~assets/images/project_management.png"
          alt="Project Management"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
