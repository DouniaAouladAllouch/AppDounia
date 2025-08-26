import { useEffect, useState } from "react";
import axios from "axios";
import { type Product } from "../models/Product";
import ProductCardAdmin from "../components/ProductCardAdmin";

const API_URL = "https://localhost:7047/api/Product";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Pour l'ajout
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    categoryId: 1,
    price: 0,
    originVillage: ""
  });

  // Pour la mise à jour
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get<Product[]>(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        await loadProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handleUpdate = (product: Product) => {
    setEditingProduct(product); // produit à modifier
    setShowModal(true);          // ouvrir modal
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const val = name === "price" || name === "categoryId" ? Number(value) : value;

    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: val });
    } else {
      setNewProduct({ ...newProduct, [name]: val });
    }
  };

  const handleSaveProduct = async () => {
    try {
      if (editingProduct) {
        // Update
        await axios.put(`${API_URL}/${editingProduct.id}`, editingProduct);
      } else {
        // Add
        await axios.post(API_URL, newProduct);
      }

      setShowModal(false);
      setEditingProduct(null);
      setNewProduct({ name: "", description: "", categoryId: 1, price: 0, originVillage: "" });
      await loadProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Erreur lors de l'enregistrement du produit !");
    }
  };

  return (
    <section className="pb-5">
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h2 className="section-title">Products Management</h2>
            <button
              className="btn btn-primary rounded-1"
              onClick={() => { setEditingProduct(null); setShowModal(true); }}
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <ProductCardAdmin
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>

      {/* Modal Add / Update */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingProduct ? "Update Product" : "Add New Product"}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={editingProduct?.name ?? newProduct.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={editingProduct?.description ?? newProduct.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Category Id</label>
                  <input
                    type="number"
                    className="form-control"
                    name="categoryId"
                    value={editingProduct?.categoryId ?? newProduct.categoryId}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={editingProduct?.price ?? newProduct.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Origin Village</label>
                  <input
                    type="text"
                    className="form-control"
                    name="originVillage"
                    value={editingProduct?.originVillage ?? newProduct.originVillage}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-success" onClick={handleSaveProduct}>
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
