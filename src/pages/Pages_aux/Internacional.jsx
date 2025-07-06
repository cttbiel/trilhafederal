import React, { useEffect } from "react";
import "./Internacional.css";
import { FaGlobeAsia, FaShip } from "react-icons/fa";

const Internacional = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="internacional-page">
      <section className="hero-internacional">
        <div className="container">
          <div className="hero-internacional-flags">
            <span className="flag" role="img" aria-label="Bandeira do Japão">
              <img
                src="/assets/internacional/japao.png"
                alt="Bandeira do Japão"
                style={{ height: "1.7em", verticalAlign: "middle" }}
              />
            </span>
            <span className="flag" role="img" aria-label="Bandeira do Brasil">
              <img
                src="/assets/internacional/brasil.png"
                alt="Bandeira do Brasil"
                style={{ height: "1.7em", verticalAlign: "middle" }}
              />
            </span>
            <span className="flag" role="img" aria-label="Planeta Terra">
              <img
                src="/assets/internacional/planeta.png"
                alt="Planeta Terra"
                style={{ height: "1.7em", verticalAlign: "middle" }}
              />
            </span>
          </div>
          <h1 className="hero-internacional-title">Trilha Internacional</h1>
          <p className="hero-internacional-subtitle">
            Oportunidades reais para estudar e crescer no exterior. Descubra
            programas de destaque para brasileiros!
          </p>
        </div>
      </section>

      <section className="programas-internacionais">
        <div className="container">
          <div className="programas-cards">
            {/* MEXT */}
            <div className="programa-card-internacional">
              <div className="programa-icon japao">
                <img
                  src="/assets/internacional/japao.png"
                  alt="Bandeira do Japão"
                  style={{ height: "2em", verticalAlign: "middle" }}
                />
              </div>
              <h2>MEXT - Japão</h2>
              <p className="programa-desc">
                Bolsa integral do governo japonês para graduação, mestrado ou
                doutorado. Tudo custeado: passagem, mensalidade, bolsa mensal,
                curso de japonês e seguro saúde.
              </p>
              <ul className="programa-beneficios">
                <li>Passagem aérea ida e volta</li>
                <li>Mensalidade da universidade</li>
                <li>Bolsa mensal de ¥117.000+</li>
                <li>Curso de japonês gratuito</li>
                <li>Seguro saúde</li>
                <li>Acomodação subsidiada</li>
              </ul>
              <a
                href="https://www.br.emb-japan.go.jp/itpr_pt/bolsas_programas.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Saiba Mais
              </a>
            </div>

            {/* SWYAA */}
            <div className="programa-card-internacional">
              <div className="programa-icon swyaa">
                <img
                  src="/assets/internacional/navio.png"
                  alt="Navio SWYAA"
                  style={{ height: "2em", verticalAlign: "middle" }}
                />
              </div>
              <h2>SWYAA - Ship for World Youth Alumni Association</h2>
              <p className="programa-desc">
                Intercâmbio internacional promovido pelo governo do Japão,
                reunindo jovens líderes do mundo todo para experiências
                culturais, liderança e networking global.
              </p>
              <ul className="programa-beneficios">
                <li>Viagem internacional com tudo pago</li>
                <li>Imersão multicultural</li>
                <li>Desenvolvimento de liderança</li>
                <li>Networking global</li>
                <li>Atividades em alto-mar e em terra</li>
              </ul>
              <a
                href="http://www.swyaabrasil.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internacional;
