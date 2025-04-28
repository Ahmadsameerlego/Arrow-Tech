<template>
    <div :class="`flex ${contactClass?'bg-white':'bg-[#C4C4C417]'}`">
        <div class="w-[500px] bg-center bg-[url('/contact_us.jfif')] bg-cover bg-no-repeat hidden md:block
        animated wow fadeInRight 
        " :class="contactClass"
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">
            
        </div>
        <div class="m-11 md:mr-30 mx-auto animated wow fadeInLeft"
        
    data-wow-duration="1.3s"
    data-wow-delay="0s">
            <h1 class="text-3xl font-bold mb-12"
            >تواصل معنا الآن</h1>
            <form class="w-[500px]">
                <div class="flex gap-3 ">
                    <input placeholder="الاسم الأول" class="mb-5  w-1/2 bg-transparent border-[#C4C4C4] border-[1px] rounded-[5px] p-3 text-[#757575]"/>
                    <input placeholder="الاسم الأخير" class="mb-5 w-1/2  bg-transparent border-[#C4C4C4] border-[1px] rounded-[5px] p-3 text-[#757575]"/>
                </div>
                <div>
                    <input placeholder="رقم الجوال" class="mb-5 w-full bg-transparent border-[#C4C4C4] border-[1px] rounded-[5px] p-3 text-[#757575]"/>
                </div>
                <div>
                    <input placeholder="موضوع الرسالة" class="mb-5 w-full bg-transparent border-[#C4C4C4] border-[1px] rounded-[5px] p-3 text-[#757575]"/>
                </div>
                <div>
                    <textarea placeholder="اكتب رسالتك هنا .." class="w-full bg-transparent border-[#C4C4C4] border-[1px] rounded-[5px] p-3 text-[#757575]"></textarea>
                </div>
                <div class="pt-4 mt-8 text-left">
                    <NuxtLink to="/Contact_us" class="btn-base text-xl">إرسال</NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
defineProps({
    contactClass: {
        required: false,
    }
})
</script>