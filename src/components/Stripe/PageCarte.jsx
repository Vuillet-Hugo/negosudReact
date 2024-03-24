import React from 'react';
import StripeContainer from "./StripeContainer";

function PageCarte() {
    return(
        <div className='border-2 border-black w-96'>
            <h1>Procéder au paiement</h1>
            <StripeContainer />
        </div>
    )
}

export default PageCarte;