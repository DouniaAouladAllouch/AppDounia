import React from 'react';
import NavLinks from './NavLinks';
import UserIcons from './UserIcons';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className="w-100 border-bottom shadow-sm" style={{position:'fixed', top:0, left:0, zIndex:1000, backgroundColor:'#fff'}}>
      <div className="container-fluid">
        <div className="row py-3 align-items-center">

          {/* Logo + Toggle */}
          <div className="col-sm-4 col-lg-2 d-flex gap-3 justify-content-center justify-content-md-start align-items-center">
            <h1 style={{fontSize:'1.6rem', fontWeight:'bold', margin:0}}>
              <span style={{color:'#1976d2'}}>Alhoceima</span>{' '}
              <span style={{color:'#2e7d32'}}>Natural Products</span>
            </h1>
          </div>

          {/* Search */}
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
            <SearchBar />
          </div>

          {/* Navbar Links */}
          <div className="col-lg-4 d-flex justify-content-center">
            <NavLinks />
          </div>

          {/* User Icons */}
          <div className="col-sm-8 col-lg-2 d-flex gap-3 justify-content-center justify-content-sm-end">
            <UserIcons />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
