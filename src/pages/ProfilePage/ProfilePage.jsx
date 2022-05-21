import "./ProfilePage.css";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useAuthContext } from "../../context/auth-context";

const ProfilePage = () => {
  const { setAuth } = useAuthContext();

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
    <>
      <Sidebar />
      <div className="profile-outerbox">
        <Link to="/like" className="Link">
          <div className="profile-btn-color">
            <i className="fa-solid fa-heart profile-icn"></i>
            <span className="profile-btn-name">Liked</span>
          </div>
        </Link>
        <Link to="/history" className="Link">
          <div className="profile-btn-color">
            <i className="fa-solid fa-clock-rotate-left profile-icn"></i>
            <span className="profile-btn-name">History</span>
          </div>
        </Link>
        <Link to="/watch-later" className="Link">
          <div className="profile-btn-color">
            <i className="fa-solid fa-clock profile-icn"></i>
            <span className="profile-btn-name">Watch Later</span>
          </div>
        </Link>
        <Link to="/login" className="Link" onClick={() => logoutFunc()}>
          <div className="profile-btn-color logout-profile">
            <i class="fa-solid fa-arrow-right-from-bracket profile-icn logout-margin"></i>
            <span className="profile-btn-name">Logout</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export { ProfilePage };
