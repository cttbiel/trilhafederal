import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import tecnicos from "../tecnicos.json";

const CEFETRJ = () => {
  const tecnico = tecnicos.find((tec) => tec.sigla === "CEFET-RJ");
  if (!tecnico) return <div>Escola técnica não encontrada</div>;
  return <InstitutionPage {...tecnico} />;
};

export default CEFETRJ;
