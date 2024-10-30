<!-- components/Footer.vue -->
<template>
  <footer class="bg-black text-white py-10 px-4 md:px-20 rounded-t-xl">
    <!-- Top Section -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
    >
      <!-- Social Media Links -->
      <div class="text-sm flex flex-wrap gap-4">
        <p class="mb-2 text-gray-100">Наши социальные сети:</p>
        <div class="grid grid-cols-3 gap-4">
          <a href="#" class="hover:underline">Instagram</a>
          <a href="#" class="hover:underline">Facebook</a>
          <a href="#" class="hover:underline">Tiktok</a>
          <a href="#" class="hover:underline">LinkedIn</a>
          <a href="#" class="hover:underline">YouTube</a>
          <a href="#" class="hover:underline">Behance</a>
        </div>
      </div>

      <!-- Address Information -->
      <div class="text-sm mt-6 md:mt-0 flex">
        <p class="mr-8">Наш адрес:</p>
        <p>Массив Караташ, д. 106Шайхонтохурский р.</p>
      </div>
    </div>

    <!-- Middle Section (Hand Video and Main Message) -->
    <div class="flex justify-center mb-6">
      <!-- Video instead of image -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="h-96 object-contain opacity-70"
      >
        <source src="~assets/videos/hand.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Main Message -->
    <div class="text-center mb-6">
      <p class="text-lg font-semibold">
        ДАВАЙТЕ РАЗРАБОТАЕМ ПЛАН И ДОБЬЕМСЯ РЕАЛЬНЫХ РЕЗУЛЬТАТОВ.
        <br />
        ДАВАЙТЕ СДЕЛАЕМ ЭТО ПО-КРУПНОМУ
      </p>
    </div>

    <!-- Bottom Section -->
    <div
      class="flex flex-col md:flex-row justify-between items-center text-xs border-t border-gray-700 pt-4"
    >
      <p>© 2024, Webase</p>
      <a href="#" class="hover:underline">Вернуться к началу</a>
      <p>Все права защищены</p>
    </div>
  </footer>
</template>

<script setup></script>
