import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaUser,
  FaGraduationCap,
  FaArrowLeft,
} from "react-icons/fa";
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

    // Validação dos campos antes de bloquear o login
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

    // Bloquear login até termos backend
    setTimeout(() => {
      showToast(
        "O login está temporariamente desativado. Aguarde a implementação do backend.",
        "error"
      );
      setLoading(false);
    }, 800);
    return;
  };

  const handleSocialLogin = (provider) => {
    setLoading(true);
    setSuccess("");
    setTimeout(() => {
      showToast(
        `Login com ${provider} ainda não está disponível. Aguarde novidades!`,
        "error"
      );
      setLoading(false);
    }, 900);
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page or show modal
    setSuccess("Link de recuperação enviado para seu email!");
  };

  return (
    <div className="login-page-container">
      <div className="login-content">
        {/* Left Side - Information */}
        <div className="login-info">
          <div className="login-info-content">
            <h1>Bem-vindo ao Trilha Federal</h1>
            <p>
              Acesse sua conta para acompanhar seus vestibulares favoritos e ter
              acesso a recursos exclusivos para sua preparação.
            </p>
            <ul className="login-features">
              <li>Acompanhe seus vestibulares favoritos</li>
              <li>Acesse simulados exclusivos</li>
              <li>Receba notificações personalizadas</li>
              <li>Participe da comunidade de estudantes</li>
              <li>Tenha acesso a estatísticas detalhadas</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="login-form-section">
          {/* Botão Voltar */}
          <Link to="/" className="login-back-btn">
            ← Voltar para a página inicial
          </Link>
          {/* Header */}
          <div className="login-header">
            <img
              src="/assets/Main_images/logo_site_img_005.png"
              alt="Trilha Federal"
              className="login-logo"
            />
            <h1 className="login-title">Bem-vindo de volta!</h1>
            <p className="login-subtitle">
              Acesse sua conta para acompanhar seus vestibulares favoritos
            </p>
          </div>

          {/* Login Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Remember Me & Forgot Password */}
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

            {/* Login Button */}
            <button type="submit" className="login-button" disabled={loading}>
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

          {/* Divider */}
          <div className="divider">
            <span>ou continue com</span>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button
              type="button"
              className="social-button google"
              onClick={() => handleSocialLogin("Google")}
              disabled={loading}
            >
              <FaGoogle />
              Google
            </button>
            <button
              type="button"
              className="social-button facebook"
              onClick={() => handleSocialLogin("Facebook")}
              disabled={loading}
            >
              <FaFacebook />
              Facebook
            </button>
          </div>

          {/* Sign Up Section */}
          <div className="signup-section">
            <p className="signup-text">Ainda não tem uma conta?</p>
            <Link to="/cadastro" className="signup-button">
              <FaUser style={{ marginRight: "0.5rem" }} />
              Criar conta
            </Link>
          </div>

          {/* Additional Info */}
          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              fontSize: "0.9rem",
              color: "#6b7280",
            }}
          >
            <p>
              <FaGraduationCap style={{ marginRight: "0.5rem" }} />
              Acesse recursos exclusivos para vestibulares federais
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
