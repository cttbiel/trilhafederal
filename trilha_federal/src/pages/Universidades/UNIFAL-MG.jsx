import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UNIFALMG = () => {
  const unifalmgData = universidades.find((u) => u.sigla === "UNIFAL-MG");

  if (!unifalmgData) {
    return <div>Dados da UNIFAL-MG não encontrados.</div>;
  }

  return <InstitutionPage {...unifalmgData} />;
};

export default UNIFALMG;
