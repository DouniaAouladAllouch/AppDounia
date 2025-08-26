import { type Product } from "../models/Product";

export const getProducts = async (): Promise<Product[]> => {
  return [
    { id: 1, name: "Laptop", price: 1200, originVillage: "", description: "" },
    { id: 2, name: "Smartphone", price: 800, originVillage: "", description: "" },
  ];
};
