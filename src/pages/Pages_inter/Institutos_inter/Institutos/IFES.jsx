import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import institutos from "../institutos.json";

const IFES = () => {
  const instituto = institutos.find((inst) => inst.sigla === "IFES");

  if (!instituto) {
    return <div>Instituto não encontrado</div>;
  }

  return <InstitutionPage {...instituto} />;
};

export default IFES;
