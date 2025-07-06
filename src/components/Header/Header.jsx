// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { FaChevronDown, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../AuthContext";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const { user, logout } = useAuth();

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  const handleSobreClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById("sobre");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("sobre");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400); // tempo para garantir que a home carregue
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-container" onClick={scrollToTop}>
          <img
            src="/assets/Main_images/logo_site_img_005.png"
            alt="Trilha Federal Logo"
            className="logo-img"
          />
          <span className="logo-title">Trilha Federal</span>
        </Link>
        <nav className="nav-links hide-on-mobile">
          <Link to="/" onClick={scrollToTop}>
            Início
          </Link>
          <a href="#sobre" onClick={handleSobreClick}>
            Sobre
          </a>
          {/* Dropdown Recursos integrado na navegação */}
          <div className="nav-dropdown-container">
            <button
              className="nav-dropdown-btn"
              ref={buttonRef}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen((open) => !open)}
              tabIndex={0}
            >
              Recursos
              <FaChevronDown
                className={`nav-dropdown-icon${
                  isDropdownOpen ? " rotated" : ""
                }`}
              />
            </button>
            <div
              className={`nav-dropdown-menu${isDropdownOpen ? " open" : ""}`}
              ref={dropdownRef}
              role="menu"
            >
              <a
                href="#vestibulares"
                onClick={handleScrollToSection("vestibulares")}
                className="nav-dropdown-link"
                tabIndex={isDropdownOpen ? 0 : -1}
              >
                Vestibulares
              </a>
              <Link
                to="/internacional"
                onClick={scrollToTop}
                className="nav-dropdown-link"
                tabIndex={isDropdownOpen ? 0 : -1}
              >
                Trilha Internacional
              </Link>
              <a
                href="#recursos"
                onClick={handleScrollToSection("recursos")}
                className="nav-dropdown-link"
                tabIndex={isDropdownOpen ? 0 : -1}
              >
                Ferramentas
              </a>
            </div>
          </div>
          <Link to="/quem-somos" onClick={scrollToTop}>
            Quem Somos
          </Link>
          <Link to="/contato" onClick={scrollToTop}>
            Contato
          </Link>
        </nav>
        {user ? (
          <div className="header-user-menu hide-on-mobile">
            <Link to="/dashboard" className="user-info-link">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="user-avatar-mini"
                />
              ) : (
                <FaUserCircle className="user-avatar-mini" />
              )}
              <span className="user-name">{user.nome}</span>
            </Link>
            <button
              className="logout-btn-mini"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              <FaSignOutAlt /> Sair
            </button>
          </div>
        ) : (
        <Link
          to="/login"
          className="header-cta hide-on-mobile"
          onClick={scrollToTop}
        >
          <span>Entrar</span>
        </Link>
        )}
        {/* Botão menu mobile */}
        <button
          className={`mobile-menu-toggle${isMobileMenuOpen ? " open" : ""}`}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          <span className="hamburger-line" aria-hidden="true"></span>
        </button>
        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
            <aside
              className="mobile-menu-cafellow"
              onClick={(e) => e.stopPropagation()}
              aria-label="Menu principal mobile"
            >
              <button
                className="mobile-menu-close"
                onClick={closeMobileMenu}
                aria-label="Fechar menu"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <Link
                to="/"
                className="mobile-menu-logo-row"
                onClick={() => {
                  closeMobileMenu();
                  scrollToTop();
                }}
              >
                <img
                  src="/assets/Main_images/logo_site_img_005.png"
                  alt="Trilha Federal Logo"
                  className="mobile-menu-logo"
                />
                <span className="mobile-menu-title">Trilha Federal</span>
              </Link>
              <nav className="mobile-menu-links">
                <Link
                  to="/"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                >
                  Início
                </Link>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    closeMobileMenu();
                    handleSobreClick(e);
                  }}
                >
                  Sobre
                </a>
                <Link
                  to="/quem-somos"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                >
                  Quem Somos
                </Link>
                <Link
                  to="/contato"
                  onClick={() => {
                    closeMobileMenu();
                    scrollToTop();
                  }}
                >
                  Contato
                </Link>
                <div className="mobile-menu-group">
                  <span className="mobile-menu-group-title">Recursos</span>
                  <a
                    href="#vestibulares"
                    onClick={(e) => {
                      closeMobileMenu();
                      handleScrollToSection("vestibulares")(e);
                    }}
                  >
                    Vestibulares
                  </a>
                  <Link
                    to="/internacional"
                    onClick={() => {
                      closeMobileMenu();
                      scrollToTop();
                    }}
                  >
                    Trilha Internacional
                  </Link>
                  <a
                    href="#recursos"
                    onClick={(e) => {
                      closeMobileMenu();
                      handleScrollToSection("recursos")(e);
                    }}
                  >
                    Ferramentas
                  </a>
                </div>
              </nav>
              {user ? (
                <div className="mobile-menu-user-info">
                  <Link to="/dashboard" className="user-info-link">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        className="user-avatar-mini"
                      />
                    ) : (
                      <FaUserCircle className="user-avatar-mini" />
                    )}
                    <span className="user-name">{user.nome}</span>
                  </Link>
                  <button
                    className="logout-btn-mini"
                    onClick={() => {
                      logout();
                      navigate("/");
                      closeMobileMenu();
                    }}
                  >
                    <FaSignOutAlt /> Sair
                  </button>
                </div>
              ) : (
              <Link
                to="/login"
                className="mobile-menu-cta"
                onClick={() => {
                  closeMobileMenu();
                  scrollToTop();
                }}
              >
                <span>Entrar</span>
              </Link>
              )}
            </aside>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
