<template>
    <div class="text-white bg-[#3BB9E3] bg-[url('steps_bg.png')] pb-24 pt-32 px-8 bg-cover bg-no-repeat">
        <h1 class="text-center text-4xl font-medium animated wow fadeInRight " 
        data-wow-duration="1.3s"
        data-wow-delay="0s">خطوات التعاقد معنا</h1>
        <div class="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 my-12">
            <div v-for="item, i in items" :key="i">
                <Step :item="item" />
            </div>
        </div>
    </div>
</template>
<script setup>
const items = ref([
    {
        image: '/step1.png',
        title: "تواصل معنا",
        desc: "من خلال الاتصال بخدمة العملاء",
        bg: "bg-[#ECEBFF]"
    },
    {
        image: '/step2.png',
        title: "تقديم العرض",
        desc: "نقدم عرض يوضح فكرة المشروع",
        bg: "bg-[#E9FFE3]"
    },
    {
        image: '/step3.png',
        title: "الخطة",
        desc: "نضع خطة تنفيذ كاملة للمشروع",
        bg: "bg-[#D2E6FF]"
    },
    {
        image: '/step4.png',
        title: "مرحلة البناء",
        desc: "نقوم بتنفيذ الخطة الموضحة",
        bg: "bg-[#FFE3DF]"
    },
    {
        image: '/step5.png',
        title: "مرحلة التسليم",
        desc: "من خلال الاتصال بخدمة العملاء",
        bg: "bg-[#4FC1B5]"
    },
    {
        image: '/step2.png',
        title: "الدعم التقني",
        desc: "نقدم عرض يوضح فكرة المشروع",
        bg: "bg-[#E9FFE3]"
    },
    {
        image: '/step5.png',
        title: "مرحلة التسليم",
        desc: "من خلال الاتصال بخدمة العملاء",
        bg: "bg-[#4FC1B5]"
    },
    {
        image: '/step2.png',
        title: "الدعم التقني",
        desc: "نقدم عرض يوضح فكرة المشروع",
        bg: "bg-[#E9FFE3]"
    },
])
</script>