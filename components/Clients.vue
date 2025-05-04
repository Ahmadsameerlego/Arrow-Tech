<template>
    <div class="bg-[#D9D9D926] py-28 px-20">
        <h1 class="text-center text-4xl font-bold mb-12 animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">عملاء نعتز بثقتهم</h1>
        <div class="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 animated wow zoomIn"
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">
            <div v-for="item, i in items" :key="i">
                <img :alt="item.name" class="w-[200px] h-[150px] mx-4" :src="item.image"/>
            </div>
        </div>
    </div>
</template>
<script setup>
const items = ref([
    {
        image: '/study.jpeg',
        name: "الاسم",
    },
    {
        image: '/p3.jpg',
        name: "الاسم",
    },
    // {
    //     image: '/logo3.png',
    //     name: "الاسم",
    // },
    // {
    //     image: '/logo4.png',
    //     name: "الاسم",
    // },
    // {
    //     image: '/logo5.png',
    //     name: "الاسم",
    // },
    // {
    //     image: '/logo6.png',
    //     name: "الاسم",
    // },
    // {
    //     image: '/logo7.png',
    //     name: "الاسم",
    // },
])
</script>