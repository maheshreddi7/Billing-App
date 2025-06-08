import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./MenuBar.css";

const Menubar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <Link class="navbar-brand" to="dashboard">
        <img src={assets.logo} alt="Logo" height="40" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse p-2" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" to="/dashboard">
              DASHBOARD
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="explore">
              EXPLORE
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="items">
              MANAGE ITEMS
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="category">
              MANAGE CATEGORIES
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="users">
              MANAGE USERS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
