import React from "react";
import InstitutionPage from "../../../../components/InstitutionPage/InstitutionPage";
import institutos from "../institutos.json";

const IFF = () => {
  const instituto = institutos.find((inst) => inst.sigla === "IFF");

  if (!instituto) {
    return <div>Instituto não encontrado</div>;
  }

  return <InstitutionPage {...instituto} />;
};

export default IFF;
