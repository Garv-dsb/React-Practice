export interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface productStore {
  productData: product[]; // the productData array is the type of the product object that contain this type of the data
  loading: boolean;
  fetchProducts: () => Promise<void>;
}
