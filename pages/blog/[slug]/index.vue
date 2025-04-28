<template>
    <div>
    <title-section title="المدونة" subTitle1="المدونة" :subTitle2="`/ ${route.params.slug}`" subTitle1Link="/blog" />
    <blog-details />
</div>
</template>

<script setup>
const route = useRoute();
</script>