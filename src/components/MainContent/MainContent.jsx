// src/components/MainContent.jsx
import React from "react";
import "./MainContent.css";
import {
  FaCalendarCheck,
  FaBook,
  FaUsers,
  FaChartBar,
  FaBell,
  FaGraduationCap,
  FaUniversity,
  FaCog,
  FaArrowRight,
  FaBullseye,
  FaLightbulb,
  FaHandshake,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MainContent = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="page-container">
      {/* Seção 1: Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              O caminho para o ensino público de excelência começa aqui
            </h1>
            <p className="hero-subtitle">
              Descubra oportunidades em universidades federais, institutos
              federais e escolas técnicas públicas. Informações que deveriam ser
              públicas, agora estão ao seu alcance.
            </p>
            <div className="hero-buttons">
              <a href="#vestibulares" className="hero-button primary">
                Explorar Vestibulares{" "}
                <FaArrowRight style={{ marginLeft: "8px" }} />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/Main_images/alunos.jpeg"
              alt="Alunos estudando"
              className="hero-img"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
        <div className="hero-background-shape"></div>
      </section>

      {/* Seção 2: Por que o Trilha Federal */}
      <section id="sobre" className="about-section">
        <div className="container">
          <h2 className="section-title">Por que o Trilha Federal?</h2>
          <p className="section-subtitle">
            Nossa missão é democratizar o acesso à informação sobre vestibulares
            federais
          </p>

          <div className="mission-vision-values">
            <div className="mv-item">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h3>Missão</h3>
              <p>
                Divulgar informações sobre{" "}
                <span>
                  vestibulares de universidades federais, institutos federais e
                  escolas técnicas públicas
                </span>{" "}
                que, apesar de serem públicas, são{" "}
                <span>pouco conhecidas pela população</span>.
              </p>
            </div>

            <div className="mv-item">
              <div className="mv-icon">
                <FaLightbulb />
              </div>
              <h3>Visão</h3>
              <p>
                Um Brasil onde <span>todos tenham conhecimento</span> sobre as{" "}
                <span>excelentes oportunidades de ensino público federal</span>{" "}
                disponíveis, permitindo escolhas educacionais mais informadas.
              </p>
            </div>

            <div className="mv-item">
              <div className="mv-icon">
                <FaHandshake />
              </div>
              <h3>Valores</h3>
              <p>
                <span>Transparência</span>,{" "}
                <span>democratização da informação</span>,{" "}
                <span>excelência educacional</span> e{" "}
                <span>compromisso com o desenvolvimento social</span> através da
                educação pública de qualidade.
              </p>
            </div>
          </div>

          <div className="history-section hide-on-mobile">
            <h3>Nossa História</h3>
            <p>
              Fundado em 2025 por quatro jovens estudantes do CEFET-MG, o Trilha
              Federal nasceu da experiência pessoal de Gabriel Junio Silva de
              Carvalho e Kauã Sergio Ramos Faria, que descobriram tardiamente as
              oportunidades em instituições federais após estudarem em escolas
              de ensino médio com poucos recursos. Hoje, junto com Gabriel
              Expedito Campos Coelho da Silva e Caio Bertolato Silva, todos
              cursando Engenharia de Computação, criaram esta plataforma para
              evitar que outros estudantes passem pela mesma situação.
            </p>
          </div>

          <div className="stats-section hide-on-mobile">
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Vestibulares</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Instituições</p>
            </div>
            <div className="stat-item">
              <h3>27</h3>
              <p>Estados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Vestibulares Federais */}
      <section id="vestibulares" className="vestibulares-section">
        <div className="container">
          <h2 className="section-title">Vestibulares Federais</h2>
          <p className="section-subtitle">
            Descubra oportunidades em todo o Brasil
          </p>

          <div className="institutions-grid">
            <div className="institution-card universidade">
              <div className="institution-icon">
                <FaGraduationCap />
              </div>
              <h3>Universidades Federais</h3>
              <p>
                Instituições de ensino superior públicas federais que oferecem
                cursos de graduação e pós-graduação de excelência.
              </p>
              <ul className="institution-list">
                <li>UFMG - Universidade Federal de Minas Gerais</li>
                <li>UFRJ - Universidade Federal do Rio de Janeiro</li>
                <li>USP - Universidade de São Paulo</li>
                <li>UNB - Universidade de Brasília</li>
              </ul>
              <Link
                to="/universidades"
                className="institution-link"
                onClick={scrollToTop}
              >
                Ver todas as Universidades
              </Link>
            </div>

            <div className="institution-card instituto">
              <div className="institution-icon">
                <FaUniversity />
              </div>
              <h3>Institutos Federais</h3>
              <p>
                Rede de instituições que oferecem educação profissional,
                científica e tecnológica em todos os níveis.
              </p>
              <ul className="institution-list">
                <li>IFMG - Instituto Federal de Minas Gerais</li>
                <li>IFRJ - Instituto Federal do Rio de Janeiro</li>
                <li>IFSP - Instituto Federal de São Paulo</li>
                <li>IFB - Instituto Federal de Brasília</li>
              </ul>
              <Link
                to="/institutos"
                className="institution-link"
                onClick={scrollToTop}
              >
                Ver todos os Institutos
              </Link>
            </div>

            <div className="institution-card tecnico">
              <div className="institution-icon">
                <FaCog />
              </div>
              <h3>Escolas Técnicas</h3>
              <p>
                Instituições especializadas em formação técnica de qualidade,
                preparando profissionais para o mercado de trabalho.
              </p>
              <ul className="institution-list">
                <li>ETEC - Escolas Técnicas Estaduais</li>
                <li>CEFET - Centros Federais de Educação Tecnológica</li>
                <li>Escolas Técnicas Federais</li>
                <li>Centros de Educação Profissional</li>
              </ul>
              <Link
                to="/tecnicos"
                className="institution-link"
                onClick={scrollToTop}
              >
                Ver todas as Escolas Técnicas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Recursos e Ferramentas */}
      <section id="recursos" className="resources-section">
        <div className="container">
          <h2 className="section-title">Recursos e Ferramentas</h2>
          <p className="section-subtitle">
            Tudo que você precisa para se preparar
          </p>

          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-icon">
                <FaCalendarCheck />
              </div>
              <h3>Calendário de Vestibulares</h3>
              <p>
                Acompanhe datas importantes, inscrições e provas de todos os
                vestibulares federais em um só lugar.
              </p>
              <a
                href="/calendario"
                className="resource-link"
                onClick={scrollToTop}
              >
                Saiba mais
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">
                <FaBook />
              </div>
              <h3>Guia de Estudos</h3>
              <p>
                Materiais de estudo, dicas e estratégias para se preparar
                adequadamente para os vestibulares.
              </p>
              <a
                href="/guia-estudos"
                className="resource-link"
                onClick={scrollToTop}
              >
                Saiba mais
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">
                <FaBullseye />
              </div>
              <h3>Simulados</h3>
              <p>
                Teste seus conhecimentos com simulados baseados em provas
                anteriores dos principais vestibulares.
              </p>
              <a
                href="/simulados"
                className="resource-link"
                onClick={scrollToTop}
              >
                Saiba mais
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">
                <FaUsers />
              </div>
              <h3>Comunidade</h3>
              <p>
                Conecte-se com outros estudantes, compartilhe experiências e
                tire suas dúvidas.
              </p>
              <a
                href="/comunidade"
                className="resource-link"
                onClick={scrollToTop}
              >
                Saiba mais
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">
                <FaChartBar />
              </div>
              <h3>Estatísticas</h3>
              <p>
                Análise de concorrência, notas de corte e dados históricos para
                ajudar na sua escolha.
              </p>
              <a
                href="/estatisticas"
                className="resource-link"
                onClick={scrollToTop}
              >
                Saiba mais
              </a>
            </div>

            <div className="resource-card">
              <div className="resource-icon">
                <FaBell />
              </div>
              <h3>Notificações</h3>
              <p>
                Receba alertas sobre aberturas de inscrições e datas importantes
                dos vestibulares.
              </p>
              <a
                href="/notificacoes"
                className="resource-link"
                onClick={scrollToTop}
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Contato Simplificado (nova versão grande) */}
      <section className="contato-destaque-section fade-in-up">
        <div className="contato-destaque-container">
          <div className="contato-destaque-text">
            <h2>Entre em Contato</h2>
            <p>Tem dúvidas, sugestões ou quer contribuir? Fale com a gente!</p>
            <div className="contato-destaque-info">
              <FaEnvelope
                style={{
                  fontSize: "2.2rem",
                  color: "var(--primary-color, #2551ca)",
                  marginBottom: "0.5rem",
                }}
              />
              <a
                href="mailto:atrilhafederal@gmail.com"
                className="contato-destaque-email"
              >
                atrilhafederal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
