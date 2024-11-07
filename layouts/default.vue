<template>
  <div class="max-w-[80%] mx-auto">
    <Navbar class="fixed top-0 left-0 z-50" />
    <div class="pt-16">
      <LandingSection />
      <OurWork class="mt-20 scroll-section" />
      <AboutSection class="mt-20 scroll-section" id="about" />
      <Po class="mt-20 scroll-section" />
      <OurServices class="mt-20 scroll-section" id="portfolio" />
      <WhyWe class="mt-20 scroll-section" id="why_us" />
      <Process class="mt-20 scroll-section" id="development_cycle" />
      <ContactUs id="contacts" class="scroll-section" />
      <Footer class="mt-10" />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.scroll-section {
  scroll-margin-top: 72px;
}
</style>
