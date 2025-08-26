import React, { useState, useEffect } from "react";
import axios from "axios";

interface Category {
  id: number;
  name: string;
}

const AddProductPage: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number | "">("");
  const [price, setPrice] = useState("");
  const [originVillage, setOriginVillage] = useState("");
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Récupérer les catégories depuis l'API
    axios.get("https://localhost:7047/api/Categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Erreur chargement catégories", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryId === "") {
      setMessage("Veuillez sélectionner une catégorie !");
      return;
    }

    try {
      const product = {
        name,
        description,
        price: parseFloat(price),
        originVillage,
        categoryId
      };

      const response = await axios.post(
        "https://localhost:7047/api/Product",
        product
      );

      if (response.status === 201) {
        setMessage("Produit ajouté avec succès ✅");
        setName("");
        setDescription("");
        setCategoryId("");
        setPrice("");
        setOriginVillage("");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'ajout du produit ❌");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "100px auto" }}>
      <h2>Ajouter un Produit</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom du produit</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Catégorie</label>
          <select
            value={categoryId}
            onChange={e => setCategoryId(Number(e.target.value))}
            required
          >
            <option value="">-- Sélectionnez une catégorie --</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Prix</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Village d'origine</label>
          <input
            type="text"
            value={originVillage}
            onChange={e => setOriginVillage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddProductPage;
