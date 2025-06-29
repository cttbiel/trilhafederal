import React from "react";
import "./CEFET.css";
import cefetImage from "../../../../assets/Institution_images/CEFET_campus.jpg";
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

const CEFET = () => {
  const data = {
    name: "Centro Federal de Educação Tecnológica de Minas Gerais",
    type: "Instituto Federal",
    location: "Belo Horizonte, MG",
    website: "https://www.cefetmg.br",
    phone: "(31) 3319-7000",
    email: "gabinete@cefetmg.br",
    description:
      "O CEFET-MG é uma instituição federal de ensino superior, técnico e tecnológico, reconhecida pela qualidade de seus cursos e pela formação de profissionais altamente qualificados para o mercado de trabalho.",
    courses: [
      "Engenharia de Computação",
      "Engenharia Elétrica",
      "Engenharia Mecânica",
      "Engenharia Civil",
      "Técnico em Informática",
      "Técnico em Eletrônica",
      "Técnico em Mecatrônica",
    ],
    stats: {
      students: "18.000+",
      courses: "30+",
      professors: "800+",
      yearFounded: "1910",
    },
    admissionInfo: {
      nextExam: "2024",
      registrationPeriod: "1 de Fevereiro a 1 de Abril",
      examDate: "20 de Maio de 2024",
      vacancies: "1.800",
    },
    image: cefetImage,
  };

  return (
    <FadeInPageWrapper>
      <div className="institution-page">
        {/* Header da Página */}
        <div
          className="institution-header"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${data.image}) center/cover no-repeat`,
          }}
        >
          <a href="/" className="back-button">
            <FaArrowLeft /> Voltar ao Início
          </a>
          <div className="institution-hero">
            <div className="institution-info">
              <h1>{data.name}</h1>
              <p className="institution-type">{data.type}</p>
              <p className="institution-location">
                <FaMapMarkerAlt /> {data.location}
              </p>
              <a
                href={data.website}
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
                  <p>{data.description}</p>
                </section>
                {/* Cursos Oferecidos */}
                <section className="courses-section">
                  <h2>Cursos Oferecidos</h2>
                  <div className="courses-grid">
                    {data.courses.map((course, index) => (
                      <div key={index} className="course-card">
                        <FaGraduationCap className="course-icon" />
                        <h3>{course}</h3>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Informações do Vestibular */}
                <section className="admission-section">
                  <h2>Informações do Vestibular</h2>
                  <div className="admission-grid">
                    <div className="admission-card">
                      <FaCalendarAlt className="admission-icon" />
                      <h3>Próximo Vestibular</h3>
                      <p>{data.admissionInfo.nextExam}</p>
                    </div>
                    <div className="admission-card">
                      <FaCalendarAlt className="admission-icon" />
                      <h3>Período de Inscrição</h3>
                      <p>{data.admissionInfo.registrationPeriod}</p>
                    </div>
                    <div className="admission-card">
                      <FaCalendarAlt className="admission-icon" />
                      <h3>Data da Prova</h3>
                      <p>{data.admissionInfo.examDate}</p>
                    </div>
                    <div className="admission-card">
                      <FaUsers className="admission-icon" />
                      <h3>Vagas Disponíveis</h3>
                      <p>{data.admissionInfo.vacancies}</p>
                    </div>
                  </div>
                </section>
              </div>
              {/* Sidebar */}
              <div className="sidebar">
                {/* Estatísticas */}
                <section className="stats-section">
                  <h3>Estatísticas</h3>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <FaUsers className="stat-icon" />
                      <div>
                        <h4>{data.stats.students}</h4>
                        <p>Estudantes</p>
                      </div>
                    </div>
                    <div className="stat-item">
                      <FaGraduationCap className="stat-icon" />
                      <div>
                        <h4>{data.stats.courses}</h4>
                        <p>Cursos</p>
                      </div>
                    </div>
                    <div className="stat-item">
                      <FaUsers className="stat-icon" />
                      <div>
                        <h4>{data.stats.professors}</h4>
                        <p>Professores</p>
                      </div>
                    </div>
                    <div className="stat-item">
                      <FaChartBar className="stat-icon" />
                      <div>
                        <h4>{data.stats.yearFounded}</h4>
                        <p>Ano de Fundação</p>
                      </div>
                    </div>
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
                        <p>{data.phone}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <div>
                        <h4>Email</h4>
                        <p>{data.email}</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaGlobe className="contact-icon" />
                      <div>
                        <h4>Website</h4>
                        <a
                          href={data.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.website}
                        </a>
                      </div>
                    </div>
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

export default CEFET;
