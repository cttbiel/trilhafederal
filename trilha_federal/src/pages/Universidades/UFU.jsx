import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFU = () => {
  const ufuData = universidades.find((u) => u.sigla === "UFU");

  if (!ufuData) {
    return <div>Dados da UFU não encontrados.</div>;
  }

  return <InstitutionPage {...ufuData} />;
};

export default UFU;
