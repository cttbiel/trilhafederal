import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UNESP = () => {
  const unespData = universidades.find((u) => u.sigla === "UNESP");

  if (!unespData) {
    return <div>Dados da UNESP não encontrados.</div>;
  }

  return <InstitutionPage {...unespData} />;
};

export default UNESP;
