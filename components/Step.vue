<template>
    <div class="flex mx-3 my-6 animated wow zoomIn "
    
    data-wow-duration="1.3s"
    data-wow-delay="0s">
        <div :class="item.bg" class="rounded-xl p-3 mx-3 self-start">
            <img :src="item.image" :alt="item.title"/>
        </div>
        <div class="mt-2">
            <h3 class="font-bold">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
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