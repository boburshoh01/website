<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center gap-20 my-8"
  >
    <!-- Image Section -->
    <div
      :class="[
        'flex-shrink-0 bg-gray-100 w-[343px] h-[173px]  sm:w-[495px] sm:h-[249px] rounded-[24px]',
        isImageRight ? 'order-last' : '',
      ]"
    >
      <img :src="image" :alt="title" class="rounded-lg h-full mx-auto" />
    </div>

    <!-- Text Section -->
    <div class="flex-1">
      <h3 class="text-[20px] sm:text-[32px] font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-[14px] sm:text-[18px]">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isImageRight: {
    type: Boolean,
    default: false,
  },
});
</script>
