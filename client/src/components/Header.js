import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center p-2 border-bottom">
      <span className="icon">
        <Link to="/new-post">
          <i className="fas fa-camera text-dark"></i>
        </Link>
      </span>
      <span className="header-title">
        <img src="./instagram.png" alt="instagram logo"></img>{" "}
      </span>
      <div className="notifications">5</div>
    </div>
  );
}

export default Header;
