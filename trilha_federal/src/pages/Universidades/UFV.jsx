import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFV = () => {
  const ufvData = universidades.find((u) => u.sigla === "UFV");

  if (!ufvData) {
    return <div>Dados da UFV não encontrados.</div>;
  }

  return <InstitutionPage {...ufvData} />;
};

export default UFV;
