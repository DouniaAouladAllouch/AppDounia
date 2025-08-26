import React from 'react';
import logo from '../../images/logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="d-flex align-items-center my-3 my-sm-0">
      <a href="/">
        <img src={logo} alt="logo" className="img-fluid" />
      </a>
    </div>
  );
};

export default Logo;
