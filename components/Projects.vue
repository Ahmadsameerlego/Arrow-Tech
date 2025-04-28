<template>
    <div class="catergories_slider container mx-auto mb-36">
        <h1 class="text-[36px] font-bold mb-7 mx-5 animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">أعمالنا</h1>
        <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]" :breakpoints="{
            240: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }" :loop="true" :navigation="true" :autoplay="{
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
                <ProjectCard :item="item" />
            </SwiperSlide>
        </Swiper>
        <div class="text-left animated wow fadeInRight "
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">
            <NuxtLink to="#"><i class="fa-solid fa-arrow-left text-secondary mx-5 text-[50px]"></i></NuxtLink>
        </div>
    </div>
</template>

<script setup>
const items = ref([
    {
        image: '/coffee.png',
        title: "CoffeeKies",
    },
    // {
    //     image: '/p2.jpg',
    //     title: "مبادرات الخير",
    // },
    {
        image: '/p3.jpg',
        title: "مبادرات الخير",
    },
    {
        image: '/study.jpeg',
        title: "StudyPedia",
    },
])
</script>