<template>
  <div class="wrap">
    <HeaderApp></HeaderApp>
    <main>
      <RouterView />
    </main>
  </div>

  <FooterApp></FooterApp>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderApp from "./components/core/HeaderApp.vue";
import FooterApp from "./components/core/FooterApp.vue";
</script>

<style scoped lang="scss">
main {
  padding: 40px 20px 70px 20px;
}
</style>
