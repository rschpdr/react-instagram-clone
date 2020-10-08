import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return <div>
    <span className="icon"><Link to='/new-post'><i className="fas fa-camera"></i></Link></span>
    <span className="header-title">Instagram</span>
    <div className="notifications">5</div>
  </div>;
}

export default Header;
