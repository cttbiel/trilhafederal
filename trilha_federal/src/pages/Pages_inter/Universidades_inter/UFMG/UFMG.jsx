import React, { useState } from "react";
import "./UFMG.css";
import universidades from "../universidades.json";
import {
  FaMapMarkerAlt,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaGraduationCap,
  FaUsers,
  FaChartBar,
  FaArrowLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";
import FadeInPageWrapper from "../../../Pages_aux/FadeInPageWrapper";

const UFMG = () => {
  const [showMore, setShowMore] = useState(false);
  // Busca os dados da UFMG no JSON
  const data = universidades.find((uni) => uni.sigla === "UFMG");
  if (!data) return <div>Universidade não encontrada</div>;

  const shortDescription =
    data.descricao.slice(0, 150) + (data.descricao.length > 150 ? "..." : "");

  return (
    <FadeInPageWrapper fast={true}>
      <div className="institution-page">
        {/* Header da Página */}
        <div
          className="institution-header"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${data.imagens.campus}) center/cover no-repeat`,
          }}
        >
          <a href="/universidades" className="back-button">
            <FaArrowLeft /> Voltar à Lista
          </a>
          <div className="institution-hero">
            <div className="institution-info">
              <h1>{data.nome}</h1>
              <p className="institution-type">{data.tipo}</p>
              <p className="institution-location">
                <FaMapMarkerAlt /> {data.cidade} - {data.estado}
              </p>
              <a
                href={data.contatos.site}
                className="website-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe /> Site Oficial <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        {/* Conteúdo Principal */}
        <div className="institution-content">
          <div className="container">
            <div className="content-grid">
              {/* Coluna Principal */}
              <div className="main-content">
                {/* Sobre a Instituição */}
                <section className="about-section">
                  <h2>Sobre a Instituição</h2>
                  <p>{showMore ? data.descricao : shortDescription}</p>
                  {data.descricao.length > 150 && (
                    <button
                      className="saiba-mais-btn"
                      onClick={() => setShowMore((v) => !v)}
                    >
                      {showMore ? "Mostrar menos" : "Saiba mais"}
                    </button>
                  )}
                </section>
                {/* Cursos Oferecidos */}
                <section className="courses-section">
                  <h2>Cursos de Graduação</h2>
                  <div className="courses-grid">
                    {data.cursos_graduacao.map((course, index) => (
                      <div key={index} className="course-card">
                        <FaGraduationCap className="course-icon" />
                        <h3>{course}</h3>
                      </div>
                    ))}
                  </div>
                  {data.cursos_tecnicos && data.cursos_tecnicos.length > 0 && (
                    <>
                      <h2 style={{ marginTop: "2rem" }}>Cursos Técnicos</h2>
                      <div className="courses-grid">
                        {data.cursos_tecnicos.map((course, index) => (
                          <div key={index} className="course-card">
                            <FaGraduationCap className="course-icon" />
                            <h3>
                              {course.nome}{" "}
                              <span
                                style={{ fontWeight: 400, fontSize: "0.95em" }}
                              >
                                ({course.modalidade})
                              </span>
                            </h3>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </section>
                {/* Processos Seletivos */}
                <section className="admission-section">
                  <h2>Processos Seletivos</h2>
                  <div className="admission-grid">
                    {data.processos_seletivos.map((proc, idx) => (
                      <div className="admission-card" key={idx}>
                        <FaCalendarAlt className="admission-icon" />
                        <h3>{proc.nome}</h3>
                        <p>{proc.descricao}</p>
                        {proc.datas && (
                          <ul
                            style={{ fontSize: "0.98em", marginTop: "0.5em" }}
                          >
                            {Object.entries(proc.datas).map(
                              ([etapa, valor], i) => (
                                <li key={i}>
                                  <b>
                                    {etapa[0].toUpperCase() + etapa.slice(1)}:
                                  </b>{" "}
                                  {valor}
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
                {/* Cotas */}
                <section className="cotas-section">
                  <h2>Modalidades de Cotas</h2>
                  <ul style={{ marginLeft: "1.2em" }}>
                    {data.cotas.map((cota, idx) => (
                      <li key={idx}>
                        <b>{cota.modalidade}:</b> {cota.descricao}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              {/* Sidebar */}
              <div className="sidebar">
                {/* Campi */}
                <section className="stats-section">
                  <h3>Campi</h3>
                  <div className="stats-grid">
                    {data.campi.map((campus, idx) => (
                      <div className="stat-item" key={idx}>
                        <FaMapMarkerAlt className="stat-icon" />
                        <div>
                          <h4>{campus.nome}</h4>
                          <p style={{ fontSize: "0.98em" }}>
                            {campus.endereco}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Contato */}
                <section className="contact-section">
                  <h3>Contato</h3>
                  <div className="contact-info">
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <div>
                        <h4>Telefone</h4>
                        <p>{data.contatos.telefone}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <div>
                        <h4>Email</h4>
                        <p>{data.contatos.email}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaGlobe className="contact-icon" />
                      <div>
                        <h4>Website</h4>
                        <a
                          href={data.contatos.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.contatos.site}
                        </a>
                      </div>
                    </div>
                    {data.contatos.instagram && (
                      <div className="contact-item">
                        <FaGlobe className="contact-icon" />
                        <div>
                          <h4>Instagram</h4>
                          <a
                            href={`https://instagram.com/${data.contatos.instagram.replace(
                              "@",
                              ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {data.contatos.instagram}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInPageWrapper>
  );
};

export default UFMG;
