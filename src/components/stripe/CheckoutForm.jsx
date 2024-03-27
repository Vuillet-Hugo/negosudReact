import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";


const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      if (!error) {
        console.log("Token généré", paymentMethod);
      } else {
        console.log(error.message);
      }
    } catch (error) {
      console.log('Erreur lors de la création du paiement :', error);
    }
  };


  return(
    <form onSubmit={handleSubmit} className="">
        <CardElement className=" h-64 mr-0 p-12">
            options ={{hidePostalCode : true}}
            <button>Payer</button>
        </CardElement>
    </form>
  )
};

export default CheckoutForm;
