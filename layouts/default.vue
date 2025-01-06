<template>
  <div>
    <Navbar class="fixed top-0 left-0 z-50 mx-auto" />
    <div class="pt-16">
      <component
        :is="$isMobile ? MobileMainSection : LandingSection"
        class="mx-[16px] sm:mx-[150px]"
      />

      <OurWork class="mt-20 scroll-section mx-[16px] sm:mx-[150px]" />
      <AboutSection class="mt-20 scroll-section mx-[16px]" id="about" />
      <Po class="mt-20 scroll-section mx-[16px] sm:mx-[150px]" />
      <OurServices class="mt-20 scroll-section mx-[16px]" id="portfolio" />
      <WhyWe
        class="mt-[100px] scroll-section mx-[16px] sm:mx-[150px]"
        id="why_us"
        v-if="!$isMobile"
      />
      <Process
        class="mt-20 scroll-section mx-[16px] sm:mx-[150px]"
        id="development_cycle"
      />
      <ContactUs id="contacts" class="scroll-section mx-[16px] sm:mx-[150px]" />
      <Footer class="mt-10 mx-[16px] mb-[24px]" />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import MobileMainSection from "@/components/mobile/MainSection.vue";
import LandingSection from "@/components/LandingSection.vue";

const { $isMobile } = useNuxtApp();
</script>

<style>
.scroll-section {
  scroll-margin-top: 72px;
}
</style>
