import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UNICAMP = () => {
  const unicampData = universidades.find((u) => u.sigla === "UNICAMP");

  if (!unicampData) {
    return <div>Dados da UNICAMP não encontrados.</div>;
  }

  return <InstitutionPage {...unicampData} />;
};

export default UNICAMP;
