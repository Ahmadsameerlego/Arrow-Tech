<template>
    <div class="mt-[300px] services_slider">
        <p class="text-[#3BB9E3] font-bold text-center animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">البرمجيات</p>
        <h1 class="font-bold text-center text-[24px] mt-4 mb-12 animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">نقدم لك أفضل خدمات البرمجيات</h1>
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :slides-per-view="1" :loop="true" :navigation="true" :autoplay="{
            delay: 5000,
            disableOnInteraction: true,
        }" :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-100%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }">
            <SwiperSlide v-for="item in items" class="rounded-md pb-16">
                <ServiceDetailsCard :item="item" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup>
const items = ref([
    {
        image: '/card2.png',
        title: "تتمتع Arrow Tech بخبرة ممتدة ومتنوعة في مجال تطوير البرمجيات",
        desc: "نخصص جهودنا في تطوير وإنشاء مواقع إلكترونية متطورة وتطبيقات مبتكرة للهواتف الذكية، وبرمجيات مخصصة تلبي احتياجات عملائنا. نتميز بقدرتنا على تصميم المتاجر الإلكترونية بطريقة تجمع بين الجمالية والفعالية، مع التركيز على توفير تجربة مستخدم سلسة وجذابة.",
        list1 : "تصميم تطبيقات الجوال",
        list2 : "تصميم موقع إلكتروني",
        list3 : "تصميم المتاجر الإلكترونية"
    },
    {
        image: '/card.png',
        title: "اسم المشروع",
        desc: "نخصص جهودنا في تطوير وإنشاء مواقع إلكترونية متطورة وتطبيقات مبتكرة للهواتف الذكية، وبرمجيات مخصصة تلبي احتياجات عملائنا. نتميز بقدرتنا على تصميم المتاجر الإلكترونية بطريقة تجمع بين الجمالية والفعالية، مع التركيز على توفير تجربة مستخدم سلسة وجذابة.",
        list1 : "تصميم تطبيقات الجوال",
        list2 : "تصميم موقع إلكتروني",
        list3 : "تصميم المتاجر الإلكترونية"
    },
    {
        image: '/card3.png',
        title: "اسم المشروع",
        desc: "نخصص جهودنا في تطوير وإنشاء مواقع إلكترونية متطورة وتطبيقات مبتكرة للهواتف الذكية، وبرمجيات مخصصة تلبي احتياجات عملائنا. نتميز بقدرتنا على تصميم المتاجر الإلكترونية بطريقة تجمع بين الجمالية والفعالية، مع التركيز على توفير تجربة مستخدم سلسة وجذابة.",
        list1 : "تصميم تطبيقات الجوال",
        list2 : "تصميم موقع إلكتروني",
        list3 : "تصميم المتاجر الإلكترونية"
    },
])
</script>