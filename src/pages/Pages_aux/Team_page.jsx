import React from "react";
import "./Team_page.css";
import {
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaArrowLeft,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Kauã Faria",
      img: "/assets/Members/kaua.jpeg",
      desc: "Aluno de Engenharia de Computação do CEFET-MG e diretor de projetos da Commit Jr, empresa júnior de computação.",
    },
    {
      name: "Gabriel Carvalho",
      img: "/assets/Members/ctt.jpeg",
      desc: "Aluno de Engenharia de Computação do CEFET-MG e estagiário de desenvolvimento na GOL Linhas Aéreas.",
    },
    {
      name: "Caio Bertolato",
      img: "/assets/Members/caio.jpeg",
      desc: "Aluno de Engenharia de Computação do CEFET-MG e membro da equipe de competição Fórmula Cefast.",
    },
    {
      name: "Gabriel Expedito",
      img: "/assets/Members/gamata.jpeg",
      desc: "Aluno de Engenharia de Computação do CEFET-MG e técnico em Mecânica pela mesma instituição.",
    },
  ];

  const values = [
    {
      icon: <FaGraduationCap />,
      title: "Acessibilidade",
      description:
        "Trabalhamos para garantir que o conhecimento e a educação sejam acessíveis a todas as pessoas.",
    },
    {
      icon: <FaLightbulb />,
      title: "Inovação Social",
      description:
        "Desenvolvemos soluções tecnológicas inovadoras para criar impacto positivo em nossa sociedade.",
    },
    {
      icon: <FaHeart />,
      title: "Missão",
      description:
        "Dedicamos nossos esforços para democratizar e facilitar o acesso à educação em todo o país.",
    },
    {
      icon: <FaGlobe />,
      title: "Transparência",
      description:
        "Mantemos o compromisso com a clareza em nossas ações para construir confiança com nossos usuários.",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleInstituicoesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById("vestibulares");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("vestibulares");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  return (
    <div className="team-page">
      {/* Header da Página */}
      <div className="team-header fade-in-up fade-delay-1">
        <div className="team-header-content">
          <div className="team-hero">
            <h1>Quem Somos</h1>
            <p className="team-subtitle">
              Uma equipe apaixonada por democratizar o acesso à educação pública
              no Brasil
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="team-content">
        <div className="container">
          {/* Nossa Missão */}
          <section className="mission-section fade-in-up fade-delay-2">
            <div className="section-header">
              <FaUsers className="section-icon" />
              <h2>Nossa Missão</h2>
            </div>
            <div className="mission-content">
              <p>
                O <strong>Trilha Federal</strong> nasceu da convicção de que a
                educação pública de qualidade deve ser acessível a todos os
                brasileiros. Somos uma plataforma dedicada a conectar estudantes
                com as melhores oportunidades de ensino superior e técnico
                oferecidas pelas instituições federais do Brasil.
              </p>
              <p>
                Nossa missão é simplificar o processo de descoberta e acesso às
                instituições federais, fornecendo informações claras,
                atualizadas e organizadas sobre vestibulares, cursos e
                oportunidades educacionais em todo o país.
              </p>
            </div>
          </section>

          {/* Nossos Valores */}
          <section className="values-section fade-in-up fade-delay-3">
            <div className="section-header">
              <h2>Nossos Valores</h2>
              <p>Princípios que guiam nosso trabalho diário</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`value-card fade-in-up fade-delay-${index + 4}`}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Nossa Equipe */}
          <section className="team-section fade-in-up fade-delay-4">
            <div className="section-header">
              <h2>Nossa Equipe</h2>
              <p>Conheça as pessoas por trás do Trilha Federal</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`team-card fade-in-up fade-delay-${index + 5}`}
                >
                  <div className="member-avatar">
                    {member.img ? (
                      <img
                        src={member.img}
                        alt={member.name}
                        className="avatar-img"
                      />
                    ) : (
                      <span
                        className="avatar-emoji"
                        role="img"
                        aria-label="Avatar"
                      >
                        👤
                      </span>
                    )}
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">
                      Estudante de Engenharia de Computação
                    </p>
                    <p className="member-bio">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nossa História */}
          <section className="story-section fade-in-up fade-delay-6">
            <div className="section-header">
              <h2>Nossa História</h2>
            </div>
            <div className="story-content">
              <div className="story-text">
                <p>
                  O projeto Trilha Federal começou em 2025, através de um
                  projeto pensado para a disciplina de "Filosofia da
                  Tecnologia", quando identificamos uma lacuna significativa no
                  acesso à informação sobre instituições federais de ensino.
                  Muitos estudantes, especialmente aqueles de escolas públicas
                  ou de regiões menos favorecidas, não tinham acesso fácil a
                  informações sobre vestibulares, cursos e oportunidades
                  educacionais.
                </p>
                <p>
                  Decidimos criar uma plataforma que centralizasse essas
                  informações de forma clara, organizada e acessível. Hoje, o
                  Trilha Federal é uma ferramenta essencial para milhares de
                  estudantes em todo o Brasil, ajudando-os a encontrar o caminho
                  para uma educação de qualidade.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta-section fade-in-up fade-delay-7">
            <div className="cta-content">
              <h2>Faça Parte da Nossa Missão</h2>
              <p>
                Junte-se a nós na democratização da educação pública no Brasil.
                Sua jornada começa aqui.
              </p>
              <div className="cta-buttons">
                <a
                  href="#vestibulares"
                  className="cta-button primary"
                  onClick={handleInstituicoesClick}
                >
                  Explorar Instituições
                </a>
                <a
                  href="mailto:atrilhafederal@gmail.com"
                  className="cta-button secondary"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
          </section>

          {/* QR Code do Site - Final da Página */}
          <section className="qrcode-section fade-in-up fade-delay-8">
            <div className="qrcode-wide-container">
              <div className="qrcode-text">
                <h3>Acesse o nosso site!</h3>
                <p>
                  Escaneie o QR code ao lado para acessar rapidamente em seu
                  dispositivo móvel.
                  <br />
                  
                </p>
              </div>
              <div className="qrcode-img-wrapper">
                <img
                  src="/assets/QRcode/QRcode_site.jpg"
                  alt="QR code do site Trilha Federal"
                  className="qrcode-img"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
