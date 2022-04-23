import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="main-navbar">
      <Link to="/" className="skiller-outerbox Link">
        <img className="main-logo" src="/assets/orange.png" alt="err" />
        <div className="skiller">Skiller</div>
      </Link>
      <div className="search-outerbox">
        <input type="text" placeholder="Search here" className="nav-input" />
        <i className="fas fa-search nav-search"></i>
      </div>
      <Link className="login-btn Link" to="/login">
        Login
      </Link>
    </header>
  );
};

export { Navbar };
