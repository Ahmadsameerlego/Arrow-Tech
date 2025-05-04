<template>
  <header class="w-full z-[10] relative" dir="rtl"
    :class="{ 'h-screen': isNavbarOpen, 'h-[1200px] p-[10px] bg-white': isNavbarOpen }">
    <!-- Navbar -->
    <nav class="h-full w-full p-2">
      <div class="flex flex-wrap justify-between text-white py-4 md:mx-16 mx-4">
        <div class="flex">
          <div class="px-2">
            <NuxtLink to="tel:+96612345678" class="text-right">201013746111</NuxtLink> <img class="inline" alt="Phone Icon" src="/phone_icon.png"/>
          </div>
          <div class="border-r-2 px-2">
            <NuxtLink to="mailto:arroowtech@gmail.com">arroowtech@gmail.com</NuxtLink> <img class="inline" alt="Email Icon" src="/email_icon.png"/>
          </div>
          <div class="border-r-2 px-2">
            <span>Egypt - Cairo <img class="inline" alt="Location Icon" src="/location_icon.png"/></span>
          </div>
        </div>
        <p>
          مرحبا بك ، تحتاج مساعدة ؟
        </p>
      </div>
      <hr class="mx-16">

      <div class="flex justify-between mx-16 items-center">
        <NuxtLink @click.native="closeNavbar()" class="justify-right" to="/">
          <img src="/logo-removebg-preview.png" alt="Arrow Tech Logo" class="logo" />
        </NuxtLink>
        <div>
          <!-- Navbar toggle button for small screens -->
          <button @click="toggleNavbar" :class="{ 'nav-black': isNavbarOpen }"
            class="block lg:hidden text-white focus:outline-none">
            <svg class="h-16 w-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <!-- Navbar links -->
          <ul :class="{ 'hidden': !isNavbarOpen }"
            class="lg:flex lg:items-center lg:justify-center mlgd:flex-1 text-xl">
            <li class="mt-12 lg:my-0">
              <NuxtLink @click.native="closeNavbar()" class="text-black lg:text-white hover:text-[#9a74f5] lg:px-5"
                to="/" :class="$route.path === '/' ? 'active_tab' : 'inactive'">
                الرئيسية
              </NuxtLink>
            </li>
            <li class="my-5 lg:my-0">
              <NuxtLink @click.native="closeNavbar()" class="text-black lg:text-white hover:text-[#9a74f5] lg:px-5"
                to="/About_us"
                :class="$route.path === '/About_us' ? 'active_tab' : 'inactive'">
                من نحن</NuxtLink>
            </li>
            <li class="my-5 lg:my-0">
              <NuxtLink @click.native="closeNavbar()" class="text-black lg:text-white hover:text-[#9a74f5] md:px-5"
                to="/Services"
                :class="$route.path === '/Services' ? 'active_tab' : 'inactive'">
                خدماتنا</NuxtLink>
            </li>
            <li class="my-5 lg:my-0">
              <NuxtLink @click.native="closeNavbar()" class="text-black lg:text-white hover:text-[#9a74f5] md:px-5"
                to="/projects"
                :class="$route.path === '/projects' ? 'active_tab' : 'inactive'">
                أعمالنا</NuxtLink>
            </li>
            <li class="my-5 lg:my-0">
              <NuxtLink @click.native="closeNavbar()" class="text-black lg:text-white hover:text-[#9a74f5] md:px-5"
                to="/blog" :class="$route.path === '/blog' ? 'active_tab' : 'inactive'">
                المدونة
              </NuxtLink>
            </li>
            <li class="my-5 lg:my-0">
              <NuxtLink @click.native="closeNavbar()" class="text-black lg:text-white hover:text-[#9a74f5] md:px-5"
                to="/Contact_us"
                :class="$route.path === '/Contact_us' ? 'active_tab' : 'inactive'">
                تواصل معنا</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="flex-grow w-full h-full">
    <slot />
  </main>
  <footer class="text-[#757575] p-14 text-center" dir="rtl">
    <hr class="m-5" />
    <div class="flex flex-col md:flex-row justify-between w-full">
      <div class="w-full md:w-2/6 mb-8 md:ml-8 md:mb-0">
        <img alt="Arrow Tech Logo" src="/logo-removebg-preview.png" class="logo" />
        <p class="thin_font lg:w-96 text-[15px] leading-8">
          واحدة من أفضل شركات البرمجة في المملكة العربية السعودية ومنطقة الشرق الأوسط والمتخصصة في تصميم وتطوير المواقع
          والمتاجر الإلكترونية و تطوير تطبيقات الجوال وأنظمة الويب المختلفة
        </p>
        <div class="flex gap-3 mt-5 mb-6 justify-center md:justify-start">
          <NuxtLink to="#" external target="_blank"><img src="/tiktok.png" alt="Tiktok"/></NuxtLink>
          <NuxtLink to="#" external target="_blank"><img src="/snapchat.png" alt="Snapchat"/></NuxtLink>
          <NuxtLink to="#" external target="_blank"><img src="/linkedin.png" alt="Linkedin"/></NuxtLink>
          <NuxtLink to="#" external target="_blank"><img src="/x.png" alt="X"/></NuxtLink>
          <NuxtLink to="#" external target="_blank"><img src="/instagram.png" alt="Instagram"/></NuxtLink>
          <NuxtLink to="#" external target="_blank"><img src="/facebook.png" alt="Facebook"/></NuxtLink>
        </div>
      </div>
      <div class="w-full md:w-1/6 mt-5 md:mt-24">
        <h2 class="text-[#fff] font-bold mb-4 text-[20px]">حول Arrow Tech</h2>
        <NuxtLink to="/About_us" class="block thin_font text-[15px]">من نحن</NuxtLink>
        <NuxtLink to="/Blog" class="block mt-3 thin_font text-[15px]">المدونة</NuxtLink>
      </div>
      <div class="w-full md:w-1/6 mt-12 md:mt-24">
        <h2 class="text-[#fff] font-bold mb-4 text-[20px]">خدماتنا</h2>
        <NuxtLink to="#" class="block thin_font text-[15px]">خدمات البرمجيات</NuxtLink>
        <NuxtLink to="#" class="block mt-3 thin_font text-[15px]">خدمات التسويق</NuxtLink>
        <NuxtLink to="#" class="block mt-3 thin_font text-[15px]">الواقع الافتراضي VR</NuxtLink>
        <NuxtLink to="#" class="block mt-3 thin_font text-[15px]">التصوير والفعاليات</NuxtLink>
      </div>
      <div class="w-full md:w-1/6 mt-12 md:mt-24">
        <h2 class="text-[#fff] font-bold mb-4 text-[20px]">أعمالنا</h2>
        <NuxtLink to="#" class="block thin_font text-[15px]">أعمال البرمجيات</NuxtLink>
        <NuxtLink to="#" class="block mt-3 thin_font text-[15px]">أعمال التسويق</NuxtLink>
      </div>
      <div class="w-full md:w-1/6 mt-12 md:mt-24">
        <h2 class="text-[#fff] font-bold mb-4 text-[20px]">تواصل معنا</h2>
        <NuxtLink to="tel:0537262636" class="block thin_font text-[15px]">0537262636</NuxtLink>
        <NuxtLink to="mailto:arroowtech@gmail.com" class="block mt-3 thin_font text-[15px]">arroowtech@gmail.com</NuxtLink>
        <div class="text-[15px] mt-3">القاهره ، مصر</div>
      </div>
    </div>
    <div>
      <hr class="m-5" />
      <div>
        <p class="text-center thin_font">© جميع الحقوق محفوظة لمؤسسة   Arrow Tech</p>
        <div></div>
      </div>
    </div>
  </footer>
</template>


<script setup>
const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
  toggleBodyClass();
};

const toggleBodyClass = () => {
  if (isNavbarOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};

const closeNavbar = () => {
  isNavbarOpen.value = false;
  toggleBodyClass();
};
</script>