<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-8">
    <div
      :class="
        isImageRight
          ? 'order-last md:col-span-4 bg-gray-100'
          : 'md:col-span-4 bg-gray-100'
      "
    >
      <img :src="image" :alt="title" class="w-full rounded-lg shadow-lg" />
    </div>

    <div class="md:col-span-8">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
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
