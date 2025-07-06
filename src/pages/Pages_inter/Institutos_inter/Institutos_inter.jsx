import React, { useState, useMemo } from "react";
import institutos from "./institutos.json";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import "./Institutos_inter.css";
import { Helmet } from "react-helmet-async";

const getUniqueEstados = (list) => {
  const estados = list.map((u) => u.estado);
  return ["Todos"].concat([...new Set(estados)]);
};

const InstitutosInter = () => {
  const [busca, setBusca] = useState("");
  const [estado, setEstado] = useState("Todos");
  const estados = useMemo(() => getUniqueEstados(institutos), []);

  const institutosFiltrados = useMemo(() => {
    return institutos.filter((inst) => {
      const nomeMatch = inst.nome.toLowerCase().includes(busca.toLowerCase());
      const estadoMatch = estado === "Todos" || inst.estado === estado;
      return nomeMatch && estadoMatch;
    });
  }, [busca, estado]);

  return (
    <>
      <Helmet>
        <title>Institutos Federais | Trilha Federal</title>
        <meta
          name="description"
          content="Veja a lista completa de institutos federais, cursos técnicos e superiores, vestibulares e oportunidades em todo o Brasil."
        />
      </Helmet>
      <div className="institutos-inter-container">
        <div className="institutos-header">
          <h1 className="institutos-title">Institutos Federais do Sudeste</h1>
          <p className="institutos-subtitle">
            Descubra os principais institutos federais da região Sudeste. Clique
            em cada instituição para ver detalhes sobre cursos, processos
            seletivos, cotas e muito mais!
          </p>
          <div className="search-filter-section">
            <div className="search-filter-content">
              <div className="search-container">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Buscar por nome do instituto..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
                <FiSearch className="search-icon" />
              </div>
              <div className="filter-container">
                <div className="region-filter-wrapper">
                  <select
                    className="region-filter"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  >
                    {estados.map((est) => (
                      <option key={est} value={est}>
                        {est}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="region-filter-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="institutos-grid">
          {institutosFiltrados.length === 0 && (
            <div className="no-results">Nenhum instituto encontrado.</div>
          )}
          {institutosFiltrados.map((inst) => (
            <div className="instituto-card" key={inst.sigla}>
              <div className="instituto-img-wrapper">
                <img
                  src={inst.imagens.campus}
                  alt={`Campus ${inst.sigla}`}
                  className="instituto-img"
                  loading="lazy"
                />
              </div>
              <div className="instituto-info">
                <h2>{inst.nome}</h2>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "center",
                    marginBottom: "1.2rem",
                    flexWrap: "wrap",
                    minHeight: "2.2em",
                    alignItems: "center",
                  }}
                >
                  <span className="tag-chip instituto-tag">{inst.regiao}</span>
                  <span className="tag-chip instituto-tag">{inst.estado}</span>
                </div>
                <Link
                  to={`/instituto/${inst.sigla.toLowerCase()}`}
                  className="instituto-link"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InstitutosInter;
