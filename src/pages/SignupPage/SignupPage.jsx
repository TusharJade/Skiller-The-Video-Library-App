import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <div className="sidebar-box">
        <Sidebar />
      </div>
      <form className="login-outerbox">
        <div className="login-container">
          <div className="login-text">Signup</div>

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

          <div className="input-container password-container">
            <label className="login-heading" for="/">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder=" Confirm Password"
              className="input-feild"
            ></input>
          </div>

          <button className="guest-login-btn singup-gap">Signup</button>

          <div className="new-text">
            Already have an account?
            <Link to="/login" className="signup-text Link">
              &nbsp;Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export { SignupPage };
