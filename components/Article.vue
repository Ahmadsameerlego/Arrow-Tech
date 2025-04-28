<template>
    <div class="m-5">
        <div class="bg-white p-5 shadow-[0px_13px_26px_0px_rgba(0,0,0,0.05)] animated wow zoomIn"
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">
            <img :src="item.image" :alt="item.title" class="mb-4"/>
            <span class="px-4 text-[#3BB9E3] text-[14px] font-bold">{{item.type}}</span>
            <NuxtLink :to="`/blog/${item.slug}`" class="text-[#252B42] font-bold text-xl flex px-4 pt-3">
                <span>{{item.title}}</span>
                <i class="fa-regular fa-arrow-right rotate-[315deg]" style="font-family: 'Fontawesome';"></i>
            </NuxtLink>
            <p class="text-info mt-4">
                {{ item.desc }}
            </p>
            <div class="flex mt-3">
                <div class="bg-[#C7B9DA] w-[40px] h-[40px] rounded-full ml-3">
                    <img :alt="item.user" :src="item.user_img" class="rounded-full"/>
                </div>
                <div>
                    <p class="text-[#101828] font-bold text-[14px]">{{item.user}}</p>
                    <p class="text-[#667085] text-[14px]">{{item.date}}</p>
                </div>
            </div>
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