<template>
  <div class="">
    <!-- Header Section -->
    <div class="mb-8 flex">
      <h2 class="text-[48px] font-bold">
        Обеспечьте лучший сервис, используя нестандартные идеи
      </h2>
      <p class="mt-4 text-gray-400 max-w-2xl mx-auto">
        Webase действительно является крупной IT-компанией. Она активно работает
        в сфере информационных технологий и предоставляет различные услуги и
        решения для бизнеса. В последние годы компания значительно расширила
        свои масштабы и укрепила свои позиции на рынке, что подтверждается её
        включением в различные рейтинги IT-компаний.
      </p>
    </div>

    <!-- Main Content Section with Custom Column Layout -->
    <div class="grid grid-cols-12 gap-6">
      <!-- Left Card (Projects Completed) -->
      <div
        class="bg-gray-900 text-white rounded-3xl p-6 flex flex-col justify-between col-span-12 md:col-span-3 relative"
      >
        <div>
          <div class="text-[90px] font-bold">
            900<span class="text-blue-500">+</span>
          </div>
          <p class="mt-2 text-[20px] text-gray-400">
            Проект завершен великолепно
          </p>
        </div>
        <!-- Avatars Section -->
        <div class="flex items-center mt-4">
          <div class="flex -space-x-1">
            <img
              class="w-[72px] h-[72px] rounded-full border-2 border-gray-900"
              src="~assets/images/avatar1.png"
              alt="Avatar 1"
            />
            <img
              class="w-[72px] h-[72px] rounded-full border-2 border-gray-900"
              src="~assets/images/avatar2.png"
              alt="Avatar 2"
            />
            <img
              class="w-[72px] h-[72px] rounded-full border-2 border-gray-900"
              src="~assets/images/avatar3.png"
              alt="Avatar 3"
            />
            <img
              class="w-[72px] h-[72px] rounded-full border-2 border-gray-900"
              src="~assets/images/avatar4.png"
              alt="Avatar 4"
            />
          </div>
          <span class="text-[43px] ml-4 font-bold">+</span>
        </div>
      </div>

      <!-- Right Card (How We Work) -->
      <div class="relative col-span-12 md:col-span-9">
        <img
          class="rounded-3xl object-cover h-full w-full"
          src="~assets/images/howwework.png"
          alt="How We Work"
        />
        <!-- Overlay Text -->
        <div
          class="absolute inset-0 bg-black bg-opacity-5 rounded-xl flex items-center justify-center"
        >
          <p class="text-white text-2xl font-bold">КАК МЫ РАБОТАЕМ</p>
        </div>
        <!-- Play Button -->
        <button class="absolute bottom-0 right-0 bg-blue-500 p-3 rounded-full">
          <img src="~assets/images/play.png" class="h-16 w-16" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
