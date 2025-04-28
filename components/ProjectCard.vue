<template>
    <div class="mx-5 relative animated wow zoomIn "
    
    data-wow-duration="1.3s"
    data-wow-delay="0s">
        <div class="min-h-96 bg-no-repeat bg-cover rounded-xl" :style="`background-image: url('${item.image}');`" style="background-size:cover">
        </div>
        <div class="bg-white bg-opacity-75 mt-5 absolute bottom-0 w-full rounded-b-xl py-4 px-5 shadow-[0px_4px_26px_0px_rgba(0,0,0,0.25)]">
            <h3 class="font-bold text-xl mb-3" style="color:#333">
                {{ item.title }}
            </h3>
            <!-- <NuxtLink class="text-secondary" to="#"><span class="inline">تفاصيل المشروع</span> <img src="/left_arrow.png" alt="Left Arrow" class="inline mx-2"/></NuxtLink> -->
        </div>
    </div>
</template>

<script setup>
defineProps({
    item: {
        required: false
    }
})
</script>