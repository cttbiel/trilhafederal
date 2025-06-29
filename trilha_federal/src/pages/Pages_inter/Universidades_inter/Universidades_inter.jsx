import React from "react";
import universidades from "./universidades.json";
import { Link } from "react-router-dom";
import "./Universidades_inter.css";

const UniversidadesInter = () => {
  return (
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
      </div>
      <div className="universidades-grid">
        {universidades.map((uni) => (
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
              <p className="universidade-local">
                {uni.cidade} - {uni.estado}
              </p>
              <p className="universidade-desc">
                {uni.descricao.slice(0, 120)}
                {uni.descricao.length > 120 ? "..." : ""}
              </p>
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
  );
};

export default UniversidadesInter;
