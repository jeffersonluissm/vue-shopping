<template>
  <div class="container">
    <h1 class="typography title bold t-36 text-center p-bottom-xxs">
      Meu Carrinho
    </h1>
    <div class="product-gallery">
      <ProductCard
        :product="product"
        v-for="product in produtos"
        :key="product.id"
      ></ProductCard>
    </div>

    <h2 class="typography title bold t-24 text-center p-bottom-xxs">
      <strong>Valor Total:</strong> {{ formatPrice(valorTotal()) }}
    </h2>

    <div class="container-button">
      <router-link to="/" class="btn btn-primary">
        Adicionar mais produtos
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store/store";
import { defineComponent } from "vue";
import ProductCard from "../components/products/ProductCard.vue";
import type { IProduct } from "@/models/IProduct";

export default defineComponent({
  name: "CartView",
  components: {
    ProductCard,
  },
  computed: {
    produtos() {
      return store.getters.allProducts as IProduct[];
    },
  },
  methods: {
    formatPrice(value: number) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    valorTotal() {
      return this.produtos.reduce((total, atual) => total + atual.price, 0);
    },
  },
});
</script>

<style scoped lang="scss">
.product-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  .product-card {
    display: flex;
    height: auto;
    box-sizing: border-box;
    flex: 1 0 48%;

    @media (min-width: 992px) {
      flex: 0 1 200px;
    }
  }
}

.container-button {
  text-align: center;
}
</style>
