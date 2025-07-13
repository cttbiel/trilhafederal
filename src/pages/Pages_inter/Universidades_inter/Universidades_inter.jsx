import React, { useState, useMemo } from "react";
import universidades from "./universidades.json";
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import "./Universidades_inter.css";
import { Helmet } from "react-helmet-async";
import { FaHeart } from "react-icons/fa";

const getUniqueEstados = (list) => {
  const estados = list.map((u) => u.estado);
  return ["Todos"].concat([...new Set(estados)]);
};

const UniversidadesInter = () => {
  const [busca, setBusca] = useState("");
  const [estado, setEstado] = useState("Todos");
  const estados = useMemo(() => getUniqueEstados(universidades), []);
  // Remover favoritos, loadingFav e handleToggleFavorite pois não são usados aqui
  // const { favorites, addFavorite, removeFavorite } = useAuth();
  // const [loadingFav, setLoadingFav] = useState("");
  // const handleToggleFavorite = async (sigla, isFav) => { ... }

  const universidadesFiltradas = useMemo(() => {
    return universidades.filter((uni) => {
      const nomeMatch = uni.nome.toLowerCase().includes(busca.toLowerCase());
      const estadoMatch = estado === "Todos" || uni.estado === estado;
      return nomeMatch && estadoMatch;
    });
  }, [busca, estado]);

  return (
    <>
      <Helmet>
        <title>Universidades Federais | Trilha Federal</title>
        <meta
          name="description"
          content="Descubra todas as universidades federais do Brasil, informações sobre vestibulares, cursos e oportunidades. Prepare-se para o ensino superior público!"
        />
      </Helmet>
      <div className="universidades-inter-container">
        <div className="universidades-header">
          <h1 className="universidades-title">
            Universidades Públicas do Sudeste
          </h1>
          <p className="universidades-subtitle">
            Descubra as principais universidades federais e estaduais da região
            Sudeste. Clique em cada instituição para ver detalhes sobre cursos,
            processos seletivos, cotas e muito mais!
          </p>
          <div className="search-filter-section">
            <div className="search-filter-content">
              <div className="search-container">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Buscar por nome da universidade..."
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
        <div className="universidades-grid">
          {universidadesFiltradas.length === 0 && (
            <div className="no-results">Nenhuma universidade encontrada.</div>
          )}
          {universidadesFiltradas.map((uni) => (
            <div className="universidade-card" key={uni.sigla}>
              <div className="universidade-img-wrapper">
                <img
                  src={uni.imagens.campus}
                  alt={`Campus ${uni.sigla}`}
                  className="universidade-img"
                  loading="lazy"
                />
              </div>
              <div className="universidade-info">
                <h2>{uni.nome}</h2>
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
                  <span className="tag-chip universidade-tag">
                    {uni.regiao}
                  </span>
                  <span className="tag-chip universidade-tag">
                    {uni.estado}
                  </span>
                </div>
                <Link
                  to={`/universidade/${uni.sigla.toLowerCase()}`}
                  className="universidade-link"
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

export default UniversidadesInter;
