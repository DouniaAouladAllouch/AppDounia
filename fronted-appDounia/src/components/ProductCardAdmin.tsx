// src/components/ProductCardAdmin.tsx
import React from "react";
import { type Product } from "../models/Product";

interface Props {
  product: Product;
  onDelete: (id: number) => void;
  onUpdate: (product: Product) => void;
}

const ProductCardAdmin: React.FC<Props> = ({ product, onDelete, onUpdate }) => {
  return (
    <div className="col mb-4">
      <div className="product-item border p-3 rounded shadow-sm bg-white h-100 d-flex flex-column">
        <figure className="mb-3">
          <img
            src={product.imageUrl || "/images/product-placeholder.png"} // placeholder si pas d'image
            alt={product.name}
            className="img-fluid w-100"
            style={{ objectFit: "cover", height: "180px" }}
          />
        </figure>

        <div className="flex-grow-1 d-flex flex-column justify-content-between text-center">
          <div>
            <h3 className="fs-6 fw-semibold">{product.name}</h3>
            <p className="text-muted small mb-1">{product.description}</p>
            <p className="fw-semibold mb-1">Origin: {product.originVillage}</p>
            <p className="fw-semibold text-dark">${product.price.toFixed(2)}</p>
          </div>

          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-warning w-50"
              onClick={() => onUpdate(product)}
            >
              Update
            </button>
            <button
              className="btn btn-danger w-50"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
