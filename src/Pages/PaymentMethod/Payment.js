import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PUBLIC_KEY =
  "pk_test_51KIFUsCIxOl74wHrHWJZSZg4rV4vT6odatJKvOA4OYoRSHv9GQ76a9kOYghUUWriPrQJ7dE3sHBc1VpcVedigUz200s4ntulHo";
const stripeTestPromise = loadStripe(PUBLIC_KEY);
const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(
      `https://hotel-management-server-production.up.railway.app/payments/${id}`
    )
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [id]);
  return (
    <div className="container">
      {payment?.price && (
        <Elements stripe={stripeTestPromise}>
          <CheckoutForm payment={payment}></CheckoutForm>
        </Elements>
      )}
    </div>
  );
};
export default Payment;
