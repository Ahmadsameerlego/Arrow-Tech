<template>
  <div
    class="grid md:grid-cols-2 grid-cols-1 gap-8 mx-60 shadow-[0px_5.19px_14.52px_0px_#080F340A] border-[1.04px] border-[#EFF0F6] rounded-[10px] animated wow zoomIn"
    data-wow-duration="1.3s"
    data-wow-delay="0s"
  >
    <div class="py-8 pr-8">
      <h1 class="text-[20px] font-bold">{{ item.title }}</h1>
      <p class="text-[#A19E9E]">{{ item.desc }}</p>
      <ul class="text-[17px] list-image-[url(/check.png)] list-inside">
        <li>تصميم تطبيقات الجوال</li>
        <li>تصميم موقع إلكتروني</li>
        <li>تصميم المتاجر الإلكترونية</li>
      </ul>
    </div>
    <div
      class="bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url(${item.image})` }"
    ></div>
  </div>
</template>
<script setup>
defineProps({
  item: {
    required: false,
  },
});
</script>
