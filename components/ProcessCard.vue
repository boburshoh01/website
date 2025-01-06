<!-- components/ProcessCard.vue -->
<template>
  <div class="bg-white rounded-lg p-4 flex flex-col">
    <div class="mb-2">
      <slot name="icon" />
    </div>
    <h3 class="text-[14px] sm:text-[20px] font-semibold break-words">
      {{ title }}
    </h3>
    <p class="text-gray-600 text-[12px] sm:text-[18px] mt-3">
      {{ description }}
    </p>
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
});
</script>
