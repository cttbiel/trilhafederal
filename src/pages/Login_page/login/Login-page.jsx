import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import "./Login-page.css";
import { useToast } from "../../../GlobalToast";
import { supabase } from "../../../supabaseClient";

const LoginPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

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
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      let msg = error.message;
      if (msg === "Invalid login credentials") {
        msg = "Email ou senha incorretos. Por favor, tente novamente.";
      }
      showToast(msg, "error");
      setLoading(false);
      return;
    }
    setLoading(false);
    // O redirecionamento para /dashboard já está implementado via useEffect
  };

  const handleForgotPassword = () => {
    showToast(
      "Em breve você poderá recuperar sua senha por email! Por enquanto, entre em contato pelo nosso suporte.",
      "error"
    );
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) showToast(error.message, "error");
  };

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        navigate("/dashboard");
      }
    };
    checkSession();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          navigate("/dashboard");
        }
      }
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [navigate]);

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
          <button
            className="login-google-btn"
            onClick={handleGoogleLogin}
            type="button"
          >
            Entrar com Google
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
