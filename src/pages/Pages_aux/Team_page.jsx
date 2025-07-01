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
import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Frontend",
      bio: "Especialista em React e design de interfaces. Apaixonada por criar experiências digitais que fazem a diferença na vida das pessoas.",
      avatar: "👩‍💻",
      linkedin: "#",
      github: "#",
      email: "ana.silva@trilhafederal.com.br",
    },
    {
      name: "Carlos Santos",
      role: "Desenvolvedor Backend",
      bio: "Focado em arquitetura de sistemas e APIs. Acredita que a tecnologia deve ser acessível a todos.",
      avatar: "👨‍💻",
      linkedin: "#",
      github: "#",
      email: "carlos.santos@trilhafederal.com.br",
    },
    {
      name: "Mariana Costa",
      role: "Designer UX/UI",
      bio: "Criativa e empática, transforma ideias em experiências visuais que conectam pessoas e informações.",
      avatar: "👩‍🎨",
      linkedin: "#",
      github: "#",
      email: "mariana.costa@trilhafederal.com.br",
    },
    {
      name: "João Pereira",
      role: "Analista de Dados",
      bio: "Responsável por análise e visualização de dados, garantindo decisões baseadas em evidências para o projeto.",
      avatar: "👨‍🔬",
      linkedin: "#",
      github: "#",
      email: "joao.pereira@trilhafederal.com.br",
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

  return (
    <div className="team-page">
      {/* Header da Página */}
      <div className="team-header fade-in-up fade-delay-1">
        <div className="team-header-content">
          <Link to="/" className="back-button">
            <FaArrowLeft /> Voltar ao Início
          </Link>
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
                    <span className="avatar-emoji">{member.avatar}</span>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                    <div className="member-social">
                      <a href={member.linkedin} aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href={member.github} aria-label="GitHub">
                        <FaGithub />
                      </a>
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nossa História */}
          <section className="story-section fade-in-up fade-delay-5">
            <div className="section-header">
              <h2>Nossa História</h2>
            </div>
            <div className="story-content">
              <div className="story-text">
                <p>
                  O projeto Trilha Federal começou em 2024, quando identificamos
                  uma lacuna significativa no acesso à informação sobre
                  instituições federais de ensino. Muitos estudantes,
                  especialmente aqueles de escolas públicas ou de regiões menos
                  favorecidas, não tinham acesso fácil a informações sobre
                  vestibulares, cursos e oportunidades educacionais.
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
          <section className="cta-section fade-in-up fade-delay-6">
            <div className="cta-content">
              <h2>Faça Parte da Nossa Missão</h2>
              <p>
                Junte-se a nós na democratização da educação pública no Brasil.
                Sua jornada começa aqui.
              </p>
              <div className="cta-buttons">
                <Link to="/" className="cta-button primary">
                  Explorar Instituições
                </Link>
                <a
                  href="mailto:contato@trilhafederal.com.br"
                  className="cta-button secondary"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
