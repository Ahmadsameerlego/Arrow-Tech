<template>
  <div class="container mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-20 mb-60">
    <div v-for="item,i in items" :key="i">
        <ValuesCard :item="item" />
    </div>
  </div>
</template>

<script setup>
const items= ref([
    {
        image: '/card.png',
        title: "رؤيتنا",
        desc: "لأننا نسعى بكل شغف لتقديم العديد من الحلول التقنية الحديثة ذات الجودة الكاملة بأفضل التكاليف, والتي تجعلك فريداً بين المنافسين ومتميزا في الطرح, مع ترك انطباع دائم"
    },
    {
        image: '/card2.png',
        title: "رسالتنا",
        desc: "نبني الحلول التقنية المبتكرة التي تفتح آفاقاً جديدة وتلبي تطلعات عملائنا بالدقة والابتكار في كل مرة"
    },
    {
        image: '/card3.png',
        title: "قيمنا",
        desc: "نحن نعيد تعريف مفهوم الابتكار التقني، من خلال خلق حلول إبداعية فريدة تترك بصمة مميزة ومستدامة. نؤمن بأن وراء كل نجاح هدف واضح ورؤية محددة، ونحن هنا لنكون دعمكم وشريككم"
    },
])
</script>
