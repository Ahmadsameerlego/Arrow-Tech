<template>
  <div class="md:p-12 p-5 shadow-lg rounded-lg md:flex lg:gap-12 md:gap-5 items-center">
    <div class=" m-auto animated wow fadeInRight w-[200px] h-full"
    
    data-wow-duration="1.3s"
    data-wow-delay="0s">
      <img :src="item.image" :alt="item.title" class="w-[100%] h-full" />
    </div>
    <div class="space-y-4 md:w-[70%] animated wow zoomIn"
    
    data-wow-duration="1.3s"
    data-wow-delay="0s">
      <img src="/public/logo-removebg-preview.png" alt="logo" />
      <h2 class="text-3xl font-semibold">{{item.title}}</h2>
      <div class="flex gap-3">
        <button
          class="rounded-full border border-[#6CCABA] w-[150px] text-center py-1 hover:bg-[#6CCABA] hover:text-white text-[#6CCABA]"
          type="button"
        >
          تصميم
        </button>
        <button
          class="rounded-full border border-[#6CCABA] w-[150px] text-center py-1 hover:bg-[#6CCABA] hover:text-white text-[#6CCABA]"
          type="button"
        >
          برمجة وتطوير
        </button>
      </div>
      <p class="text-info">
      {{ item.desc }}
      </p>
      <div>
        <!-- <nuxt-link
          :to="`/projects/programming/${item.slug}`"
          class="text-secondary underline font-semibold text-lg underline-offset-2"
        >
          تفاصيل المشروع
        </nuxt-link> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    item: {
        required: true,
    }
})
</script>