import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UERJ = () => {
  const uerjData = universidades.find((u) => u.sigla === "UERJ");

  if (!uerjData) {
    return <div>Dados da UERJ não encontrados.</div>;
  }

  return <InstitutionPage {...uerjData} />;
};

export default UERJ;
