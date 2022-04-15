import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="main-navbar">
        <div className="skiller-outerbox">
          <img className="main-logo" src="/assets/orange.png" alt="err" />
          <div className="skiller">Skiller</div>
        </div>
        <div className="search-outerbox">
          <input type="text" placeholder="Search here" className="nav-input" />
          <i class="fas fa-search nav-search"></i>
        </div>
        <button className="login-btn">Login</button>
      </header>
    </div>
  );
};

export { Navbar };
