import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import "./Login-page.css";
import { useAuth } from "../../../AuthContext";
import { useToast } from "../../../GlobalToast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    if (!formData.email || !formData.password) {
      showToast("Por favor, preencha todos os campos.", "error");
      setLoading(false);
      return;
    }
    if (!formData.email.includes("@")) {
      showToast("Por favor, insira um email válido.", "error");
      setLoading(false);
      return;
    }
    setTimeout(() => {
      showToast(
        "O login está temporariamente desativado. Aguarde a implementação do backend.",
        "error"
      );
      setLoading(false);
    }, 800);
    return;
  };

  const handleForgotPassword = () => {
    showToast(
      "Em breve você poderá recuperar sua senha por email! Por enquanto, entre em contato pelo nosso suporte.",
      "error"
    );
  };

  return (
    <div className="login-page-clean-container">
      <div className="login-clean-card">
        <div className="login-clean-header">
          <img
            src="/assets/Main_images/logo_site_img_005.png"
            alt="Trilha Federal"
            className="login-clean-logo"
          />
          <h1 className="login-clean-title">Bem-vindo de volta!</h1>
          <p className="login-clean-subtitle">
            Acesse sua conta para acompanhar seus vestibulares favoritos
          </p>
        </div>
        <form className="login-clean-form" onSubmit={handleSubmit}>
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
              Senha
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Sua senha"
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
          <div className="remember-forgot">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
              />
              Lembrar de mim
            </label>
            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
              disabled={loading}
            >
              Esqueceu a senha?
            </button>
          </div>
          <button
            type="submit"
            className="login-clean-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Entrando...
              </>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
        <div className="login-clean-signup">
          <span>Ainda não tem uma conta?</span>
          <Link to="/cadastro" className="login-clean-signup-btn">
            <FaUser style={{ marginRight: "0.5rem" }} /> Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
