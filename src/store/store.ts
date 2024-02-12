import type { IProduct } from "@/models/IProduct";
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    adicionarProduto(state: any, product: IProduct) {
      state.products.push(product);
    },
  },
  getters: {
    totalProducts(state) {
      return state.products.length;
    },
    allProducts(state) {
      return state.products;
    },
  },
});
