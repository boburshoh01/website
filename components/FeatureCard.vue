<!-- components/FeatureCard.vue -->
<template>
  <div
    class="bg-opacity-10 bg-white p-6 rounded-[24px] border border-[#464E75]"
  >
    <div class="flex items-center space-x-4">
      <div
        class="text-white p-3 rounded-xl flex items-center justify-center"
        style="background: rgba(255, 255, 255, 0.1)"
      >
        <slot name="icon" />
      </div>
      <div>
        <h3 class="text-[16px] sm:text-[24px] font-semibold text-white">
          {{ title }}
        </h3>
      </div>
    </div>
    <p class="text-gray-300 mt-4 text-[14px] sm:text-[16px]">
      {{ description }}
    </p>
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
