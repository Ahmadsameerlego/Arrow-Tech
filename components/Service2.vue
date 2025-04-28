<template>
  <div
    class="bg-[#3BB9E3] bg-[url('/public/steps_bg.png')] bg-cover text-white min-h-[429px] flex flex-col justify-center items-center py-5"
  >
    <h2
      class="text-center text-2xl font-semibold animated wow fadeInRight"
      data-wow-duration="1.3s"
      data-wow-delay="0s"
    >
      خدمات البرمجيات
    </h2>
    <div
      class="md:w-[70%] mx-auto mt-12 animated wow zoomIn"
      data-wow-duration="1.3s"
      data-wow-delay="0s"
    >
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <!-- <p>{{ route.fullPath }} aaaaaa</p> -->
        <NuxtLink :to="`${route.fullPath}/app`" class="space-y-8">
          <div
            class="mx-auto bg-white w-[111px] h-[111px] rounded-md flex items-center justify-center"
          >
            <img
              src="/public/app.png"
              alt="app"
              class="w-[62.97px] h-[62.97px]"
            />
          </div>
          <p class="text-center">تصميم تطبيقات الجوال</p>
        </NuxtLink>
        <NuxtLink :to="`${route.fullPath}/website`" class="space-y-8">
          <div
            class="mx-auto bg-white w-[111px] h-[111px] rounded-md flex items-center justify-center"
          >
            <img
              src="/public/website.png"
              alt="website"
              class="w-[62.97px] h-[62.97px]"
            />
          </div>
          <p class="text-center">تصميم موقع الكتروني</p>
        </NuxtLink>
        <NuxtLink :to="`${route.fullPath}/shop`" class="space-y-8">
          <div
            class="mx-auto bg-white w-[111px] h-[111px] rounded-md flex items-center justify-center"
          >
            <img
              src="/public/ecommerce.png"
              alt="ecommerce"
              class="w-[62.97px] h-[62.97px]"
            />
          </div>
          <p class="text-center">تصميم المتاجر الالكترونية</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
</script>
