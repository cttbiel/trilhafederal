// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Main_images/logo_site_img_005.png";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Trilha Federal Logo" className="logo-img" />
          <span>Trilha Federal</span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Início</Link>
          <a href="#sobre">Sobre</a>
          <Link to="/internacional">Trilha Internacional</Link>
          <div className="dropdown-container">
            <button
              className="dropdown-trigger"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Recursos{" "}
              <FaChevronDown
                className={`dropdown-icon ${isDropdownOpen ? "rotated" : ""}`}
              />
            </button>
            <div
              className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a href="#vestibulares">Vestibulares</a>
              <Link to="/internacional">Trilha Internacional</Link>
              <a href="#recursos">Ferramentas</a>
            </div>
          </div>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
        <Link to="/contato" className="header-cta">
          <span>Entrar</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
