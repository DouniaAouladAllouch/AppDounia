// src/components/Home/BestSellingProducts.tsx
import React from "react";

// Importer les images des produits
import prod1 from "../../images/product-thumb-1.png";
import prod2 from "../../images/product-thumb-2.png";
import prod3 from "../../images/product-thumb-3.png";
import prod4 from "../../images/product-thumb-4.png";
import prod5 from "../../images/product-thumb-5.png";
import prod6 from "../../images/product-thumb-6.png";
import prod7 from "../../images/product-thumb-7.png";
import prod8 from "../../images/product-thumb-8.png";
import prod9 from "../../images/product-thumb-9.png";
import prod10 from "../../images/product-thumb-10.png";

// Tableau des produits
const products = [
  { title: "Whole Wheat Sandwich Bread", img: prod1, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Whole Grain Oatmeal", img: prod2, rating: 4.5, reviews: 41, price: 50, oldPrice: 54, discount: 10 },
  { title: "Sharp Cheddar Cheese Block", img: prod3, rating: 4.5, reviews: 32, price: 12, oldPrice: 14, discount: 10 },
  { title: "Organic Baby Spinach", img: prod4, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Organic Spinach Leaves (Fresh Produce)", img: prod5, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Fresh Salmon", img: prod6, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Imported Italian Spaghetti Pasta", img: prod7, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Granny Smith Apples", img: prod8, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Organic 2% Reduced Fat Milk", img: prod9, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
  { title: "Greek Style Plain Yogurt", img: prod10, rating: 4.5, reviews: 222, price: 18, oldPrice: 24, discount: 10 },
];

const BestSellingProducts: React.FC = () => {
  return (
    <section className="pb-5">
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h2 className="section-title">Best Selling Products</h2>
            <a href="#" className="btn btn-primary rounded-1">View All</a>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3">
          {products.map((product, index) => (
            <div className="col" key={index}>
              <div className="product-item">
                <figure>
                  <a href="#" title={product.title}>
                    <img src={product.img} alt={product.title} className="tab-image" />
                  </a>
                </figure>
                <div className="d-flex flex-column text-center">
                  <h3 className="fs-6 fw-normal">{product.title}</h3>
                  <div>
                    <span className="rating">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="18" height="18" className={`text-warning`}>
                          <use xlinkHref={i < Math.floor(product.rating) ? "#star-full" : (i < product.rating ? "#star-half" : "#star-empty")}></use>
                        </svg>
                      ))}
                    </span>
                    <span>({product.reviews})</span>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <del>${product.oldPrice.toFixed(2)}</del>
                    <span className="text-dark fw-semibold">${product.price.toFixed(2)}</span>
                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">{product.discount}% OFF</span>
                  </div>
                  <div className="button-area p-3 pt-0">
                    <div className="row g-1 mt-2">
                      <div className="col-3">
                        <input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" defaultValue={1} />
                      </div>
                      <div className="col-7">
                        <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                          <svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart
                        </a>
                      </div>
                      <div className="col-2">
                        <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                          <svg width="18" height="18"><use xlinkHref="#heart"></use></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
