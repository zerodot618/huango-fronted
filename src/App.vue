<script setup lang="ts">
import TheApplicationBar from "./components/ui/TheApplicationBar.vue";
</script>

<template>
  <div id="app">
    <TheApplicationBar />
    <router-view class="content" />
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  padding-top: 5.5vh;
  padding-left: 10%;
}
</style>
