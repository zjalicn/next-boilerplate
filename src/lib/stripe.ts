// import Stripe from "stripe";
import { Stripe, loadStripe } from "@stripe/stripe-js";

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe;
