import React, { useState } from "react";
import "./InstitutionPage.css";

const InstitutionPage = ({
  nome,
  tipo,
  sigla,
  estado,
  cidade,
  campi,
  cursos_graduacao,
  cursos_tecnicos,
  processos_seletivos,
  cotas,
  contatos,
  imagens,
  descricao,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Função para lidar com erro de carregamento de imagem
  const handleImageError = () => {
    setImageError(true);
  };

  // Imagem padrão quando a imagem específica não carrega
  const defaultImage = "/src/assets/Main_images/trilha_federal_img_001.jpeg";

  return (
    <div className="institution-page">
      <div className="institution-header">
        <div className="institution-info">
          <h1>{nome}</h1>
          <p className="institution-type">{tipo}</p>
          <p className="institution-location">
            {cidade}, {estado}
          </p>
        </div>
        <div className="institution-image">
          <img
            src={imageError ? defaultImage : imagens?.campus || defaultImage}
            alt={`Campus da ${nome}`}
            onError={handleImageError}
          />
        </div>
      </div>

      <div className="institution-content">
        <div className="main-content">
          <section className="description-section">
            <h2>Sobre a {sigla}</h2>
            <div className={`description-text ${expanded ? "expanded" : ""}`}>
              <p>{descricao}</p>
              {expanded && (
                <div className="additional-info">
                  <p>
                    A {nome} é uma instituição de ensino superior pública
                    federal, comprometida com a excelência acadêmica e a
                    formação de profissionais qualificados para o mercado de
                    trabalho.
                  </p>
                </div>
              )}
            </div>
            <button
              className="expand-button"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Ver menos" : "Saiba mais"}
            </button>
          </section>

          <section className="campi-section">
            <h2>Campi</h2>
            <div className="campi-grid">
              {campi?.map((campus, index) => (
                <div key={index} className="campus-card">
                  <h3>{campus.nome}</h3>
                  <p>{campus.endereco}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="courses-section">
            <h2>Cursos de Graduação</h2>
            <div className="courses-grid">
              {cursos_graduacao?.map((curso, index) => (
                <div key={index} className="course-item">
                  {curso}
                </div>
              ))}
            </div>
          </section>

          {cursos_tecnicos && cursos_tecnicos.length > 0 && (
            <section className="technical-courses-section">
              <h2>Cursos Técnicos</h2>
              <div className="technical-courses-grid">
                {cursos_tecnicos.map((curso, index) => (
                  <div key={index} className="technical-course-item">
                    <h4>{curso.nome}</h4>
                    <p>Modalidade: {curso.modalidade}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="sidebar">
          <section className="selection-process-section">
            <h2>Processos Seletivos</h2>
            <div className="process-list">
              {processos_seletivos?.map((processo, index) => (
                <div key={index} className="process-item">
                  <h3>{processo.nome}</h3>
                  <p>{processo.descricao}</p>
                  {processo.datas && (
                    <div className="process-dates">
                      {Object.entries(processo.datas).map(([key, value]) => (
                        <p key={key}>
                          <strong>{key}:</strong> {value}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="quotas-section">
            <h2>Sistema de Cotas</h2>
            <div className="quotas-list">
              {cotas?.map((cota, index) => (
                <div key={index} className="quota-item">
                  <h4>{cota.modalidade}</h4>
                  <p>{cota.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-section">
            <h2>Contatos</h2>
            <div className="contact-info">
              {contatos?.site && (
                <div className="contact-item">
                  <strong>Site:</strong>
                  <a
                    href={contatos.site}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contatos.site}
                  </a>
                </div>
              )}
              {contatos?.telefone && (
                <div className="contact-item">
                  <strong>Telefone:</strong>
                  <span>{contatos.telefone}</span>
                </div>
              )}
              {contatos?.email && (
                <div className="contact-item">
                  <strong>E-mail:</strong>
                  <a href={`mailto:${contatos.email}`}>{contatos.email}</a>
                </div>
              )}
              {contatos?.instagram && (
                <div className="contact-item">
                  <strong>Instagram:</strong>
                  <span>{contatos.instagram}</span>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InstitutionPage;
