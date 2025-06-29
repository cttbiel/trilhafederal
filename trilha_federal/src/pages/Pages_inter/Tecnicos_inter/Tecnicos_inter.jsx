import React, { useState } from "react";
import "./Tecnicos_inter.css";
import { Link } from "react-router-dom";
import cefetImg from "../../../assets/Institution_images/CEFET_campus.jpg";
// Importe outras imagens de escolas técnicas conforme necessário

const escolasTecnicas = [
  {
    nome: "CEFET - Centro Federal de Educação Tecnológica",
    img: cefetImg,
    link: "/institution/cefet",
    descricao:
      "Instituição federal de excelência em educação tecnológica e profissional.",
    regiao: "Sudeste",
    estado: "Minas Gerais",
  },
  {
    nome: "IFMG - Instituto Federal de Minas Gerais",
    img: cefetImg, // Usar imagem temporária
    link: "/institution/ifmg",
    descricao:
      "Rede de institutos federais com foco em educação profissional e tecnológica.",
    regiao: "Sudeste",
    estado: "Minas Gerais",
  },
  {
    nome: "IFRJ - Instituto Federal do Rio de Janeiro",
    img: cefetImg, // Usar imagem temporária
    link: "/institution/ifrj",
    descricao:
      "Instituição federal de referência em educação técnica e tecnológica.",
    regiao: "Sudeste",
    estado: "Rio de Janeiro",
  },
  {
    nome: "IFSC - Instituto Federal de Santa Catarina",
    img: cefetImg, // Usar imagem temporária
    link: "/institution/ifsc",
    descricao:
      "Centro de excelência em educação profissional e tecnológica no sul do Brasil.",
    regiao: "Sul",
    estado: "Santa Catarina",
  },
];

const TecnicosInter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredEscolas = escolasTecnicas.filter((escola) => {
    const matchesSearch =
      escola.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      escola.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "" || escola.regiao === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = [...new Set(escolasTecnicas.map((escola) => escola.regiao))];

  return (
    <div className="tecnicos-inter-container">
      <div className="tecnicos-header">
        <h1 className="tecnicos-title">Escolas Técnicas Federais do Brasil</h1>
        <p className="tecnicos-subtitle">
          Descubra as melhores escolas técnicas federais do país e encontre a
          instituição ideal para sua formação profissional. Explore cursos
          técnicos, processos seletivos e oportunidades de estudo em todo o
          Brasil.
        </p>
      </div>

      <div className="search-filter-section">
        <div className="search-filter-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar escola técnica..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="filter-container">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="region-filter"
            >
              <option value="">Todas as regiões</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="results-info">
          <p>Encontradas {filteredEscolas.length} escola(s) técnica(s)</p>
        </div>

        <div className="tecnicos-grid">
          {filteredEscolas.map((escola, idx) => (
            <div className="escola-card" key={idx}>
              <img src={escola.img} alt={escola.nome} className="escola-img" />
              <h2 className="escola-nome">{escola.nome}</h2>
              <p className="escola-desc">{escola.descricao}</p>
              <div className="escola-info">
                <span className="escola-regiao">{escola.regiao}</span>
                <span className="escola-estado">{escola.estado}</span>
              </div>
              <Link to={escola.link} className="escola-link">
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>

      {filteredEscolas.length === 0 && (
        <div className="no-results">
          <p>
            Nenhuma escola técnica encontrada com os critérios selecionados.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedRegion("");
            }}
            className="clear-filters-btn"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default TecnicosInter;
