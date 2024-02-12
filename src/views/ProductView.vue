<template>
  <div class="container">
    <img src="../assets/loading.gif" alt="" v-if="loading" class="loading" />

    <div class="row" v-if="!loading">
      <div class="col-lg-6">
        <div class="product-image">
          <img :src="product?.image" alt="" />
        </div>
      </div>
      <div class="col-lg-6 col-description">
        <div class="product-description">
          <h1 class="typography title t-36">{{ product?.title }}</h1>
          <p class="typography body t-18">
            {{ product?.description }}
          </p>

          <div class="product-category">
            {{ product?.category }}
          </div>

          <p class="typography body t-18 product-price">
            {{ formatPrice(product.price) }}
          </p>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary btn-lg" @click="addProduct()">
            Comprar
          </button>
          <p class="feedback-positive" v-show="productAdd">
            Produto adicionado ao carrinho!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductView",
  data() {
    return {
      loading: true,
      product: null as any,
      error: null,
      productAdd: false,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      { immediate: true }
    );
  },
  methods: {
    async fetchData() {
      this.loading = true;
      const req = await fetch(
        `https://fakestoreapi.com/products/${this.$route.params.id}`
      );
      const data = await req.json();
      this.product = data;

      this.loading = false;
    },

    formatPrice(value: number) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    addProduct() {
      store.commit("adicionarProduto", this.product);
      this.productAdd = true;
    },
  },
});
</script>

<style scoped lang="scss">
.row {
  align-items: center;
}
.product-image {
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  img {
    display: block;
    max-width: 100%;
    width: auto !important;
    max-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    object-position: center;
  }
}

.product-price {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: var(--color-tertiary);
}

.product-description {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
}

.product-category {
  display: inline-flex;
  background: var(--color-secondary);
  border-radius: 50px;
  text-align: center;
  font-size: 12px;
  padding: 0 8px;
  width: auto;
  width: fit-content;
  margin-bottom: 8px;
  color: var(--color-neutral-2);
}

.feedback-positive {
  color: var(--color-secondary);
  font-size: 13px;
  margin-top: 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.col-description {
  position: relative;
  padding-bottom: 43px;
}
</style>
