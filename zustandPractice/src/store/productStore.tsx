import { create } from "zustand";
import type { product, productStore } from "../types/productFetchApi";
import axios from "axios";
import { persist } from "zustand/middleware";

export const useProductStore = create<productStore>(
  persist((set) => ({
    productData: [],
    loading: false,

    // ftech the products
    fetchProducts: async () => {
      set({ loading: true });
      const response = await axios.get<product[]>(
        "https://fakestoreapi.com/products/",
      );
      set({ productData: response.data, loading: false });
    },
  }),
{
  name : 'Garv'
}),
);
