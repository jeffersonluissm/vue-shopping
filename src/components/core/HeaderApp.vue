<template>
  <header class="header-app">
    <div class="container d-flex">
      <router-link to="/" class="header-app-logo">
        <img src="../../assets/logo.png" alt="" />
      </router-link>
      <div class="header-app-search"></div>
      <div class="header-app-actions">
        <router-link to="/carrinho" class="cart" title="Carrinho">
          <span class="material-symbols-outlined"> shopping_cart </span>
          <span class="cart-quantity">{{ produtosLength }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store/store";

export default defineComponent({
  name: "HeaderApp",
  computed: {
    produtosLength() {
      return store.getters.totalProducts;
    },
  },
});
</script>

<style scoped lang="scss">
.header-app {
  padding: 20px;
  border-bottom: 2px solid var(--color-neutral-2);
  -webkit-box-shadow: 0 10px 15px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 15px 2px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-logo {
    img {
      height: 80px;
    }
  }
}

.cart {
  display: flex;
  text-decoration: none;
  color: var(--color-secondary);
  gap: 8px;

  .cart-quantity {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    line-height: 23px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    vertical-align: middle;
    color: var(--color-neutral);
    background-color: var(--color-secondary);
  }
}
</style>
