<template>
    <div class="mt-[300px]">
    <works-section :items="item1" />
    <works-section :items="item2" />
    </div>
</template>

<script setup>
const item1 = {
    title: "أعمال البرمجيات",
    image: "/programming.png"
}

const item2 = {
    title: "أعمال التسويق",
    image: "/marketing.png"
}
</script>
