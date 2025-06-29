import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UEMG = () => {
  const uemgData = universidades.find((u) => u.sigla === "UEMG");

  if (!uemgData) {
    return <div>Dados da UEMG não encontrados.</div>;
  }

  return <InstitutionPage {...uemgData} />;
};

export default UEMG;
