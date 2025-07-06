import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import "./RegisterPage.css";
import { useAuth } from "../../../AuthContext";
import { useToast } from "../../../GlobalToast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // Validação dos campos antes de simular cadastro
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      showToast("Por favor, preencha todos os campos.", "error");
      setLoading(false);
      return;
    }
    if (!formData.email.includes("@")) {
      showToast("Por favor, insira um email válido.", "error");
      setLoading(false);
      return;
    }
    if (formData.password.length < 6) {
      showToast("A senha deve ter pelo menos 6 caracteres.", "error");
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      showToast("As senhas não coincidem.", "error");
      setLoading(false);
      return;
    }

    // Bloquear cadastro até termos backend
    setTimeout(() => {
      showToast(
        "O cadastro está temporariamente desativado. Aguarde a implementação do backend.",
        "error"
      );
      setLoading(false);
    }, 900);
    return;
  };

  return (
    <div className="register-page-container">
      <div className="register-content">
        {/* Left Side - Information */}
        <div className="register-info">
          <div className="register-info-content">
            <h1>Crie sua conta no Trilha Federal</h1>
            <p>
              Cadastre-se para acompanhar vestibulares, acessar simulados,
              receber notificações e participar da comunidade!
            </p>
            <ul className="register-features">
              <li>Crie seu perfil personalizado</li>
              <li>Acompanhe vestibulares e simulados</li>
              <li>Receba notificações exclusivas</li>
              <li>Participe da comunidade de estudantes</li>
              <li>Tenha acesso a estatísticas detalhadas</li>
            </ul>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="register-form-section">
          {/* Botão Voltar */}
          <Link
            to="/"
            className="login-back-btn"
            style={{ marginBottom: 16, display: "inline-block" }}
          >
            ← Voltar para a página inicial
          </Link>
          <div className="register-header">
            <img
              src="/assets/Main_images/logo_site_img_005.png"
              alt="Trilha Federal"
              className="register-logo"
            />
            <h1 className="register-title">Criar conta</h1>
            <p className="register-subtitle">
              Preencha os campos abaixo para criar sua conta gratuita
            </p>
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            {/* Nome */}
            <div className="register-form-group">
              <label htmlFor="name" className="register-form-label">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="register-form-input"
                placeholder="Seu nome completo"
                required
                disabled={loading}
              />
              <FaUser className="register-input-icon" />
            </div>
            {/* Email */}
            <div className="register-form-group">
              <label htmlFor="email" className="register-form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="register-form-input"
                placeholder="seu@email.com"
                required
                disabled={loading}
              />
              <FaEnvelope className="register-input-icon" />
            </div>
            {/* Criar Senha */}
            <div className="register-form-group">
              <label htmlFor="password" className="register-form-label">
                Criar senha
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="register-form-input"
                placeholder="Crie uma senha"
                required
                disabled={loading}
              />
              <FaLock className="register-input-icon" />
              <button
                type="button"
                className="register-password-toggle"
                onClick={togglePasswordVisibility}
                disabled={loading}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Confirmar Senha */}
            <div className="register-form-group">
              <label htmlFor="confirmPassword" className="register-form-label">
                Confirmar senha
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="register-form-input"
                placeholder="Confirme sua senha"
                required
                disabled={loading}
              />
              <FaLock className="register-input-icon" />
              <button
                type="button"
                className="register-password-toggle"
                onClick={toggleConfirmPasswordVisibility}
                disabled={loading}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {/* Botão Criar Conta */}
            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="register-loading-spinner"></span>
                  Criando conta...
                </>
              ) : (
                "Criar conta"
              )}
            </button>
          </form>
          <hr className="register-divider" />
          <div className="register-signup-section">
            <p className="register-signup-text">Já tem uma conta?</p>
            <Link to="/login" className="register-signup-button">
              <FaUser style={{ marginRight: "0.5rem" }} />
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
