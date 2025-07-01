import React from "react";
import "./Footer.css";
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Main_images/logo_site_img_005.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h3>
              <img src={logo} alt="Trilha Federal" className="footer-logo" />
              Trilha Federal
            </h3>
            <p>
              Democratizando o acesso à informação sobre vestibulares federais.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp />
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
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#vestibulares">Vestibulares</a>
            </li>
            <li>
              <a href="#trilha-internacional">Trilha Internacional</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Instituições</h4>
          <ul className="footer-links">
            <li>
              <Link to="/universidades">Universidades Federais</Link>
            </li>
            <li>
              <Link to="/institutos">Institutos Federais</Link>
            </li>
            <li>
              <Link to="/tecnicos">Escolas Técnicas</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <div className="contact-info">
            <p>
              <FaEnvelope /> contato@trilhafederal.com.br
            </p>
            <p>
              <FaWhatsapp /> (31) 99999-9999
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
