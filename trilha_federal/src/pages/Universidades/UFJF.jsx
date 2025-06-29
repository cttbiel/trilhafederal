import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFJF = () => {
  const ufjfData = universidades.find((u) => u.sigla === "UFJF");

  if (!ufjfData) {
    return <div>Dados da UFJF não encontrados.</div>;
  }

  return <InstitutionPage {...ufjfData} />;
};

export default UFJF;
