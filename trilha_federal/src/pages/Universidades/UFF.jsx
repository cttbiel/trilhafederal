import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFF = () => {
  const uffData = universidades.find((u) => u.sigla === "UFF");

  if (!uffData) {
    return <div>Dados da UFF não encontrados.</div>;
  }

  return <InstitutionPage {...uffData} />;
};

export default UFF;
