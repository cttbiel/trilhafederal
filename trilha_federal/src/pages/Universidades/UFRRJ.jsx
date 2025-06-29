import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFRRJ = () => {
  const ufrrjData = universidades.find((u) => u.sigla === "UFRRJ");

  if (!ufrrjData) {
    return <div>Dados da UFRRJ não encontrados.</div>;
  }

  return <InstitutionPage {...ufrrjData} />;
};

export default UFRRJ;
