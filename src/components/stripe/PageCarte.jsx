import React from "react";
import StripeContainer from "../stripe/StripeContainer";

function PageCarte() {
  return (
    <div className="flex justify-center mt-6">
    <div className="w-1/3 h-96">
      <h1 className="text-xl flex justify-center">Procéder au paiement</h1>
      <StripeContainer />
    </div>
    </div>
  );
}

export default PageCarte;
