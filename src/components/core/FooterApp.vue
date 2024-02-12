<template>
  <footer class="footer-app">
    <p class="typography text-align-center">
      Vue Shopping - Todos os direitos reservados
    </p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-app {
  padding: 10px 0;
  color: var(--color-neutral);
  background: var(--color-tertiary);
  margin-top: -40px;
  height: 40px;
  text-align: center;
  font-size: 12px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
