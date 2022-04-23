import "./LoginPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="sidebar-box">
        <Sidebar />
      </div>
      <form className="login-outerbox">
        <div className="login-container">
          <div className="login-text">Login</div>

          <div className="input-container">
            <label className="login-heading" for="/">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input-feild"
            ></input>
          </div>

          <div className="input-container password-container">
            <label className="login-heading" for="/">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input-feild"
            ></input>
          </div>

          <div className="or-text">OR</div>

          <button className="guest-login-btn">Login as Guest</button>

          <div className="new-text">
            Don't have an account yet?
            <Link to="/signup" className="signup-text Link">
              &nbsp;Signup
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export { LoginPage };
