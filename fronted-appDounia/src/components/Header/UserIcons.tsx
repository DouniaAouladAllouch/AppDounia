import React from 'react';
import { FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';

const UserIcons: React.FC = () => {
  const iconStyle = {
    width: '24px',
    height: '24px',
    display: 'block',
    lineHeight: 0,
    color: 'black', // <-- icône en noir
  };

  return (
    <ul className="d-flex justify-content-end list-unstyled m-0">
      <li>
        <a href="#" className="p-2 mx-1 d-flex align-items-center justify-content-center">
          <FiUser style={iconStyle} />
        </a>
      </li>
      <li>
        <a href="#" className="p-2 mx-1 d-flex align-items-center justify-content-center">
          <FiHeart style={iconStyle} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="p-2 mx-1 d-flex align-items-center justify-content-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
        >
          <FiShoppingBag style={iconStyle} />
        </a>
      </li>
    </ul>
  );
};

export default UserIcons;
