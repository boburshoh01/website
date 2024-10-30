<!-- components/ContactCard.vue -->
<template>
  <div
    class="bg-gray-100 p-4 rounded-lg flex items-center border-solid border-2 border-gray-200"
  >
    <div class="text-blue-500 text-2xl mr-4 bg-white p-3 rounded-2xl">
      <slot name="icon"></slot>
    </div>
    <div>
      <h3 class="text-sm text-gray-700">{{ title }}</h3>
      <p class="text-gray-700 font-semibold">{{ content }}</p>
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
  content: {
    type: String,
    required: true,
  },
});
</script>
