<template>
  <div>
    <!-- Grid Layout for Content and Image -->
    <div class="flex justify-between">
      <!-- Text Content -->
      <div>
        <h2 class="text-3xl font-bold mb-6">
          Обеспечиваем прозрачное управление процессами разработки ПО
        </h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold">
              Работаем в рамках единой команды
            </h3>
            <p class="text-gray-600">
              Проводим еженедельные встречи по статусу задач проекта,
              расставляем приоритеты и обсуждаем результаты нашей работы.
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold">
              Совместно планируем сроки и бюджеты
            </h3>
            <p class="text-gray-600">
              Внимательно изучив потребности Вашего проекта, мы подберем
              оптимальное решение, которое подойдет обеим сторонам.
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
// No additional scripts are needed for this layout
</script>

<style scoped>
/* Optional styling for responsive adjustments */
</style>
