import React from "react";

import "../../styles/Header.css";

interface HeaderProps {
  count: number;
}

const Header = ({ count }: HeaderProps) => {
  return (
    <div className="app-header">
      <h2>WISHLIST</h2>
      <p>{count} JOBS</p>
    </div>
  );
};
export default Header;
