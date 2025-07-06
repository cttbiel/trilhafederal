import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import tecnicos from "../tecnicos.json";

const COLUNI = () => {
  const tecnico = tecnicos.find((tec) => tec.sigla === "COLUNI");
  if (!tecnico) return <div>Escola técnica não encontrada</div>;
  return <InstitutionPage {...tecnico} />;
};

export default COLUNI;
