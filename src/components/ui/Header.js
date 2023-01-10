import React, { useState } from "react";
import logo from "../../img/logo.png";

const Header = ({ setPage, setText }) => {
  return (
    <header className="center">
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          window.location.reload();
        }}
      />
    </header>
  );
};

export default Header;
