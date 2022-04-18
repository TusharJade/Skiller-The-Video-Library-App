import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="main-sidebar">
      <ul className="sider-ul">
        <li className="list-sidebar">
          <i className="fa-solid fa-house sider-icn"></i>
          <div className="sidebar-icn-name">Home</div>
        </li>
        <li className="list-sidebar">
          <i className="fa-solid fa-folder-plus sider-icn"></i>
          <div className="sidebar-icn-name ">Playlist</div>
        </li>
        <li className="list-sidebar hide">
          <i className="fa-solid fa-heart sider-icn"></i>
          <div className="sidebar-icn-name">Liked</div>
        </li>
        <li className="list-sidebar hide">
          <i className="fa-solid fa-clock sider-icn"></i>
          <div className="sidebar-icn-name">Watch Later</div>
        </li>
        <li className="list-sidebar hide">
          <i className="fa-solid fa-clock-rotate-left sider-icn"></i>
          <div className="sidebar-icn-name">History</div>
        </li>
        <li className="list-sidebar profile">
          <i className="fa-solid fa-user sider-icn"></i>
          <div className="sidebar-icn-name">Profile</div>
        </li>
      </ul>
    </nav>
  );
};

export { Sidebar };
