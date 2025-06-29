import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFES = () => {
  const ufesData = universidades.find((u) => u.sigla === "UFES");

  if (!ufesData) {
    return <div>Dados da UFES não encontrados.</div>;
  }

  return <InstitutionPage {...ufesData} />;
};

export default UFES;
