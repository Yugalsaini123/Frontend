// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import "../styles.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-brand">
          FAQ<span>System</span>
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/admin" className="navbar-link">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;