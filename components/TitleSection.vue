<template>
  <div class="text-white bg-cover bg-center absolute top-0 pt-[250px] home_s1 w-full" dir="rtl">
    <div class="pb-28 animated wow zoomIn "
    
    data-wow-duration="1.3s"
    data-wow-delay="0s">
      <h1 class="text-4xl font-bold text-center">
        {{ title }}
      </h1>
      <p class="text-xl text-center mt-3"><NuxtLink :to="subTitle1Link">{{ subTitle1 }}</NuxtLink> {{subTitle2}} {{subTitle3}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle1: {
      type: String,
      default: ""
    },
    subTitle1Link: {
      type: String,
      default: ""
    },
    subTitle2: {
      type: String,
      default: ""
    },
    subTitle2Link: {
      type: String,
      default: ""
    },
    subTitle3: {
      type: String,
      default: ""
    },
  }
}
</script>