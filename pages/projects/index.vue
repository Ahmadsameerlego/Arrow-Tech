<template>
  <title-section title="أعمالنا" />
  <div class="mt-[300px] space-y-12">
    <div class="w-[90%] mx-auto animated wow fadeInRight " 
    data-wow-duration="1.3s"
    data-wow-delay="0s">
      <img alt="line" src="/line3.png" class="ms-3 mb-2" />
      <p class="text-[#6CCABA] text-[17px]">أعمالنا</p>
    </div>
    <works-section :items="item1" />
    <works-section :items="item2" />
  </div>
</template>

<script setup>
const item1 = {
  title: "أعمال البرمجيات",
  image: "/programming.png",
  link: "programming"
};

const item2 = {
  title: "أعمال التسويق",
  image: "/marketing.png",
  link: "marketing"
};
</script>
