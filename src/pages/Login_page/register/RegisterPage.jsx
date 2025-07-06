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
    <div className="register-page-clean-container">
      <div className="register-clean-card">
        <div className="register-clean-header">
          <img
            src="/assets/Main_images/logo_site_img_005.png"
            alt="Trilha Federal"
            className="register-clean-logo"
          />
          <h1 className="register-clean-title">Criar conta</h1>
          <p className="register-clean-subtitle">
            Preencha os campos abaixo para criar sua conta gratuita
          </p>
        </div>
        <form className="register-clean-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Seu nome completo"
              required
              disabled={loading}
            />
            <FaUser className="input-icon" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="seu@email.com"
              required
              disabled={loading}
            />
            <FaEnvelope className="input-icon" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Criar senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Crie uma senha"
              required
              disabled={loading}
            />
            <FaLock className="input-icon" />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              disabled={loading}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar senha
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Confirme sua senha"
              required
              disabled={loading}
            />
            <FaLock className="input-icon" />
            <button
              type="button"
              className="password-toggle"
              onClick={toggleConfirmPasswordVisibility}
              disabled={loading}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="register-clean-button"
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
        <div className="register-clean-signin">
          <span>Já tem uma conta?</span>
          <Link to="/login" className="register-clean-signin-btn">
            <FaUser style={{ marginRight: "0.5rem" }} /> Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
