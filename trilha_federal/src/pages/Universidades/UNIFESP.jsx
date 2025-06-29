import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UNIFESP = () => {
  const unifespData = universidades.find((u) => u.sigla === "UNIFESP");

  if (!unifespData) {
    return <div>Dados da UNIFESP não encontrados.</div>;
  }

  return <InstitutionPage {...unifespData} />;
};

export default UNIFESP;
