import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import universidades from "../universidades.json";

const UFES = () => {
  const data = universidades.find((u) => u.sigla === "UFES");
  if (!data) return <div>Dados não encontrados.</div>;
  return <InstitutionPage {...data} />;
};

export default UFES;
