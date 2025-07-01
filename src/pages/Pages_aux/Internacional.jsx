import React from "react";
import "./Internacional.css";

const Internacional = () => {
  return (
    <div className="internacional-page">
      <section className="hero-internacional">
        <div className="container">
          <div className="hero-internacional-content">
            <h1 className="hero-internacional-title">Trilha Internacional</h1>
            <p className="hero-internacional-subtitle">
              Oportunidades de estudo no exterior com bolsas integrais. Descubra
              programas que custeiam 100% dos seus estudos em universidades de
              excelência ao redor do mundo.
            </p>
            <div className="hero-internacional-buttons">
              <a href="#destaque" className="btn btn-primary">
                Ver Destaque MEXT
              </a>
              <a href="#programas" className="btn btn-secondary">
                Todos os Programas
              </a>
            </div>
          </div>
          <div className="hero-internacional-flags">
            <span className="flag">🇯🇵</span>
            <span className="flag">🇨🇳</span>
            <span className="flag">🇰🇷</span>
            <span className="flag">🇹🇼</span>
            <span className="flag">🇹🇷</span>
            <span className="flag">🇷🇺</span>
          </div>
        </div>
      </section>

      <section id="destaque" className="destaque-programa">
        <div className="container">
          <div className="destaque-content">
            <div className="destaque-info">
              <div className="programa-badge">🌏 Destaque</div>
              <h2>Programa MEXT - Japão</h2>
              <p className="programa-descricao">
                O <strong>Monbukagakusho (MEXT)</strong> é o programa de bolsas
                do governo japonês que oferece <strong>bolsa integral</strong>{" "}
                para estudantes internacionais cursarem graduação, mestrado ou
                doutorado no Japão. Tudo custeado pelo governo japonês!
              </p>
              <div className="programa-beneficios">
                <h3>🎯 O que está incluído:</h3>
                <ul>
                  <li>✅ Passagem aérea ida e volta</li>
                  <li>✅ Mensalidade da universidade</li>
                  <li>✅ Bolsa mensal de ¥117.000 (cerca de R$ 3.800)</li>
                  <li>✅ Curso de japonês gratuito</li>
                  <li>✅ Seguro saúde</li>
                  <li>✅ Acomodação subsidiada</li>
                </ul>
              </div>
              <div className="programa-detalhes">
                <div className="detalhe-item">
                  <span className="detalhe-label">📅 Inscrições:</span> Abril a
                  Maio
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-label">🎓 Nível:</span> Graduação,
                  Mestrado, Doutorado
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-label">🌍 Elegibilidade:</span>{" "}
                  Estudantes de todo o mundo
                </div>
                <div className="detalhe-item">
                  <span className="detalhe-label">📚 Áreas:</span> Todas as
                  áreas do conhecimento
                </div>
              </div>
              <div className="programa-buttons">
                <a
                  href="https://www.br.emb-japan.go.jp/itpr_pt/bolsa_mext.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Saiba Mais sobre MEXT
                </a>
                <a href="#programas" className="btn btn-secondary">
                  Ver Outros Programas
                </a>
              </div>
            </div>
            <div className="destaque-image">
              <div className="japan-flag">🇯🇵</div>
              <div className="universities-logos">
                <span className="uni-logo">🏛️</span>
                <span className="uni-logo">🎓</span>
                <span className="uni-logo">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programas" className="outros-programas">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Outras Oportunidades Internacionais
            </h2>
            <p className="section-subtitle">
              Descubra programas de bolsas integrais em diversos países
            </p>
          </div>
          <div className="programas-grid">
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🇨🇳</span>
                <h3>Bolsas CSC - China</h3>
              </div>
              <p>
                Programa de bolsas do governo chinês para graduação, mestrado e
                doutorado em universidades chinesas de excelência.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Bolsa Integral</span>
                <span className="highlight">🎓 Todos os Níveis</span>
                <span className="highlight">🌍 Mundial</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Janeiro a Março
                </p>
                <p>
                  <strong>Bolsa:</strong> ¥3.000 - ¥3.500/mês
                </p>
              </div>
              <a
                href="https://www.campuschina.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🇰🇷</span>
                <h3>KGSP - Coreia do Sul</h3>
              </div>
              <p>
                Korean Government Scholarship Program oferece bolsas completas
                para estudantes internacionais em universidades sul-coreanas.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Bolsa Integral</span>
                <span className="highlight">🎓 Graduação/Mestrado</span>
                <span className="highlight">🌍 Mundial</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Setembro a Outubro
                </p>
                <p>
                  <strong>Bolsa:</strong> ₩900.000/mês
                </p>
              </div>
              <a
                href="https://www.studyinkorea.go.kr/pt/sub/gks/selectBoardList.do?bbsId=BBSMSTR_000000000652"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🇹🇼</span>
                <h3>Bolsas Taiwan - MOE</h3>
              </div>
              <p>
                Programa do Ministério da Educação de Taiwan para bolsas de
                estudo em universidades taiwanesas de qualidade.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Bolsa Integral</span>
                <span className="highlight">🎓 Graduação</span>
                <span className="highlight">🌍 Mundial</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Fevereiro a Março
                </p>
                <p>
                  <strong>Bolsa:</strong> NT$25.000/mês
                </p>
              </div>
              <a
                href="https://taiwanscholarship.moe.gov.tw/web/pages.aspx?p=7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🇹🇷</span>
                <h3>Türkiye Bursları</h3>
              </div>
              <p>
                Programa de bolsas do governo turco para estudantes
                internacionais em universidades turcas de prestígio.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Bolsa Integral</span>
                <span className="highlight">🎓 Todos os Níveis</span>
                <span className="highlight">🌍 Mundial</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Janeiro a Fevereiro
                </p>
                <p>
                  <strong>Bolsa:</strong> ₺1.600/mês
                </p>
              </div>
              <a
                href="https://www.turkiyeburslari.gov.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🇷🇺</span>
                <h3>Bolsas Rússia</h3>
              </div>
              <p>
                Programa do governo russo para bolsas de estudo em universidades
                russas de excelência acadêmica.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Bolsa Integral</span>
                <span className="highlight">🎓 Graduação</span>
                <span className="highlight">🌍 Mundial</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Outubro a Dezembro
                </p>
                <p>
                  <strong>Bolsa:</strong> ₽1.500/mês
                </p>
              </div>
              <a
                href="https://education-in-russia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🇮🇳</span>
                <h3>Bolsas Índia</h3>
              </div>
              <p>
                Programa de bolsas do governo indiano para estudantes
                internacionais em universidades indianas reconhecidas.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Bolsa Integral</span>
                <span className="highlight">🎓 Graduação</span>
                <span className="highlight">🌍 Mundial</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Março a Abril
                </p>
                <p>
                  <strong>Bolsa:</strong> ₹18.000/mês
                </p>
              </div>
              <a
                href="https://www.studyinindia.gov.in/Scholarships"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
            <div className="programa-card">
              <div className="programa-header">
                <span className="programa-flag">🌏</span>
                <h3>SWYAA - Ship for World Youth Alumni Association</h3>
              </div>
              <p>
                O SWYAA é um programa de intercâmbio internacional totalmente
                custeado pelo governo do Japão, que proporciona experiências
                culturais e de liderança a jovens de diversos países, incluindo
                o Brasil.
              </p>
              <div className="programa-highlights">
                <span className="highlight">💰 Tudo pago</span>
                <span className="highlight">🌍 Mundial</span>
                <span className="highlight">⛴️ Intercâmbio Cultural</span>
              </div>
              <div className="programa-info">
                <p>
                  <strong>Inscrições:</strong> Geralmente em Junho
                </p>
                <p>
                  <strong>Bolsa:</strong> Passagem, hospedagem, alimentação e
                  atividades inclusas
                </p>
              </div>
              <a
                href="https://www.swyaa.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Ver Detalhes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="dicas-internacionais">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Dicas para Aplicar em Bolsas Internacionais
            </h2>
            <p className="section-subtitle">
              Prepare-se adequadamente para maximizar suas chances de sucesso
            </p>
          </div>
          <div className="dicas-grid">
            <div className="dica-card">
              <span className="dica-icon">📝</span>
              <h3>Documentação</h3>
              <p>
                Prepare todos os documentos com antecedência: histórico escolar,
                certificados de proficiência, cartas de recomendação e
                declarações pessoais.
              </p>
            </div>
            <div className="dica-card">
              <span className="dica-icon">🗣️</span>
              <h3>Idiomas</h3>
              <p>
                Invista no aprendizado do idioma do país de destino. Muitos
                programas oferecem cursos preparatórios gratuitos.
              </p>
            </div>
            <div className="dica-card">
              <span className="dica-icon">📚</span>
              <h3>Preparação Acadêmica</h3>
              <p>
                Mantenha boas notas e participe de atividades extracurriculares
                que demonstrem seu potencial e interesse acadêmico.
              </p>
            </div>
            <div className="dica-card">
              <span className="dica-icon">⏰</span>
              <h3>Prazos</h3>
              <p>
                Fique atento aos prazos de inscrição. Alguns programas abrem
                apenas uma vez por ano e têm processos longos.
              </p>
            </div>
            <div className="dica-card">
              <span className="dica-icon">🎯</span>
              <h3>Objetivos Claros</h3>
              <p>
                Tenha objetivos acadêmicos e profissionais bem definidos. Isso
                será importante nas entrevistas e declarações pessoais.
              </p>
            </div>
            <div className="dica-card">
              <span className="dica-icon">🌍</span>
              <h3>Adaptação Cultural</h3>
              <p>
                Pesquise sobre a cultura do país de destino e prepare-se para a
                adaptação cultural que será necessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para sua aventura internacional?</h2>
            <p>
              Junte-se a milhares de estudantes que já conquistaram bolsas
              integrais no exterior
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">
                Começar Agora
              </a>
              <a href="/" className="btn btn-secondary">
                Voltar ao Início
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internacional;
