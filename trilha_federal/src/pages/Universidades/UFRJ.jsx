import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFRJ = () => {
  const ufrjData = universidades.find((u) => u.sigla === "UFRJ");

  if (!ufrjData) {
    return <div>Dados da UFRJ não encontrados.</div>;
  }

  return <InstitutionPage {...ufrjData} />;
};

export default UFRJ;
