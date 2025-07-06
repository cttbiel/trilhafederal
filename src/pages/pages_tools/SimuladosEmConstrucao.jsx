import React from "react";

const SimuladosEmConstrucao = () => (
  <div
    style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f7f7f9",
      color: "#222",
      borderRadius: "16px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
      margin: "40px auto",
      maxWidth: 500,
      padding: 32,
    }}
  >
    <span style={{ fontSize: 64, marginBottom: 16 }}>🚧</span>
    <h1 style={{ fontWeight: 700, fontSize: 28, marginBottom: 12 }}>
      Em construção
    </h1>
    <p style={{ fontSize: 18, textAlign: "center" }}>
      O recurso <b>Simulados</b> estará disponível em breve.
      <br />
      Estamos trabalhando para trazer essa funcionalidade para você!
    </p>
  </div>
);

export default SimuladosEmConstrucao;
