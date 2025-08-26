// src/components/Home/CategorySection.tsx
import React from "react";

// importer les images
import cat1 from "../../images/category-thumb-1.jpg";
import cat2 from "../../images/category-thumb-2.jpg";
import cat3 from "../../images/category-thumb-3.jpg";
import cat4 from "../../images/category-thumb-4.jpg";
import cat5 from "../../images/category-thumb-5.jpg";
import cat6 from "../../images/category-thumb-6.jpg";
import cat7 from "../../images/category-thumb-7.jpg";
import cat8 from "../../images/category-thumb-8.jpg";

const categories = [
  { title: "Dried Fruits", img: cat1 },
  { title: "Dairy Products", img: cat2 },
  { title: "Edible Oils", img: cat3 },
  { title: "Honey", img: cat4 },
  
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-5 overflow-hidden">
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h2 className="section-title">Category</h2>
            <button className="btn btn-primary">View All</button>
          </div>
        </div>

        <div className="row">
          {categories.map((cat, index) => (
            <div className="col-6 col-sm-4 col-md-3 text-center mb-4" key={index}>
              <img
                src={cat.img}
                className="rounded-circle mb-2"
                alt={cat.title}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h5 className="fs-6">{cat.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
