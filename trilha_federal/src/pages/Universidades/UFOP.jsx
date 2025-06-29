import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFOP = () => {
  const ufopData = universidades.find((u) => u.sigla === "UFOP");

  if (!ufopData) {
    return <div>Dados da UFOP não encontrados.</div>;
  }

  return <InstitutionPage {...ufopData} />;
};

export default UFOP;
