<template>
  <section
    class="grid gap-8 mt-[80px]"
    style="grid-template-columns: 2.2fr 1.8fr"
  >
    <!-- Main Content -->
    <div>
      <MainContent />
    </div>
    <!-- Stats Section -->
    <div>
      <StatsSection />
    </div>
  </section>
</template>

<script setup>
import MainContent from "@/components/MainContent.vue";
import StatsSection from "@/components/StatsSection.vue";
</script>

<style scoped>
/* Custom styles if needed */
</style>
