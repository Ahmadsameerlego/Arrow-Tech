<template>
  <div class="container mx-auto mt-[750px] mb-40 grid md:grid-cols-2 grid-cols-1 items-center gap-y-5">
    <div class="order-2 md:order-1 space-y-8">
      <div class="space-y-3">
        <h2 class="animated wow fadeInRight font-bold text-3xl mb-2" data-wow-duration="1.3s" data-wow-delay="0s">
          من نحن
        </h2>
        <p class="animated wow fadeInRight text-primary text-xl leading-9" data-wow-duration="1.3s" data-wow-delay="0s">
          تؤمن لك Arrow Tech قوة الابتكار والإبداع في عالم البرمجة وتقنية
          المعلومات،وفريق تطوير يفكر معك برؤية مستقبلية وشغف بالتكنولوجيا
          والتسويق وانتاج المحتوى، نحن هنا لنقدم لك الأفضل.
        </p>
      </div>
      <div class="animated wow fadeInRight" data-wow-duration="1.3s" data-wow-delay="0s">
        <NuxtLink to="/About_us" class="btn-base">المزيد</NuxtLink>
      </div>
    </div>
    <div class="order-1 md:order-2 animated wow zoomIn" data-wow-duration="1.3s" data-wow-delay="0s">
      <section class="relative">
        <div id="carousel">
          <div id="slider">
            <input type="radio" class="mb-5" v-for="(slide, index) in slides" :key="index" :id="`s${index + 1}`" name="slider"
              :checked="index === currentSlide" @change="setCurrentSlide(index)" />
            <label v-for="(slide, index) in slides" :key="index" :for="`s${index + 1}`" :id="`slide${index + 1}`" :style="{ backgroundImage: `url(${slide.src})` }" class="bg-cover">
            </label>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const slides = ref([
  { src: "/slide1.jfif", text: "slide1" },
  { src: "/slide2.jfif", text: "slide2" },
  { src: "/slide3.jfif", text: "slide3" }

]);

const currentSlide = ref(1); // Start with the third slide (index 2)
const setCurrentSlide = (index) => {
  currentSlide.value = index;
};
</script>

<style scoped>
/*[type="radio"] {
  display: none;
}*/

#slider {
  height: 20.5vw;
 /* width: 60%;*/
  position: relative;
  /*perspective: 1000px;
  transform-style: preserve-3d;*/
}

#slider label {
  margin: auto;
  width: 50%;
  min-height: 20vw;
  border-radius: 30px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.4s ease;
}

#slider img {
  border-radius: 24px;
}

#s3:checked~#slide1{
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37); */
  transform: translate3d(-50%, 0, -200px);
}

#s2:checked~#slide1 {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2); */
  transform: translate3d(-50%, 0, -200px);
}

#s1:checked~#slide1,
#s2:checked~#slide2,
#s3:checked~#slide3
{
  /* box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19); */
  transform: translate3d(0, 0, 0);
}

#s1:checked~#slide2,
#s2:checked~#slide3,
#s3:checked~#slide1 {
  /* box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2); */
  transform: translate3d(50%, 0, -200px);
}

#s1:checked~#slide3 {
  /* box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37); */
  transform: translate3d(50%, 0, -200px);
}

.btn-main {
  width: 250px;
  font-size: 24px;
  height: 60px;
}

#slide3{
  width: 490px;
  height: 380px
}

#slide2{
  width: 436px;
  height: 330px;
  margin-top: 20px !important;
}
#slide1{
  width: 379px;
  height: 280px;
  margin-top: 40px !important;
}

@media (max-width: 992px) {
  #slider label img {
    border-radius: 14px;
  }

  .btn-main {
    width: 190px;
    font-size: 18px;
    height: 40px;
    border-radius: 12px;

  }
}

@media (max-width: 576px) {
  #slider label {
    width: 47vw;
  }

  #slider label img {
    border-radius: 12px;
  }

}

@media (max-width: 450px) {
  .textslide {
    font-size: 12px;
    padding: 10px;
  }
}
</style>