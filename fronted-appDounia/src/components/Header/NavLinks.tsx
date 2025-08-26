import React from "react";
import { Link } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <ul className="navbar-nav list-unstyled d-flex flex-row gap-4 justify-content-center align-items-center mb-0">
      <li className="nav-item">
        <Link to="/" className="nav-link text-dark">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-link text-dark">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/orders" className="nav-link text-dark">
          Orders
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/add-product" className="nav-link text-dark">
          Add Product
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link text-dark">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
