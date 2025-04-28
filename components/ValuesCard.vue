<template>
    <div :class="`w-[397.2px] h-[289.85px] object-cover relative mx-auto mt-20 animated wow zoomIn`"
    
    data-wow-duration="1.3s"
    data-wow-delay="0s"
    :style="`background-image: url('${item.image}');`">
        <div class="absolute bg-white -bottom-14 w-[80%] rounded-md p-6 space-y-2 shadow-[0px_4px_54px_0px_rgba(0,0,0,0.25)] h-[214px]">
            <h3 class="text-secondary text-xl">
                {{item.title}}
            </h3>
            <p class="text-primary">
                {{ item.desc }}
            </p>
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