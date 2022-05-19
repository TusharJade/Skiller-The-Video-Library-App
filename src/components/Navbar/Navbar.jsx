import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const Navbar = () => {
  const { auth, setAuth } = useAuthContext();

  const navigate = useNavigate();

  const logoutFunc = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER_INFO");

    setAuth({
      loginStatus: false,
      token: localStorage.getItem("TOKEN"),
      user: JSON.parse(localStorage.getItem("USER_INFO")),
    });
    navigate("/login");
  };
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
      {auth.loginStatus ? (
        <div className="login-btn Link" to="" onClick={() => logoutFunc()}>
          Logout
        </div>
      ) : (
        <Link className="login-btn Link" to="/login">
          Login
        </Link>
      )}
    </header>
  );
};

export { Navbar };
