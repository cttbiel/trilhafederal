import React, { useState, useMemo } from "react";
import institutos from "./institutos.json";
import { Link } from "react-router-dom";
import "./Institutos_inter.css";

const getUniqueEstados = (list) => {
  const estados = list.map((u) => u.estado);
  return ["Todos"].concat([...new Set(estados)]);
};

function limitarPalavras(texto, limite) {
  const palavras = texto.split(" ");
  if (palavras.length <= limite) return texto;
  return palavras.slice(0, limite).join(" ") + "...";
}

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
  );
};

export default InstitutosInter;
