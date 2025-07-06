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
} from "react-icons/fa";
import "./Dashboard.css";
import Header from "../../components/Header/Header";
import { useAuth } from "../../AuthContext";
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

function parseDataVestibular(dataStr) {
  if (!dataStr || typeof dataStr !== "string") return [];
  dataStr = dataStr.trim().toLowerCase();
  // Ignorar datas vagas
  if (
    dataStr.includes("a serem anunciadas") ||
    dataStr.includes("em breve") ||
    dataStr.includes("indefinido")
  ) {
    return [];
  }
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
  const hoje = new Date();
  let datas = [];
  // dd/mm/yyyy
  if (/\d{2}\/\d{2}\/\d{4}/.test(dataStr)) {
    const [d, m, y] = dataStr.split("/");
    const dt = new Date(`${y}-${m}-${d}`);
    if (dt >= hoje) datas.push(dt);
    return datas;
  }
  // "Janeiro de 2025" ou "Novembro de 2024"
  let match = dataStr.match(/([a-zçãéíúôê]+) de (\d{4})/i);
  if (match) {
    const mes = meses.findIndex((m) => m === match[1]);
    if (mes >= 0) {
      const dt = new Date(Number(match[2]), mes, 1);
      if (dt >= hoje) datas.push(dt);
    }
  }
  // "Setembro a Outubro de 2024" ou "Abril e Junho de 2025"
  match = dataStr.match(/([a-zçãéíúôê]+)[ aez]+([a-zçãéíúôê]+) de (\d{4})/i);
  if (match) {
    const mes1 = meses.findIndex((m) => m === match[1]);
    const mes2 = meses.findIndex((m) => m === match[2]);
    const ano = Number(match[3]);
    if (mes1 >= 0) {
      const dt1 = new Date(ano, mes1, 1);
      if (dt1 >= hoje) datas.push(dt1);
    }
    if (mes2 >= 0) {
      const dt2 = new Date(ano, mes2, 1);
      if (dt2 >= hoje) datas.push(dt2);
    }
  }
  // "Abril e Junho de 2025"
  match = dataStr.match(/([a-zçãéíúôê]+) e ([a-zçãéíúôê]+) de (\d{4})/i);
  if (match) {
    const mes1 = meses.findIndex((m) => m === match[1]);
    const mes2 = meses.findIndex((m) => m === match[2]);
    const ano = Number(match[3]);
    if (mes1 >= 0) {
      const dt1 = new Date(ano, mes1, 1);
      if (dt1 >= hoje) datas.push(dt1);
    }
    if (mes2 >= 0) {
      const dt2 = new Date(ano, mes2, 1);
      if (dt2 >= hoje) datas.push(dt2);
    }
  }
  // Apenas ano
  match = dataStr.match(/(\d{4})/);
  if (match) {
    const dt = new Date(Number(match[1]), 0, 1);
    if (dt >= hoje) datas.push(dt);
  }
  return datas;
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
    if (!favorites || favorites.length === 0) {
      setProximosEventos([]);
      return;
    }
    let eventos = [];
    favorites.forEach((sigla) => {
      const inst = getInstituicaoFavorita(sigla);
      if (!inst || !inst.processos_seletivos) return;
      inst.processos_seletivos.forEach((proc) => {
        if (proc.datas) {
          Object.entries(proc.datas).forEach(([etapa, dataStr]) => {
            const datas = parseDataVestibular(dataStr);
            datas.forEach((dataVest) => {
              eventos.push({
                sigla,
                nome: inst.nome,
                tipo: inst.tipo,
                processo: proc.nome,
                etapa,
                data: dataStr,
                dataObj: dataVest,
              });
            });
          });
        }
      });
    });
    eventos.sort((a, b) => a.dataObj - b.dataObj);
    setProximosEventos(eventos.slice(0, 3));
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
            <h3>Próximos eventos</h3>
            {favorites.length === 0 ? (
              <p style={{ color: "#888", fontStyle: "italic" }}>
                Adicione instituições aos favoritos e acompanhe aqui as datas
                dos vestibulares mais próximos! 😉
              </p>
            ) : proximosEventos.length === 0 ? (
              <p style={{ color: "#888", fontStyle: "italic" }}>
                Nenhum vestibular futuro encontrado nos seus favoritos. Fique de
                olho nas atualizações!
              </p>
            ) : (
              <ul className="event-list">
                {proximosEventos.map((ev, i) => (
                  <li key={i}>
                    <FaCalendarCheck className="icon" />
                    <span>
                      <b>{ev.nome}</b> — {ev.processo} ({ev.etapa}):{" "}
                      <b>{ev.data}</b>
                    </span>
                  </li>
                ))}
              </ul>
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
