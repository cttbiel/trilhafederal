import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import institutos from "../institutos.json";

const IFTM = () => {
  const instituto = institutos.find((inst) => inst.sigla === "IFTM");

  if (!instituto) {
    return <div>Instituto não encontrado</div>;
  }

  return <InstitutionPage {...instituto} />;
};

export default IFTM;
