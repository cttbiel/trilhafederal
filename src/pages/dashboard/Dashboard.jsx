import React from "react";
import {
  FaCalendarCheck,
  FaStar,
  FaChartBar,
  FaBook,
  FaUsers,
  FaSignOutAlt,
  FaUserCircle,
  FaTrashAlt,
} from "react-icons/fa";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useAuth } from "../../AuthContext";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";
import institutos from "../Pages_inter/Institutos_inter/institutos.json";
import tecnicos from "../Pages_inter/Tecnicos_inter/tecnicos.json";

// Dados mockados do usuário
const user = {
  nome: "Gabriel",
  email: "gabriel@email.com",
  avatar: "",
  favoritos: [
    { nome: "UFMG", tipo: "Universidade" },
    { nome: "IFMG", tipo: "Instituto" },
    { nome: "CEFET-MG", tipo: "Técnico" },
  ],
  eventos: [
    { titulo: "Inscrição UFMG", data: "10/06/2024" },
    { titulo: "Prova IFMG", data: "15/06/2024" },
  ],
  estatisticas: {
    simulados: 3,
    media: 78,
  },
  mensagens: [
    "Novo simulado disponível!",
    "Não perca o prazo de inscrição da UFMG!",
  ],
};

function getInstituicaoFavorita(sigla) {
  return (
    universidades.find((i) => i.sigla === sigla) ||
    institutos.find((i) => i.sigla === sigla) ||
    tecnicos.find((i) => i.sigla === sigla)
  );
}

const Dashboard = () => {
  const { favorites, removeFavorite } = useAuth();

  if (!user) {
    return (
      <>
        <Header />
        <div
          className="dashboard-container"
          style={{
            textAlign: "center",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Bem-vindo ao Painel do Trilha Federal!</h2>
          <p
            style={{
              maxWidth: 500,
              margin: "1.5rem auto",
              color: "var(--text-secondary)",
            }}
          >
            Faça login para acompanhar seus vestibulares favoritos, receber
            notificações personalizadas, acessar simulados exclusivos e muito
            mais.
          </p>
          <a href="/login" className="btn btn-primary">
            Entrar
          </a>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="user-info">
            {user?.avatar ? (
              <img src={user.avatar} alt="Avatar" className="user-avatar" />
            ) : (
              <FaUserCircle className="user-avatar" />
            )}
            <div>
              <h2>Olá, {user?.nome}!</h2>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="dashboard-main">
          <section className="dashboard-section">
            <h3>Próximos eventos</h3>
            <ul className="event-list">
              {user?.eventos.map((ev, i) => (
                <li key={i}>
                  <FaCalendarCheck className="icon" />
                  <span>{ev.titulo}</span> <b>{ev.data}</b>
                </li>
              ))}
            </ul>
          </section>

          <section className="dashboard-section">
            <h3>Seus favoritos</h3>
            {favorites.length === 0 ? (
              <p>Você ainda não adicionou nenhuma instituição aos favoritos.</p>
            ) : (
              <ul className="favorites-list">
                {favorites.map((sigla) => {
                  const inst = getInstituicaoFavorita(sigla);
                  if (!inst) return null;
                  // Pega a primeira data de vestibular/processo seletivo
                  let proximoVest = null;
                  if (
                    inst.processos_seletivos &&
                    inst.processos_seletivos.length > 0
                  ) {
                    const proc = inst.processos_seletivos[0];
                    if (proc.datas) {
                      const datas = Object.values(proc.datas);
                      proximoVest = datas.length > 0 ? datas[0] : null;
                    }
                  }
                  return (
                    <li key={sigla} className="favorite-item">
                      <img
                        src={inst.imagens?.campus}
                        alt={inst.nome}
                        className="favorite-img"
                      />
                      <div className="favorite-info">
                        <span className="favorite-nome">{inst.nome}</span>
                        <span className="favorite-tipo">{inst.tipo}</span>
                        {proximoVest && (
                          <span className="favorite-vest">
                            <FaCalendarCheck className="icon" /> Próximo
                            vestibular: <b>{proximoVest}</b>
                          </span>
                        )}
                      </div>
                      <button
                        className="favorite-remove"
                        title="Remover dos favoritos"
                        onClick={() => removeFavorite(sigla)}
                      >
                        <FaTrashAlt />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section className="dashboard-section shortcuts">
            <h3>Atalhos</h3>
            <div className="shortcuts-grid">
              <a href="/simulados" className="shortcut-card">
                <FaBook className="icon" /> Simulados
              </a>
              <a href="/calendario" className="shortcut-card">
                <FaCalendarCheck className="icon" /> Calendário
              </a>
              <a href="/estatisticas" className="shortcut-card">
                <FaChartBar className="icon" /> Estatísticas
              </a>
              <a href="/comunidade" className="shortcut-card">
                <FaUsers className="icon" /> Comunidade
              </a>
            </div>
          </section>

          <section className="dashboard-section">
            <h3>Estatísticas</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-value">
                  {user?.estatisticas.simulados}
                </span>
                <span className="stat-label">Simulados feitos</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{user?.estatisticas.media}%</span>
                <span className="stat-label">Média de acertos</span>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <h3>Mensagens</h3>
            <ul className="messages-list">
              {user?.mensagens.map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
