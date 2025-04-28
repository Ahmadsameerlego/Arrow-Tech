<template>
    <title-section title="المدونة" />
    <div class="mt-[300px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
    <template v-for="item, i in items" :key="i">
        <Article :item="item" />
    </template>
    </div>
</template>

<script setup>
const items = ref([
    {
        image: '/blog1.jfif',
        type: "تطوير",
        title: "العروض التقديمية لمراجعة تجربة المستخدم",
        desc: "كيف يمكنك إنشاء عروض تقديمية مقنعة تبهر زملائك وتثير إعجاب مديريك؟",
        user: "احمد سمير",
        user_img: "/logo.jpg",
        date: "20 يناير 2024",
        slug: "تطوير"
    },
    
])
</script>