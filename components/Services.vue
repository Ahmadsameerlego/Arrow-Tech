<template>
    <div class="container mx-auto mt-20 mb-60 animated wow zoomIn"
    data-wow-duration="1.3s"
    data-wow-delay="0s">
        <div class="lg:px-48 px-8">
            <h1 class="text-center font-bold text-[30px] mb-4">خدماتنا</h1>
            <p class="text-center text-[#A19E9E] text-[15px] mb-6">
                نقوم بتقديم خدماتنا التي تواكب سرعة تطور العالم وابتكاراته الرقمية
                المختلفة نضمن لك حصولك على افضل خدمة بشكل مميز تحت اشراف فريق متكامل يعمل
                على تقديم أفضل خدمة بأحدث التقنيات
            </p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
  <div v-for="(item, i) in items" :key="i" class="w-full flex justify-center">
    <ServiceCard :item="item" />
  </div>
</div>

    </div>
</template>

<script setup>
const items = ref([
    {
        image: "/s1.png",
        title: "البرمجيات",
        desc: "تتمتع Arrow Tech بخبرة ممتدة ومتنوعة في مجال تطوير البرمجيات، حيث نخصص جهودنا في تطوير وإنشاء مواقع إلكترونية متطورة وتطبيقات مبتكرة للهواتف الذكية،",
        link: "programming"
    },
    {
        image: "/s2.png",
        title: "التسويق الإلكتروني",
        desc: "تتمتع Arrow Tech بخبرة ممتدة ومتنوعة في مجال تطوير البرمجيات، حيث نخصص جهودنا في تطوير وإنشاء مواقع إلكترونية متطورة وتطبيقات مبتكرة للهواتف الذكية،",
        link: "Marketing"
    },
    {
        image: "/s3.png",
        title: "الواقع الافتراضي VR",
        desc: "تتمتع Arrow Tech بخبرة ممتدة ومتنوعة في مجال تطوير البرمجيات، حيث نخصص جهودنا في تطوير وإنشاء مواقع إلكترونية متطورة وتطبيقات مبتكرة للهواتف الذكية،",
        link: "VR"
    },
    
   
]);
</script>
