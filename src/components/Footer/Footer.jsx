import React from "react";
import "./Footer.css";
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h3>
              <img
                src="/assets/Main_images/logo_site_img_005.png"
                alt="Trilha Federal"
                className="footer-logo"
              />
              Trilha Federal
            </h3>
            <p>
              Democratizando o acesso à informação sobre vestibulares federais.
            </p>
            <div className="social-links">
              <a href="mailto:atrilhafederal@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://instagram.com/atrilhafederal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={scrollToTop}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/quem-somos" onClick={scrollToTop}>
                Quem Somos
              </Link>
            </li>
            <li>
              <a
                href="#vestibulares"
                onClick={handleScrollToSection("vestibulares")}
              >
                Vestibulares
              </a>
            </li>
            <li>
              <Link to="/internacional" onClick={scrollToTop}>
                Trilha Internacional
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Instituições</h4>
          <ul className="footer-links">
            <li>
              <Link to="/universidades" onClick={scrollToTop}>
                Universidades Federais
              </Link>
            </li>
            <li>
              <Link to="/institutos" onClick={scrollToTop}>
                Institutos Federais
              </Link>
            </li>
            <li>
              <Link to="/tecnicos" onClick={scrollToTop}>
                Escolas Técnicas
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <div className="contact-info">
            <p>
              <FaEnvelope /> atrilhafederal@gmail.com
            </p>
            <p>📍 Belo Horizonte, MG - Brasil</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Trilha Federal. Todos os direitos reservados.</p>
        <p>Desenvolvido para democratizar a educação pública</p>
      </div>
    </footer>
  );
};

export default Footer;
