<!-- components/FeatureCard.vue -->
<template>
  <div class="bg-opacity-10 bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-start space-x-4">
      <div
        class="bg-gray-800 text-white p-3 rounded-xl flex items-center justify-center"
      >
        <slot name="icon" />
      </div>
      <div>
        <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
      </div>
    </div>
    <p class="text-gray-300 mt-4">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
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
