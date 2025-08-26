import React from "react";
import { type Product } from "../models/Product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-bold text-lg">ProduitsOui{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Origin: {product.originVillage}</p>
    </div>
  );
};

export default ProductCard;
