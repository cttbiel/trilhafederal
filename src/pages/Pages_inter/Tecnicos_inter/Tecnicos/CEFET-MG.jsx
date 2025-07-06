import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import tecnicos from "../tecnicos.json";

const CEFETMG = () => {
  const tecnico = tecnicos.find((tec) => tec.sigla === "CEFET-MG");
  if (!tecnico) return <div>Escola técnica não encontrada</div>;
  return <InstitutionPage {...tecnico} />;
};

export default CEFETMG;
