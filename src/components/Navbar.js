import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
