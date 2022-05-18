import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const changeColor = ({ isActive }) => {
    return isActive ? "active-navlink" : "not-active";
  };
  return (
    <nav className="main-sidebar">

      <ul className="sider-ul">
        <li>
          <NavLink className={changeColor} to="/">
            <div className="list-sidebar">
              <i className="fa-solid fa-house sider-icn"></i>
              <div className="sidebar-icn-name">Home</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className={changeColor} to="/playlist">
            <div className="list-sidebar">
              <i className="fa-solid fa-folder-plus sider-icn"></i>
              <div className="sidebar-icn-name ">Playlist</div>
            </div>
          </NavLink>
        </li>
        <li className="hide">
          <NavLink className={changeColor} to="/like">
            <div className="list-sidebar">
              <i className="fa-solid fa-heart sider-icn"></i>
              <div className="sidebar-icn-name">Liked</div>
            </div>
          </NavLink>
        </li>
        <li className="hide">
          <NavLink className={changeColor} to="/watch-later">
            <div className="list-sidebar">
              <i className="fa-solid fa-clock sider-icn"></i>
              <div className="sidebar-icn-name">Watch Later</div>
            </div>
          </NavLink>
        </li>
        <li className="hide">
          <NavLink className={changeColor} to="/history">
            <div className="list-sidebar">
              <i className="fa-solid fa-clock-rotate-left sider-icn"></i>
              <div className="sidebar-icn-name">History</div>
            </div>
          </NavLink>
        </li>
        <li className="profile">
          <NavLink className={changeColor} to="/profile">
            <div className="list-sidebar">
              <i className="fa-solid fa-user sider-icn"></i>
              <div className="sidebar-icn-name">Profile</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Sidebar };
