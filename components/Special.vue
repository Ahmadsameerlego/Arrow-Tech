<template>
  <div class="special_slider container mx-auto">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-y-5">
      <div
        class="animated wow zoomIn"
        data-wow-duration="1.3s"
        data-wow-delay="0s"
      >
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
          :navigation="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-100%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide v-for="item in items" class="rounded-md pb-16">
            <div
              class="bg-[url('/dots.png')] bg-no-repeat bg-[left_15%_top_98%] relative"
            >
              <img
                :src="item.image"
                alt="about"
                class="w-[406px] pb-16 h-[607px] mx-auto object-cover"
              />
              <img
                src="/special_text.png"
                alt="about"
                class="absolute z-[200] bottom-[50%] left-[10%]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        class="space-y-12 mb-40 px-8 animated wow zoomIn"
        data-wow-duration="1.3s"
        data-wow-delay="0s"
      >
        <div class="space-y-8">
          <h2 class="font-bold text-3xl">ما يميزنا في Arrow Tech</h2>
          <p class="text-primary text-xl leading-9">
            نعزز من تفاعل العملاء مع منتجاتك عن طريق الواقع الافتراضي VR التي
            يقوم فريق متخصص في Arrow Tech بتطويرها لك في Arrow Tech نفخر بفريقنا من
            الخبراء المتخصصين لضمان تقديم حلول مبتكرة تفوق توقعات عملائنا. نحن
            ملتزمون بالجودة والتميز والوقت
          </p>
        </div>
        <div>
          <NuxtLink to="/About_us" class="btn-base">المزيد</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const items = ref([
  {
    image: "/special.png",
  },
  {
    image: "/p3.jpg",
  },
]);
</script>
