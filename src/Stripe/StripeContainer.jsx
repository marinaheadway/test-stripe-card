import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51QkYA6QXV9rkjek9hNgeoSHrKxpgpS6M2yBqbcSztywZwaXr7TtUq2XQ8ziPmthM7ZgMmttcHnPAgOEtwbgRhNh600ecXrcaep";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;