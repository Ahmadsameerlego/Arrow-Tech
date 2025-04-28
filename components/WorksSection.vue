<template>
  <div
    data-wow-duration="1.3s"
    data-wow-delay="0s"
    :class="`bg-[url(${items.image})] bg-cover h-[632px] max-w-[1236px] mx-auto shadow-xl rounded-lg animated wow zoomIn`"
    :style="{ backgroundImage: `url(${items.image})` }"
  >
    <nuxt-link :to="`/projects/${items.link}`">
      <h3
        class="text-5xl font-semibold text-white flex items-center h-full justify-center"
      >
        {{ items.title }}
      </h3>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: true,
  },
});
</script>
