<template>
  <div>
    <NuxtLoadingIndicator color="#6890AD" />
    <NuxtLayout name="layout">
      <NuxtPage />
    </NuxtLayout>
    <NuxtSnackbar />
  </div>
</template>


<script setup>
if (import.meta.client) {
  const wow = new window.WOW();
  wow.init();
}
</script>