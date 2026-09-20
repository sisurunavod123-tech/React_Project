import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1949 }, (_, i) => currentYear - i);

function NavBar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>

        <div className="year-dropdown" ref={dropdownRef}>
          <button className="nav-link year-button" onClick={() => setOpen(!open)}>
            Year ▾
          </button>

          {open && (
            <div className="year-menu">
              {years.map((year) => (
                <Link
                  key={year}
                  to={`/year/${year}`}
                  className="year-item"
                  onClick={() => setOpen(false)}
                >
                  {year}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;