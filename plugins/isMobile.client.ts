// plugins/isMobile.js

import { ref, nextTick } from 'vue';

export default defineNuxtPlugin(() => {
  const isMobile = ref(false);

  const checkIfMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Mobil qurilmani aniqlash uchun userAgent'dan foydalanamiz
    isMobile.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );
  };

  // `process.client` bilan faqat brauzerda ishlashni ta'minlash
  if (process.client) {
    // Boshlang'ich tekshiruv
    nextTick(() => {
      checkIfMobile(); // Yuqoridagi tekshiruvni birinchi marta chaqirish
    });

    // Hodisalarni qo'shish
    window.addEventListener('resize', checkIfMobile);
  }

  // Plugin orqali `isMobile` ref'ni taqdim etamiz
  return {
    provide: {
      isMobile, // isMobile ref'ni Nuxt'da taqdim qilish
    },
  };
});
