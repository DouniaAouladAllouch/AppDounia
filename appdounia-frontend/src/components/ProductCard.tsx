// src/components/ProductCard.tsx
import { type Product } from "../types/Product";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-green-600 font-semibold">{product.price} €</p>
      <p className="text-sm text-gray-500">Origine: {product.originVillage}</p>
    </div>
  );
};
