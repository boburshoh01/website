export default defineNuxtPlugin(() => {
  const isMobile = ref(false);

  const checkIfMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Mobil qurilmani aniqlash uchun userAgent'dan foydalanamiz
    isMobile.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );
  };

  // Boshlang'ich tekshiruv
  checkIfMobile();

  // Hodisalarni qo'shish (faqat kerak bo'lsa)
  window.addEventListener("resize", checkIfMobile);

  return {
    provide: {
      isMobile, // isMobile ref'ni Nuxt'da taqdim qilish
    },
  };
});
