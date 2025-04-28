<template>
    <div class="mx-3 my-6 animated wow zoomIn"
    
    data-wow-duration="1.3s"
    data-wow-delay="0s">
        <div :class="item.bg" class="p-3 shadow-[0px_4px_26px_0px_#0000001A] rounded-full m-auto bg-white w-[252px] h-[252px]">
            <img :src="item.image" :alt="item.name" class="rounded-full w-[230px] h-[230px] object-cover"/>
        </div>
        <div class="mt-5">
            <h3 class="font-bold text-xl text-center">{{ item.name }}</h3>
            <p class="mt-2 text-center">({{ item.position }})</p>
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