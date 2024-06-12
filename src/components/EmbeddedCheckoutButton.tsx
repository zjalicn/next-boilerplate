"use client";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
  useStripe,
} from "@stripe/react-stripe-js";
import { useCallback, useRef, useState } from "react";

export default function EmbeddedCheckoutButton() {
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  const createCheckout = api.payment.createCheckout.useMutation();
  const stripePromise = useStripe();

  const handleCheckout = async () => {
    const response = await createCheckout.mutateAsync();
    const stripe = await stripePromise;

    if (stripe !== null) {
      await stripe.redirectToCheckout({
        sessionId: response.id,
      });
    }
  };

  const fetchClientSecret = useCallback(() => {
    // Create the checkout session
    return fetch("/api/embedded-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId: "price_10tHkdBG7AptWZlcIjbBpS8r" }),
    })
      .then((res) => res.json())
      .then((data) => data.client_secret);
  }, []);

  const options = { fetchClientSecret };

  return <button onClick={handleCheckoutClick}>Checkout</button>;
}
