import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/auth-context";

const SignupPage = () => {
  const { setAuth } = useAuthContext();
  const [singupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    passwordOne: false,
    passwordTwo: false,
  });

  const navigate = useNavigate();

  const signupSubmiter = (e) => {
    e.preventDefault();
    if (singupInput.password !== singupInput.confirmPassword) {
      alert("Password doesn't match please check again");
    } else {
      const singupFunc = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            fullname: singupInput.fullname,
            email: singupInput.email,
            password: singupInput.password,
          });

          localStorage.setItem("TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "USER_INFO",
            JSON.stringify({
              email: response.data.createdUser.email,
              fullname: response.data.createdUser.fullname,
            })
          );

          setAuth({
            loginStatus: true,
            token: localStorage.getItem("TOKEN"),
            user: JSON.parse(localStorage.getItem("USER_INFO")),
          });

          navigate("/");
        } catch (error) {
          console.log(error);
          if (error.response.status === 422) {
            alert("This email is already exist plz login");
          }
        }
      };
      singupFunc();
    }
  };

  return (
    <>
      <div className="sidebar-box">
        <Sidebar />
      </div>
      <form className="signup-outerbox" onSubmit={signupSubmiter}>
        <div className="login-container">
          <div className="login-text">Signup</div>

          <div className="input-container">
            <label className="login-heading" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input-feild"
              id="name"
              onChange={(e) => {
                setSignupInput((item) => ({
                  ...item,
                  fullname: e.target.value,
                }));
              }}
              required
            ></input>
          </div>

          <div className="input-container password-container">
            <label className="login-heading" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input-feild"
              id="email"
              onChange={(e) => {
                setSignupInput((item) => ({
                  ...item,
                  email: e.target.value,
                }));
              }}
              required
            ></input>
          </div>

          <div className="input-container password-container">
            <label className="login-heading" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword.passwordOne ? "text" : "password"}
              placeholder="Password"
              className="input-feild"
              id="password"
              onChange={(e) => {
                setSignupInput((item) => ({
                  ...item,
                  password: e.target.value,
                }));
              }}
              minLength="6"
              required
            ></input>
            <span className="password-eye">
              {showPassword.passwordOne ? (
                <i
                  className="fas fa-eye"
                  onClick={(item) =>
                    setShowPassword({ ...item, passwordOne: false })
                  }
                ></i>
              ) : (
                <i
                  className="fas fa-eye-slash"
                  onClick={(item) =>
                    setShowPassword({ ...item, passwordOne: true })
                  }
                ></i>
              )}
            </span>
          </div>

          <div className="input-container password-container">
            <label className="login-heading" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type={showPassword.passwordTwo ? "text" : "password"}
              placeholder=" Confirm Password"
              className="input-feild"
              id="confirm-password"
              onChange={(e) => {
                setSignupInput((item) => ({
                  ...item,
                  confirmPassword: e.target.value,
                }));
              }}
              minLength="6"
              required
            ></input>
            <span className="password-eye">
              {showPassword.passwordTwo ? (
                <i
                  className="fas fa-eye"
                  onClick={() =>
                    setShowPassword((item) => ({ ...item, passwordTwo: false }))
                  }
                ></i>
              ) : (
                <i
                  className="fas fa-eye-slash"
                  onClick={() =>
                    setShowPassword((item) => ({ ...item, passwordTwo: true }))
                  }
                ></i>
              )}
            </span>
          </div>

          <button type="submit" className="guest-login-btn singup-gap">
            Signup
          </button>

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
