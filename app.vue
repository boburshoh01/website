<template>
  <div>
    <NuxtLayout />
    <NuxtRouteAnnouncer />
    <div class="snow">
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>

      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>

      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>

      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>

      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
      <div class="snowflake">❄️</div>
    </div>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
<style lang="scss">
.snow {
  padding: 0;
  margin: 0;

  position: fixed;
  top: 0;
  top: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 99999;
}

.snowflake {
  --size: 1vw;
  --font-size:20px
  width: var(--size);
  height: var(--size);
  font-size: var(--font-size);
  border-radius: 50%;
  position: absolute;
  top: -5vh;
}

@keyframes snowfall {
  0% {
    transform: translate3d(var(--left-ini), 0, 0);
  }
  100% {
    transform: translate3d(var(--left-end), 110vh, 0);
  }
}

@for $i from 1 through 50 {
  .snowflake:nth-child(#{$i}) {
    --size: #{random(2) * 0.2}vw;
    --font-size: #{random(100) * 0.2}px;
    --left-ini: #{random(20) - 10}vw;
    --left-end: #{random(20) - 10}vw;
    left: #{random(100)}vw;
    animation: snowfall #{5 + random(10)}s linear infinite;
    animation-delay: -#{random(10)}s;
  }
}

/* added small blur every 6 snowflakes*/
.snowflake:nth-child(6n) {
  filter: blur(1px);
}
</style>
