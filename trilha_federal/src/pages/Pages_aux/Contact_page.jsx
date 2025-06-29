import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact_page.css";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aqui você pode integrar com backend ou serviço de email futuramente
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-header">
        <h1>Contato</h1>
        <p>
          Tem dúvidas, sugestões ou quer falar com a equipe do Trilha Federal?
          Preencha o formulário ou utilize nossos canais de contato abaixo.
        </p>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nome
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </label>
            <label>
              Mensagem
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Digite sua mensagem..."
                rows={5}
                style={{ resize: "none" }}
              />
            </label>
            <button type="submit" className="contact-submit-btn">
              Enviar
            </button>
            {submitted && (
              <div className="contact-success">
                Mensagem enviada! Obrigado pelo contato.
              </div>
            )}
          </form>
          <div className="contact-info">
            <h2>Outros canais</h2>
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-icon" />
              <span>trilhafederal@email.com</span>
            </div>
            <div className="contact-info-item">
              <FaInstagram className="contact-info-icon" />
              <a
                href="https://www.instagram.com/atrilhafederal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @atrilhafederal
              </a>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-info-icon" />
              <span>Belo Horizonte, MG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
