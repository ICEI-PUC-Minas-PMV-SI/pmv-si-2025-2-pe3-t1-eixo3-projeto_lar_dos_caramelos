import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/caes", label: "Cães" },
    { to: "/apadrinhar", label: "Apadrinhe" },
    { to: "/dicas", label: "Dicas Pet" },
    { to: "/eventos", label: "Eventos" },
    { to: "/historias", label: "Histórias" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-md bg-light border-bottom shadow-sm sticky-top"   style={{ minHeight: "70px" }} >
      <div className="container">
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2"  > 
            
          <span className="fw-bold fs-5 text-dark">Lar dos Caramellos</span>
        </Link>

        {/* Mobile button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-2">
           {navLinks.map((link) => (
  <li className="nav-item" key={link.to}>
    <Link
      to={link.to}
      onClick={() => setIsOpen(false)}
      className={`nav-link ${
        isActive(link.to)
          ? "text-orange fw-semibold" // cor laranja personalizada
          : "text-secondary"
      }`}
    >
      {link.label}
    </Link>
         </li>
            ))}
            <li className="nav-item">
            <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="btn btn-md ms-md-2 text-white border-0"
                style={{ backgroundColor: "#ff7b00" }}    
    >
        Entrar
</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
