<template>
  <div>
    <img src="../../assets/loading.gif" alt="" v-if="loading" class="loading" />

    <div class="product-gallery" v-else>
      <ProductCard
        :product="product"
        v-for="product in products"
        :key="product.id"
      ></ProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "./ProductCard.vue";
import { IProduct } from "../../models/IProduct";

export default defineComponent({
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [] as IProduct[],
      loading: true,
    };
  },
  methods: {
    async getProducts() {
      const req = await fetch("https://fakestoreapi.com/products");
      const data = await req.json();
      this.products = data as IProduct[];
      this.loading = false;
    },
  },
  mounted() {
    this.getProducts();
  },
});
</script>

<style scoped lang="scss">
.product-gallery {
  display: flex;

  flex-wrap: wrap;
  gap: 16px;
  .product-card {
    display: flex;
    height: auto;
    box-sizing: border-box;
    flex: 1 0 48%;

    @media (min-width: 992px) {
      flex: 1 0 23%;
    }
  }
}
</style>
