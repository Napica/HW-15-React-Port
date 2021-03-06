import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 styling">Looking to the future</h1>
          <p className="lead"></p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
