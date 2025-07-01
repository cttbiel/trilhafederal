import React, { useState, useMemo } from "react";
import tecnicos from "./tecnicos.json";
import { Link } from "react-router-dom";
import "./Tecnicos_inter.css";

const getUniqueEstados = (list) => {
  const estados = list.map((u) => u.estado);
  return ["Todos"].concat([...new Set(estados)]);
};

const TecnicosInter = () => {
  const [busca, setBusca] = useState("");
  const [estado, setEstado] = useState("Todos");
  const estados = useMemo(() => getUniqueEstados(tecnicos), []);

  const tecnicosFiltrados = useMemo(() => {
    return tecnicos.filter((tec) => {
      const nomeMatch = tec.nome.toLowerCase().includes(busca.toLowerCase());
      const estadoMatch = estado === "Todos" || tec.estado === estado;
      return nomeMatch && estadoMatch;
    });
  }, [busca, estado]);

  return (
    <div className="tecnicos-inter-container">
      <div className="tecnicos-header">
        <h1 className="tecnicos-title">Escolas Técnicas do Sudeste</h1>
        <p className="tecnicos-subtitle">
          Descubra as principais escolas técnicas federais e estaduais da região
          Sudeste. Clique em cada instituição para ver detalhes sobre cursos,
          processos seletivos, cotas e muito mais!
        </p>
        <div className="search-filter-section">
          <div className="search-filter-content">
            <div className="search-container">
              <input
                className="search-input"
                type="text"
                placeholder="Buscar por nome da escola técnica..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
              <span className="search-icon" role="img" aria-label="Buscar">
                🔍
              </span>
            </div>
            <div className="filter-container">
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
            </div>
          </div>
        </div>
      </div>
      <div className="tecnicos-grid">
        {tecnicosFiltrados.length === 0 && (
          <div className="no-results">Nenhuma escola técnica encontrada.</div>
        )}
        {tecnicosFiltrados.map((tec) => (
          <div className="tecnico-card" key={tec.sigla}>
            <div className="tecnico-img-wrapper">
              <img
                src={tec.imagens.campus}
                alt={`Campus ${tec.sigla}`}
                className="tecnico-img"
                loading="lazy"
              />
            </div>
            <div className="tecnico-info">
              <h2>{tec.nome}</h2>
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
                <span className="tag-chip tecnico-tag">{tec.regiao}</span>
                <span className="tag-chip tecnico-tag">{tec.estado}</span>
              </div>
              <Link
                to={`/tecnico/${tec.sigla.toLowerCase()}`}
                className="tecnico-link"
              >
                Ver detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TecnicosInter;
