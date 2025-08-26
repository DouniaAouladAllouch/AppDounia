// src/services/productService.ts
import axios from "axios";
import { type Product } from "../types/Product";

const API_URL = "https://localhost:7047/api/Product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(API_URL);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await axios.get<Product>(`${API_URL}/${id}`);
  return response.data;
};

// Tu peux ajouter create, update, delete si nécessaire
