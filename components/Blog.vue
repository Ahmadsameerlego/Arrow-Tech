<template>
    <section class="w-full">
        <div class="container mx-auto mt-32 mb-60 px-10">
        <h1 class="text-4xl font-bold mb-12 animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">المدونة</h1>
        <p class="text-[#A19E9E] mb-4 animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">يمكنك متابعة أحدث الأخبار والمقالات الخاصة بمجال تطوير البرمجيات والتسويق الالكتروني
        </p>
        <div class=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div v-for="item, i in items" :key="i">
                <Article :item="item" />
            </div>
        </div>
        <div class="pt-4 mt-8 text-center">
            <button class="btn-base text-xl">المزيد من المقالات</button>
        </div>
    </div>
    </section>
   

</template>

<script setup>
const items = ref([
    {
        image: '/blog1.jfif',
        type: "تطوير",
        title: "العروض التقديمية لمراجعة تجربة المستخدم",
        desc: "كيف يمكنك إنشاء عروض تقديمية مقنعة تبهر زملائك وتثير إعجاب مديريك؟",
        user: "احمد سمير",
        user_img: "/blog_user.png",
        date: "20 يناير 2024"
    },
    
])
</script>