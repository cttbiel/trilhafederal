import React, { useState } from "react";
import "./Institutos_inter.css";
import { Link } from "react-router-dom";
import cefetImg from "../../../assets/Institution_images/CEFET_campus.jpg";
// Importe outras imagens de institutos conforme necessário

const institutos = [
  {
    nome: "IFMG - Instituto Federal de Minas Gerais",
    img: cefetImg,
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
  {
    nome: "IFB - Instituto Federal de Brasília",
    img: cefetImg, // Usar imagem temporária
    link: "/institution/ifb",
    descricao:
      "Instituição federal na capital do Brasil, destaque em educação tecnológica.",
    regiao: "Centro-Oeste",
    estado: "Distrito Federal",
  },
];

const InstitutosInter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredInstitutos = institutos.filter((instituto) => {
    const matchesSearch =
      instituto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instituto.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "" || instituto.regiao === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = [...new Set(institutos.map((instituto) => instituto.regiao))];

  return (
    <div className="institutos-inter-container">
      <div className="institutos-header">
        <h1 className="institutos-title">Institutos Federais do Brasil</h1>
        <p className="institutos-subtitle">
          Descubra os melhores institutos federais do país e encontre a
          instituição ideal para sua formação profissional. Explore cursos
          técnicos, tecnológicos e oportunidades de estudo em todo o Brasil.
        </p>
      </div>

      <div className="search-filter-section">
        <div className="search-filter-content">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar instituto..."
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
          <p>Encontrados {filteredInstitutos.length} instituto(s)</p>
        </div>

        <div className="institutos-grid">
          {filteredInstitutos.map((instituto, idx) => (
            <div className="instituto-card" key={idx}>
              <img
                src={instituto.img}
                alt={instituto.nome}
                className="instituto-img"
              />
              <h2 className="instituto-nome">{instituto.nome}</h2>
              <p className="instituto-desc">{instituto.descricao}</p>
              <div className="instituto-info">
                <span className="instituto-regiao">{instituto.regiao}</span>
                <span className="instituto-estado">{instituto.estado}</span>
              </div>
              <Link to={instituto.link} className="instituto-link">
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      </div>

      {filteredInstitutos.length === 0 && (
        <div className="no-results">
          <p>Nenhum instituto encontrado com os critérios selecionados.</p>
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

export default InstitutosInter;
