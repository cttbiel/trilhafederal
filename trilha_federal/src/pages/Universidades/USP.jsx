import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const USP = () => {
  const uspData = universidades.find((u) => u.sigla === "USP");

  if (!uspData) {
    return <div>Dados da USP não encontrados.</div>;
  }

  return <InstitutionPage {...uspData} />;
};

export default USP;
