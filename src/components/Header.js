import React from "react";
import Contact from "./Contact.js";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading">Welcome in "The React World"</h1>
      <p className="header__content">Add new user to our course.</p>
      <Contact/>
    </header>
  );
};

export default Header;
