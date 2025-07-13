import React, { useState } from "react";
import "./InstitutionPage.css";
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
  FaStar,
  FaHeart,
} from "react-icons/fa";
import FadeInPageWrapper from "../../pages/Pages_aux/FadeInPageWrapper";
import { Link } from "react-router-dom";
import { useAuth } from "../../useAuth";
import { useToast } from "../../useToast";
import FloatingFavoriteButton from "./FloatingFavoriteButton";

const AdmissionCard = ({ proc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="admission-card">
      <FaCalendarAlt className="admission-icon" />
      <div className="admission-info">
        <h3>{proc.nome}</h3>
        <p>{proc.descricao}</p>
        {open && proc.datas && (
          <ul
            style={{
              fontSize: "0.98em",
              marginTop: "0.5em",
            }}
          >
            {Object.entries(proc.datas).map(([etapa, valor], i) => (
              <li key={i}>
                <b>{etapa[0].toUpperCase() + etapa.slice(1)}:</b> {valor}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="admission-btn" onClick={() => setOpen((v) => !v)}>
        {open ? "Fechar" : "Saiba mais"}
      </button>
    </div>
  );
};

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
  const [showMore, setShowMore] = useState(false);
  const { user, favorites, addFavorite, removeFavorite } = useAuth();
  const isFavorited = favorites.includes(sigla);
  const { showToast } = useToast();
  const [favLoading, setFavLoading] = useState(false);

  // Imagem padrão quando a imagem específica não carrega
  const defaultImage = "/assets/instituicoes/trilha_federal_img_001.jpeg";
  const campusImage = imagens?.campus || defaultImage;

  const shortDescription =
    descricao.slice(0, 150) + (descricao.length > 150 ? "..." : "");

  // Padronizar tipo para exibição
  let tipoPadrao = tipo;
  if (
    tipo?.toLowerCase().includes("técnico") ||
    tipo?.toLowerCase().includes("tecnico") ||
    tipo?.toLowerCase().includes("colégio") ||
    tipo?.toLowerCase().includes("colegio")
  ) {
    tipoPadrao = "Colégio Técnico";
  }

  const handleFavorite = async () => {
    setFavLoading(true);
    if (isFavorited) {
      await removeFavorite(sigla);
      showToast("Removido dos favoritos!", "info");
    } else {
      await addFavorite(sigla);
      showToast("Adicionado aos favoritos!", "success");
    }
    setFavLoading(false);
  };

  return (
    <FadeInPageWrapper fast={true}>
      <div className="institution-page">
        {/* Header da Página */}
        <div
          className="institution-header"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${campusImage}) center/cover no-repeat`,
          }}
        >
          <div className="institution-hero">
            <div className="institution-info">
              <h1>{nome}</h1>
              <span className="institution-type">{tipoPadrao}</span>
              <span className="institution-location">
                <FaMapMarkerAlt /> {cidade} - {estado}
              </span>
              {/* Botão favorito inline no mobile - REMOVIDO */}
              {contatos?.site && (
                <a
                  href={contatos.site}
                  className="website-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe /> Site Oficial <FaExternalLinkAlt />
                </a>
              )}
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
                  <div
                    className={`about-desc${showMore ? " expanded" : ""}`}
                    style={{
                      overflow: "hidden",
                      transition:
                        "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s",
                    }}
                  >
                    <p>{showMore ? descricao : shortDescription}</p>
                  </div>
                  {descricao.length > 150 && (
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
                    {cursos_graduacao?.map((course, index) => (
                      <div key={index} className="course-card">
                        <FaGraduationCap className="course-icon" />
                        <h3>{course}</h3>
                      </div>
                    ))}
                  </div>
                  {cursos_tecnicos && cursos_tecnicos.length > 0 && (
                    <>
                      <h2 style={{ marginTop: "2rem" }}>Cursos Técnicos</h2>
                      <div className="courses-grid">
                        {cursos_tecnicos.map((course, index) => (
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
                    {processos_seletivos?.map((proc, idx) => (
                      <AdmissionCard key={idx} proc={proc} />
                    ))}
                  </div>
                </section>

                {/* Cotas */}
                <section className="cotas-section">
                  <h2>Modalidades de Cotas</h2>
                  <ul style={{ marginLeft: "1.2em" }}>
                    {cotas?.map((cota, idx) => (
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
                    {campi?.map((campus, idx) => (
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
                    {contatos?.telefone && (
                      <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <div>
                          <h4>Telefone</h4>
                          <p>{contatos.telefone}</p>
                        </div>
                      </div>
                    )}
                    {contatos?.email && (
                      <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                          <h4>Email</h4>
                          <p>{contatos.email}</p>
                        </div>
                      </div>
                    )}
                    {contatos?.site && (
                      <div className="contact-item">
                        <FaGlobe className="contact-icon" />
                        <div>
                          <h4>Website</h4>
                          <a
                            href={contatos.site}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {contatos.site}
                          </a>
                        </div>
                      </div>
                    )}
                    {contatos?.instagram && (
                      <div className="contact-item">
                        <FaUsers className="contact-icon" />
                        <div>
                          <h4>Instagram</h4>
                          <p>{contatos.instagram}</p>
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
      {/* Botão flutuante de favorito via Portal, sempre fixo na viewport */}
      {user && (
        <FloatingFavoriteButton
          isFavorited={isFavorited}
          loading={favLoading}
          onClick={handleFavorite}
        />
      )}
    </FadeInPageWrapper>
  );
};

export default InstitutionPage;
