import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import institutos from "../institutos.json";

const IFMG = () => {
  const instituto = institutos.find((inst) => inst.sigla === "IFMG");

  if (!instituto) {
    return <div>Instituto não encontrado</div>;
  }

  return <InstitutionPage {...instituto} />;
};

export default IFMG;
