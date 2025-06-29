import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFVJM = () => {
  const ufvjmData = universidades.find((u) => u.sigla === "UFVJM");

  if (!ufvjmData) {
    return <div>Dados da UFVJM não encontrados.</div>;
  }

  return <InstitutionPage {...ufvjmData} />;
};

export default UFVJM;
