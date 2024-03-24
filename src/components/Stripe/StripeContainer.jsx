import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe('pk_test_51OtnE0J1QyQ5ngYKyhVfrybsAScR6acLnhOrVEMJBEuwOZvGRRYlAnT2TBFy321Y9bcbKDRijhSTQGi29J1tQPjh00TxW9VBGl');

const Stripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;