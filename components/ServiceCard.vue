<template>
    <div class="m-5">
        <div class="bg-white p-6 shadow-[0px_13px_26px_0px_rgba(0,0,0,0.05)]">
            <NuxtLink :to="`/Services/${item.link}`">
                <img :src="item.image" :alt="item.title" />
                <h3 class="text-[#252B42] font-bold my-4 text-xl">
                    {{ item.title }}
                </h3>
                <p class="text-info">
                    {{ item.desc }}
                </p>
            </NuxtLink>
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