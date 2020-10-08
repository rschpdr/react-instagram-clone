import React from "react";
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className="page-footer fixed-bottom p-2 border-top">
      <div className="footerIcon d-flex justify-content-around">
        <Link to="/"><i className="fas fa-home text-dark"></i></Link>
        <Link to="/"><i className="fas fa-search text-dark"></i></Link>
        <Link to="/new-post"><i className="far fa-plus-square text-dark"></i></Link>
        <Link to="/"><i className="far fa-heart text-dark"></i></Link>
        <Link to="/"><i className="far fa-user text-dark"></i></Link>
      </div>
    </footer>
  );
}

export default Footer;
