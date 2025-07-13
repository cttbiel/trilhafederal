import React, { useEffect, useState } from "react";
import {
  FaCalendarCheck,
  FaStar,
  FaChartBar,
  FaBook,
  FaUsers,
  FaSignOutAlt,
  FaUserCircle,
  FaTrashAlt,
  FaUniversity,
  FaGraduationCap,
  FaClock,
} from "react-icons/fa";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import { useAuth } from "../../useAuth";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";
import institutos from "../Pages_inter/Institutos_inter/institutos.json";
import tecnicos from "../Pages_inter/Tecnicos_inter/tecnicos.json";
import { supabase } from "../../supabaseClient";
import { Helmet } from "react-helmet-async";

function getInstituicaoFavorita(sigla) {
  return (
    universidades.find((i) => i.sigla === sigla) ||
    institutos.find((i) => i.sigla === sigla) ||
    tecnicos.find((i) => i.sigla === sigla)
  );
}

// Função melhorada para extrair datas dos processos seletivos
function extrairDatasVestibulares(favorites) {
  if (!favorites || favorites.length === 0) return [];

  const hoje = new Date();
  const eventos = [];

  favorites.forEach((sigla) => {
    const inst = getInstituicaoFavorita(sigla);
    if (!inst || !inst.processos_seletivos) return;

    inst.processos_seletivos.forEach((proc) => {
      if (proc.datas) {
        Object.entries(proc.datas).forEach(([etapa, dataStr]) => {
          // Pular datas vagas ou indefinidas
          if (
            !dataStr ||
            dataStr.toLowerCase().includes("a definir") ||
            dataStr.toLowerCase().includes("em breve") ||
            dataStr.toLowerCase().includes("indefinido")
          ) {
            return;
          }

          // Tentar extrair data específica (dd/mm/yyyy)
          const dataMatch = dataStr.match(/(\d{2})\/(\d{2})\/(\d{4})/);
          if (dataMatch) {
            const [, dia, mes, ano] = dataMatch;
            const dataObj = new Date(ano, mes - 1, dia);
            if (dataObj >= hoje) {
              eventos.push({
                sigla,
                nome: inst.nome,
                tipo: inst.tipo,
                processo: proc.nome,
                etapa: etapa
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase()),
                data: dataStr,
                dataObj,
                descricao: proc.descricao,
              });
            }
          } else {
            // Para datas como "Janeiro de 2025" ou "17/01/2026 a 21/01/2026"
            const meses = [
              "janeiro",
              "fevereiro",
              "março",
              "abril",
              "maio",
              "junho",
              "julho",
              "agosto",
              "setembro",
              "outubro",
              "novembro",
              "dezembro",
            ];

            // Padrão "Janeiro de 2025"
            let match = dataStr.match(/([a-zçãéíúôê]+) de (\d{4})/i);
            if (match) {
              const mes = meses.findIndex((m) => m === match[1].toLowerCase());
              if (mes >= 0) {
                const dataObj = new Date(Number(match[2]), mes, 1);
                if (dataObj >= hoje) {
                  eventos.push({
                    sigla,
                    nome: inst.nome,
                    tipo: inst.tipo,
                    processo: proc.nome,
                    etapa: etapa
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase()),
                    data: dataStr,
                    dataObj,
                    descricao: proc.descricao,
                  });
                }
              }
            }

            // Padrão "17/01/2026 a 21/01/2026" - pegar a primeira data
            const rangeMatch = dataStr.match(/(\d{2}\/\d{2}\/\d{4})/);
            if (rangeMatch) {
              const [dia, mes, ano] = rangeMatch[1].split("/");
              const dataObj = new Date(ano, mes - 1, dia);
              if (dataObj >= hoje) {
                eventos.push({
                  sigla,
                  nome: inst.nome,
                  tipo: inst.tipo,
                  processo: proc.nome,
                  etapa: etapa
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase()),
                  data: dataStr,
                  dataObj,
                  descricao: proc.descricao,
                });
              }
            }
          }
        });
      }
    });
  });

  // Ordenar por data (mais próximas primeiro)
  eventos.sort((a, b) => a.dataObj - b.dataObj);
  return eventos;
}

// Função para formatar data relativa
function formatarDataRelativa(dataObj) {
  const hoje = new Date();
  const diffTime = dataObj - hoje;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hoje";
  if (diffDays === 1) return "Amanhã";
  if (diffDays < 7) return `Em ${diffDays} dias`;
  if (diffDays < 30) return `Em ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 365) return `Em ${Math.floor(diffDays / 30)} meses`;
  return `Em ${Math.floor(diffDays / 365)} anos`;
}

// Função para obter ícone baseado no tipo de instituição
function getIconeInstituicao(tipo) {
  if (tipo?.includes("Universidade")) return <FaUniversity />;
  if (tipo?.includes("Instituto")) return <FaGraduationCap />;
  if (tipo?.includes("Técnica") || tipo?.includes("Colégio"))
    return <FaGraduationCap />;
  return <FaUniversity />;
}

const Dashboard = () => {
  const { favorites, removeFavorite } = useAuth();
  const [user, setUser] = useState(null);
  const [removing, setRemoving] = useState("");
  const [proximosEventos, setProximosEventos] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
    });
    // Listener para mudanças de auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const eventos = extrairDatasVestibulares(favorites);
    setProximosEventos(eventos.slice(0, 5)); // Mostrar os 5 próximos eventos
  }, [favorites]);

  if (!user) {
    return (
      <>
        <Helmet>
          <title>Painel do Usuário | Trilha Federal</title>
          <meta
            name="description"
            content="Acompanhe seus vestibulares favoritos, simulados, estatísticas e notificações personalizadas no painel do Trilha Federal."
          />
        </Helmet>
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
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Painel do Usuário | Trilha Federal</title>
        <meta
          name="description"
          content="Acompanhe seus vestibulares favoritos, simulados, estatísticas e notificações personalizadas no painel do Trilha Federal."
        />
      </Helmet>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="user-info">
            {user?.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt="Avatar"
                className="user-avatar"
              />
            ) : (
              <FaUserCircle className="user-avatar" />
            )}
            <div>
              <h2>
                Olá,{" "}
                {user?.user_metadata?.name ||
                  user?.email?.split("@")[0] ||
                  "Usuário"}
                !
              </h2>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="dashboard-main">
          <section className="dashboard-section">
            <h3>
              <FaCalendarCheck className="icon" />
              Próximos eventos dos seus favoritos
              {proximosEventos.length > 0 && (
                <span className="evento-count">({proximosEventos.length})</span>
              )}
            </h3>
            {favorites.length === 0 ? (
              <div className="empty-state">
                <FaStar className="empty-icon" />
                <p>
                  Adicione instituições aos favoritos e acompanhe aqui as datas
                  dos vestibulares mais próximos! 😉
                </p>
              </div>
            ) : proximosEventos.length === 0 ? (
              <div className="empty-state">
                <FaClock className="empty-icon" />
                <p>
                  Nenhum vestibular futuro encontrado nos seus favoritos. Fique
                  de olho nas atualizações!
                </p>
              </div>
            ) : (
              <div className="eventos-grid">
                {proximosEventos.map((ev, i) => (
                  <div key={i} className="evento-card">
                    <div className="evento-header">
                      {getIconeInstituicao(ev.tipo)}
                      <div className="evento-info">
                        <h4>{ev.nome}</h4>
                        <span className="evento-tipo">{ev.tipo}</span>
                      </div>
                    </div>
                    <div className="evento-detalhes">
                      <div className="evento-processo">
                        <strong>{ev.processo}</strong>
                      </div>
                      <div className="evento-etapa">
                        <FaCalendarCheck className="icon" />
                        <span>{ev.etapa}</span>
                      </div>
                      <div className="evento-data">
                        <FaClock className="icon" />
                        <span className="data-exata">{ev.data}</span>
                        <span className="data-relativa">
                          ({formatarDataRelativa(ev.dataObj)})
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {proximosEventos.length >= 5 && (
                  <div className="evento-more">
                    <p>
                      Mostrando os 5 eventos mais próximos. Adicione mais
                      favoritos para ver mais datas!
                    </p>
                  </div>
                )}
              </div>
            )}
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
                        onClick={async () => {
                          setRemoving(sigla);
                          await removeFavorite(sigla);
                          setRemoving("");
                        }}
                        disabled={removing === sigla}
                      >
                        {removing === sigla ? (
                          <span className="favorite-loading-spinner"></span>
                        ) : (
                          <FaTrashAlt />
                        )}
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
                  {user?.estatisticas?.simulados ?? 0}
                </span>
                <span className="stat-label">Simulados feitos</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">
                  {user?.estatisticas?.media ?? 0}%
                </span>
                <span className="stat-label">Média de acertos</span>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <h3>Mensagens</h3>
            <ul className="messages-list">
              {(user?.mensagens || []).map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
