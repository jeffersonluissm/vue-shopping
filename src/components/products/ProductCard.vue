<template>
  <div class="product-card">
    <router-link :to="'/produto/' + product?.id">
      <div class="image">
        <img :src="product?.image" alt="" />
      </div>

      <div class="product-info">
        <div class="product-category">
          {{ product?.category }}
        </div>

        <div class="product-name">
          {{ product?.title }}
        </div>

        <div class="product-price">
          {{ formatPrice(product?.price) }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IProduct } from "../../models/IProduct";
import { PropType } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: Object as PropType<IProduct>,
  },
  methods: {
    formatPrice(value: number) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
});
</script>

<style scoped lang="scss">
.product-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
  z-index: 3;
  transition: ease-in-out 0.2s;
  border: 1px solid var(--color-neutral-2);
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    z-index: 2;
  }

  a {
    text-decoration: none;
  }

  .image {
    position: relative;
    overflow: hidden;
    margin: 16px;
    max-height: 200px;

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

  &:hover {
    box-shadow: 0 4px 8px var(--color-neutral-2);
  }

  .product-price {
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: var(--color-tertiary);
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
    align-self: center;
    margin-bottom: 8px;
    color: var(--color-neutral-2);
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 16px;

  .product-name {
    color: var(--color-black);
    flex-grow: 1;
    max-height: 45px;
    font-size: 1rem;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
