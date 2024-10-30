<template>
  <div
    class="p-10 bg-gradient-to-r from-black to-blue-950 text-white rounded-xl"
  >
    <h2 class="text-center text-3xl font-bold mb-4">{{ title }}</h2>
    <p class="text-center text-gray-300 mb-10">
      {{ description }}
    </p>

    <!-- Features Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <slot name="about" />
    </div>
    <slot name="services" />
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
